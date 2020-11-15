import React, {useState} from "react"
import FetchReposData from "./api/index.js"
import {Container} from "react-bootstrap"
import RepoListItem from "./Components/RepoListItem"
import ReposPagination from "./Components/ReposPagination"

function App() {

  // const [params, setParams] = useState({})
  const [page, setPage] = useState(1)

  const {repos, loading, error, hasNextPage} = FetchReposData()
  
  return (
   <Container className="my-4">
   <ReposPagination
     page = {page}
     setPage = {setPage}
     hasNextPage ={hasNextPage}
   />
     {loading && <h1>Loading...</h1>}
     {error && <h1>Error, Try Refreshing. </h1>}
     {repos.map(repo => {
       return <RepoListItem
         key = {repo.id}
         repo = {repo}
       />
     })}

   </Container>
  );
}

export default App;
