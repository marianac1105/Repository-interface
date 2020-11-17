import React, {useState} from "react"
import FetchReposData  from "./api/index.js"
import {Container} from "react-bootstrap"
import RepoListItem from "./Components/RepoListItem"
import ReposPagination from "./Components/ReposPagination"
import SortForm from "./Components/SortForm"
import Profile from "./Components/Profile"

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)

  const {repos, loading, error, hasNextPage, profileData} = FetchReposData(params, page)
  

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
  
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value, }
    })
    
  }
  
  
  return (
   <Container className="my-4">
   
   <Profile
     profileData ={profileData}
   />
   
   <SortForm 
     param = {params}
     onParamChange = {handleParamChange}

   />
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
     <ReposPagination
     page = {page}
     setPage = {setPage}
     hasNextPage ={hasNextPage}
   />

   </Container>
  );
}

export default App;
