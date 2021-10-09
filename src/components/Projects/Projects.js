import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import beat from "../../Assets/Projects/beat.png";
import bm from "../../Assets/Projects/bm.png";
import book from "../../Assets/Projects/book.png";
import hb from "../../Assets/Projects/hb.png";
import hp from "../../Assets/Projects/hp.png";
import port from "../../Assets/Projects/port.png";
import sc from "../../Assets/Projects/sc.png";
import take from "../../Assets/Projects/take.png";


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
              imgPath={beat}
              isBlog={false}
              title="Week Beat"
              description="A project to know what you want to do on the weekend includes many activites as suggest movies, restaurants, random activity, 
              events based on you country you can add a blog and post it is a fully crud App using React.js & node.js & MongoDB and working with different APIs
        "
         link="https://github.com/FarahJamal/week-beat-front"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bm}
              isBlog={false}
              title="Bus Mall"
              description="project help sellers who don't have actual place to sell their things So this kind of projects to let coustmers choose the most products that take their interested and show it in a chart and table
              using HTML,CSS, vanilla-JavaScript based on DOM JS"
              link="https://github.com/FarahJamal/bus-mall"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Books Cave"
              description="project for books lovers let you see different books from database add, delete update book you have with login system and beauty design
              used react,node.js and MongoDB on this project and APIs"
              link="https://github.com/FarahJamal/can-of-books"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hb}
              isBlog={false}
              title="Horned Beasts"
              description="Simple website showing picture like an album based on APi's using react.js"
              link="https://github.com/FarahJamal/hornedBeastsFinal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hp}
              isBlog={false}
              title="Harry Potter"
              description="Harry Potter website for potter heads let you know about harry potter world with quiz and pictures based on your choose used css, html dom based js"
              link="https://github.com/FarahJamal/HarryPotterHogwarts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="portfolio"
              description="My portfolio using react.js
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              
              link="https://github.com/FarahJamal/My-Portofolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sc}
              isBlog={false}
              title="Salmon Cookies"
              description="project made for user problem who has a salmon cookies in different places need to calculate average cookies sold and let user know more about it 
              html,css and dom based js"
                  link="https://github.com/FarahJamal/cookie-stand"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={take}
              isBlog={false}
              title="Take Me Away"
              description=" project for travelling lovers contains some description and cities to visit , you can add blog in addition to see your added fav cities with a test 
              used HTML,CSS, vanilla JS based on DOM and local Storage"
                    link="https://github.com/FarahJamal/Take-Me-Away"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
