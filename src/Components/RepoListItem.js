import React, { useState, useEffect } from "react";
import { Badge, Button, Card, Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye, faStar} from '@fortawesome/free-solid-svg-icons'
import Style from "./RepoListItem.module.css"
import FetchContributorsApi from "../api/contributorsApi"

export default function RepoLisItem({repo}) {
 
  const [open, setOpen] = useState(false)
  const [repoName, setRepoName] = useState("")
  const [contributors, setContributors] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setContributors(await FetchContributorsApi(repoName));
    };
    if(repoName){
      fetchAPI(); }
  }, [repoName]);

  console.log(contributors.data)

  return (
    <Card className ="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
        <div>
        <Card.Title><Card.Link href={repo.html_url} className={Style.link} > {repo.name} </Card.Link><span className="text-muted font-weight-light">- {repo.language}</span>
        </Card.Title>
        <Card.Subtitle className="text-muted mb-2">
          {repo.license? repo.license.name:null}
        </Card.Subtitle>
        <Badge variant="secondary" className="mr-2 px-2">{repo.stargazers_count} <FontAwesomeIcon icon={faStar} /></Badge>
        <Badge  variant="secondary" className="mr-2 px-2">{repo.watchers_count} <FontAwesomeIcon icon={faEye} /> </Badge>
        <Card.Text className="mt-2 ">
        {repo.description}

        </Card.Text>
        </div>
        <Card.Text className="text-muted">
        {repo.fork?"Forked": null}
        </Card.Text>
        
        </div>
     <Card.Text>
       <Button 
       value = {repo.name}
       onClick={(e) => {
         const {value} = e.target
        setOpen(prevOpen => !prevOpen)
        setRepoName(value)
       }}
       variant="primary" className="mt-4" >{open?'Hide Top Contributers' :'View Top Contributors'}</Button>
     </Card.Text>
     <Collapse in={open}>
     <div>
{contributors.data? contributors.data.map((contributor) =>{
  return <p>{contributor.login}</p>
}): "Loading..."}
</div>

     
     </Collapse>
      </Card.Body>
    </Card>
  );
}
