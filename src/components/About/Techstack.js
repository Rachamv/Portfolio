import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// Import all necessary icons
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiPhp,
  DiLaravel,
  DiComposer,
  DiMarkdown,
  DiDatabase
} from 'react-icons/di';

import {
  SiNextdotjs,
  SiPostgresql,
  SiFlask
} from 'react-icons/si';

const technologies = [
  { id: "html5", icon: <DiHtml5 />, name: "HTML5" },
  { id: "css3", icon: <DiCss3 />, name: "CSS3" },
  { id: "sass", icon: <DiSass />, name: "Sass" },
  { id: "php", icon: <DiPhp />, name: "PHP" },
  { id: "laravel", icon: <DiLaravel />, name: "Laravel" },
  { id: "flask", icon: <SiFlask />, name: "Flask" },
  { id: "javascript", icon: <DiJavascript1 />, name: "JavaScript" },
  { id: "nodejs", icon: <DiNodejs />, name: "Node.js" },
  { id: "postgresql", icon: <SiPostgresql />, name: "PostgreSQL" },
  { id: "database", icon: <DiDatabase />, name: "Database" },
  { id: "python", icon: <DiPython />, name: "Python" },
  { id: "bootstrap", icon: <DiBootstrap />, name: "Bootstrap" },
  { id: "react", icon: <DiReact />, name: "React" },
  { id: "mongodb", icon: <DiMongodb />, name: "MongoDB" },
  { id: "nextjs", icon: <SiNextdotjs />, name: "Next.js" },
  { id: "git", icon: <DiGit />, name: "Git" },
  { id: "composer", icon: <DiComposer />, name: "Composer" },
  { id: "markdown", icon: <DiMarkdown />, name: "Markdown" },
];



function Techstack() {
  return (
    <Row className="tech-row">
      {technologies.map((tech) => (
        <Col key={tech.id} className="tech-icons">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id={`${tech.id}-tooltip`}>{tech.name}</Tooltip>}
          >
            {({ ref, ...triggerHandler }) => (
              <Button
                variant="light"
                {...triggerHandler}
                className="tech-button"
              >
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </Button>
            )}
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
