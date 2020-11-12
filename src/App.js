import React from "react"
import FetchReposData from "./api/index.js"
import {Container} from "react-bootstrap"

function App() {

  const {repos, loading, error} = FetchReposData()
  
  return (
   <Container>
     {loading && <h1>Loading...</h1>}
     {error && <h1>Error, Try Refreshing. </h1>}
     <h1>{repos.length}</h1>

   </Container>
  );
}

export default App;
