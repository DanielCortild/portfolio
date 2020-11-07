import React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Col,
  CardFooter,
} from 'reactstrap';
import Button from './Button';
import './ProjectCard.css';

const ProjectCard = ({
  image,
  title,
  description,
  url,
  secondBtn,
  lastUpdated,
}) => {
  return (
    <Col xs={12} md={6} xl={4} className="projectCard">
      <Card>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardImg top src={`images/${image}`} alt="" />
        <CardBody>
          <CardText
            dangerouslySetInnerHTML={{ __html: description }}
          ></CardText>
          <Button href={url} target="_blank" className="projectCard__website">
            <div className="notPhone">Visit Website</div>
            <div className="phone">Website</div>
          </Button>
          {secondBtn && (
            <Button href={url} target="_blank" className="projectCard__code">
              <div className="notPhone">View Code</div>
              <div className="phone">Code</div>
            </Button>
          )}
        </CardBody>
        <CardFooter>
          <small className="text-muted text-center">
            Last updated in {lastUpdated}
          </small>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default ProjectCard;
