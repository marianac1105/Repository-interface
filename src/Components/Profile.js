import React from "react";
import { Card, Col, Row, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Style from "./Profile.module.css";

export default function Profile({ profileData }) {
  return (
    <Card bg="dark" text="white" className="mb-3">
      <Card.Body>
        <Row>
          <Col md={6}>
            <Card.Title className={Style.title}>
              {" "}
              {profileData.name}{" "}
            </Card.Title>
            <Card.Subtitle className="mb-3">
              Repositories{" "}
              <Badge pill variant="light">
                {profileData.public_repos}
              </Badge>
            </Card.Subtitle>
            <Card.Text className="mb-3">{profileData.description}</Card.Text>
          </Col>
          <Col md={3}></Col>
          <Col md={3}>
            <img
              className="d-none d-md-block text-center"
              height="200"
              alt={profileData.avatar_url}
              src={profileData.avatar_url}
            />
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {profileData.location}
          </Col>
          <Col md={3}>
            <Card.Link className="text-white" href={profileData.html_url}>
              <FontAwesomeIcon icon={faGithub} /> {profileData.html_url}
            </Card.Link>
          </Col>
          <Col md={3}>
            <Card.Link className="text-white" href={profileData.blog}>
              <FontAwesomeIcon icon={faBlog} /> {profileData.blog}
            </Card.Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
