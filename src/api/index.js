
import { useReducer, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://api.github.com/orgs/catalyst";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
  UPDATE_HAS_NEXT_PAGE: "Upadate has-next-page"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, repos: [] };
     

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, repos: action.payload.repos };
     

    case ACTIONS.ERROR:
      return {
        ...state,
        loading:false,
        error: action.payload.error,
        repos: [],
      };
      case ACTIONS.UPDATE_HAS_NEXT_PAGE:
        return {
          ...state,
          hasNextPage: action.payload.hasNextPage,
         
        };
        
      

    default:
      return state;
      
  }
}

export default function FetchReposData(params, page) {
  const [state, dispactch] = useReducer(reducer,{repos: [], loading:true})

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source()
    dispactch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(baseUrl + "/repos", {
        cancelToken: cancelToken1.token,  
        params: {direction:"desc", sort:"updated", per_page:20, page: page, ...params } })
      .then((res) => {
        dispactch({ type: ACTIONS.GET_DATA, payload: { repos: res.data } });
      })
      .catch((e) => {
          if(axios.isCancel(e))
      return dispactch({ type: ACTIONS.ERROR, payload: { error: e} });
      });

      const cancelToken2 = axios.CancelToken.source()
      axios
      .get(baseUrl + "/repos", {
        cancelToken: cancelToken2.token,  
        params: {direction:"desc", sort:"updated", per_page:20, page: page + 1, ...params } })
      .then((res) => {
        dispactch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.length !== 0 } });
      })
      .catch((e) => {
          if(axios.isCancel(e))
      return dispactch({ type: ACTIONS.ERROR, payload: { error: e} });
      });

      return () => {cancelToken1.cancel()
        cancelToken2.cancel()
      }
  }, [params, page]);

  return state;
}

