import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard'; // Import your ProjectCard component

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectDetails = await fetchProjectDetails();
      setProjects(projectDetails);
    };

    fetchProjects();
  }, []);

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      {projects.map((project, index) => (
        <Col md={4} className="project-card" key={index}>
          <ProjectCard
            imgPath={project.imgPath}
            isBlog={project.isBlog}
            title={project.title}
            description={project.description}
            ghLink={project.ghLink}
            demoLink={project.demoLink}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProjectList;
---
#api
// Assuming you're using a library like axios for HTTP requests
import axios from 'axios';

const fetchProjectDetails = async () => {
  try {
    const response = await axios.get('https://your-api-endpoint/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching project details:', error);
    return [];
  }
};

// ProjectCard.js

import React from 'react';

const ProjectCard = ({ imgPath, isBlog, title, description, ghLink, demoLink, details }) => {
  return (
    <div className="project-card">
      <img src={imgPath} className="img-fluid" alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-details">
        <h4>Details:</h4>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className="project-links">
        <a href={ghLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
