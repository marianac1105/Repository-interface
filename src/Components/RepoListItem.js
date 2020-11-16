import React, { useState } from "react";
import { Badge, Button, Card, Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye, faStar } from '@fortawesome/free-solid-svg-icons'

export default function RepoLisItem({repo}) {
 
  const [open, setOpen] = useState(false)
  return (
    <Card className ="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
        <div>
        <Card.Title>{repo.name} - <span className="text-muted font-weight-light">{repo.language}</span>
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
        {repo.fork?"Forked": "Not forked"}
        </Card.Text>
        
        </div>
     <Card.Text>
       <Button 
       onClick={() =>setOpen(prevOpen => !prevOpen)}
       variant="primary" className="mt-4" >{open?'Hide Top Tontributers' :'View Top Contributors'}</Button>
     </Card.Text>
     <Collapse in={open}>
     <div className="mt-4">
Contributor
     </div>
     </Collapse>
      </Card.Body>
    </Card>
  );
}
