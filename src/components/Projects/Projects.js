import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RoyalPhoenix from "../../Assets/Projects/royal-phoenix.png";
import RestofWorld from "../../Assets/Projects/Rest-of-the-world-kibo-project_.png";
import devFinder from "../../Assets/Projects/Github-User-Serach.png";
import PhoenixMart from "../../Assets/Projects/phoenixmart.png";
import TechieNerd from "../../Assets/Projects/techienerd-squad_.png";
import WeatherApp from "../../Assets/Projects/Weather-App_.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PhoenixMart}
              isBlog={false}
              title="PhoenixMart"
              description="PhoenixMart eCommerce platform is built with Django, offering a comprehensive solution for online marketplace needs. It provides a feature-rich environment for both Vendors and users, facilitating the buying and selling of products in various categories."
              ghLink="https://github.com/TechieNerdSolutions/PhoenixMart"
              demoLink="https://phoenixmart.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="Weather App"
              description="The Weather App has been developed with HTML, CSS, JavaScript, and API integration. Its key features encompass the ability to fetch weather data and present the information to users. Additionally, it includes an integrated forecast section, location detection functionality, and an animated weather icon.."
              ghLink="https://github.com/Rachamv/Weather-App"
              demoLink="https://rachamv.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devFinder}
              isBlog={false}
              title="Devfinder"
              description="Devfinder is a user-friendly web application designed to empower you in swiftly finding and exploring GitHub profiles in a visually engaging manner. It is built with HTML, CSS, JavaScript, and utilizes the GitHub API to fetch user data."
              ghLink="https://github.com/Rachamv/Github-User-Serach"
              demoLink="https://rachamv.github.io/Github-User-Serach/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RoyalPhoenix}
              isBlog={false}
              title="Royal Phoenix"
              description="The Royal Phoenix Website marks my inaugural project utilizing Flask and Bootstrap. This website is crafted with the objective of serving as a gateway to exciting career opportunities for all individuals. With a combination of Flask's dynamic web framework and Bootstrap's sleek design elements, the Royal Phoenix Website aims to provide a seamless and visually appealing experience, opening doors to promising career paths."
              ghLink="https://github.com/adeolav/Royal-Phoenix_website"
              demoLink="https://royal-phoenix-website.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TechieNerd}
              isBlog={false}
              title="TechieNerd Library Website"
              description="The TechieNerd Library Website stands as a collaborative team project developed under the guidance of Kibo of Technology. This website is meticulously designed to offer users the ability to explore books categorized by genre. This README serves as a comprehensive guide, detailing the project's structure, styles, and the JavaScript code implemented to bring the website to life."
              ghLink="https://github.com/kibo-web-dev-fundamentals-july-23/wdf-jul-23-final-project-techienerd-squad"
              demoLink="https://kibo-web-dev-fundamentals-july-23.github.io/wdf-jul-23-final-project-techienerd-squad/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RestofWorld}
              isBlog={false}
              title="The Rest of World Homepage"
              description="The Rest of World Homepage is a collective team endeavor crafted under the mentorship of Kibo of Technology. This project serves as a testament to our proficiency in CSS, showcasing the application of our solid knowledge and skills in creating an engaging and visually appealing website."
              ghLink="https://github.com/Rachamv/Rest-of-the-world-kibo-project"
              demoLink="https://rachamv.github.io/Rest-of-the-world-kibo-project/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
