import React from 'react';
import { CardDeck, Row } from 'reactstrap';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <h1 className="phone">Projects</h1>
      <h1 className="notPhone">Previous Projects</h1>
      <p>This is a collection of some of my previous projects</p>
      <CardDeck>
        <Row className="justify-content-md-center">
          {projects?.map(({ image, title, description, url, lastUpdated }) => (
            <ProjectCard
              image={image}
              title={title}
              description={description}
              url={url}
              lastUpdated={lastUpdated}
            />
          ))}
        </Row>
      </CardDeck>
    </div>
  );
};

export default Projects;
