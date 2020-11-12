
import { useReducer, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://api.github.com/orgs/catalyst";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
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
        loading: false,
        error: action.payload.error,
        repos: [],
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
        params: { page: page, ...params } })
      .then((res) => {
        dispactch({ type: ACTIONS.GET_DATA, payload: { repos: res.data } });
      })
      .catch((e) => {
          if(axios.isCancel(e))
      return dispactch({ type: ACTIONS.ERROR, payload: { error: e} });
      });

      return () => {cancelToken1.cancel()}
  }, [params, page]);

  return state;
}
