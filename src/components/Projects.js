import React from 'react'
import { CardDeck, Row } from 'reactstrap';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({projects}) => {
  return (
    <div className="projects">
      <h1 className="phone">Projects</h1>
      <h1 className="notPhone">Previous Projects</h1>
      <p>This is a collection of some of my previous projects</p>
      <CardDeck>
        <Row>

        {projects?.map(({image, title, description, url}) => (
          <ProjectCard
            image={image}
            title={title}
            description={description}
            url={url}
          />
        ))}

        </Row>
      </CardDeck>
    </div>
  )
}

export default Projects
