import React from "react";
import { Badge, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'

export default function RepoLisItem({repo}) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
        <div>
        <Card.Title>{repo.name} - <span className="text-muted font-weight-light">{repo.language}</span>
        </Card.Title>
        <Badge variant="secondary" className="mr-2">{repo.fork?"Forked": "Not forked"}</Badge>
        <Badge  variant="secondary">{repo.watchers_count} {repo.watchers_count === 1? "Watcher": "Watchers"}</Badge>
        <Card.Subtitle className="text-muted mt-2 ">
        {repo.description}

        </Card.Subtitle>
        </div>
        <FontAwesomeIcon icon={faStar} />
        
        
        </div>
      </Card.Body>
    </Card>
  );
}
