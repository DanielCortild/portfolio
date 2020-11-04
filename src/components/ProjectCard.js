import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Col } from 'reactstrap';
import Button from './Button';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, url }) => {
  return (
    <Col xs={12} md={6} xl={4} className="projectCard">
      <Card>
        <CardTitle><h3>{title}</h3></CardTitle>
        <CardImg top src={`images/${image}`} alt="" />
        <CardBody>
          <CardText dangerouslySetInnerHTML={{__html: description}}></CardText>
          <Button href={url} target="_blank">
            <div className="notPhone">Visit Website</div>
            <div className="phone">Website</div>
          </Button>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ProjectCard;
