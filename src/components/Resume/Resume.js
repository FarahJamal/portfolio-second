import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/FarahJamal.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Container>
       
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title=" Full Stack Developer, ASAC, LTUC."
              date="APR 2021 – nov 2021"
              content={[
                " Training to be a full stack developer in JavaScript.",
"                • HTML, CSS, JS from basic to advanced",
"• Problem solving (data structure and algorithms techniques)",
"• Building websites solve a real issue.",
"• REACT JavaScript", 
"• Building two final projects from scratch",
"o Take Me Away",
"o Week Beat"
                ]}
            />
            <Resumecontent
              title="Python Developer, Steam Center."
              date="MAY 2021 - AUG 2021"
              content={[
                "An intensive Training focusing on python development, English skills, and soft skills.",
"• Python programming from scratch\n",
"• Building automation project\n",
"o Project to calculate avg for students\n",
"• English Skills focusing in speaking and interviews techniques\n",
"• Soft Skills how to build your resume and your LinkedIn account.\n",
           ]}
            />
                    <Resumecontent
              title="ICT Up-Skilling Program, Al-Hussein Technical University.
"
date="OCT 2020 – JAN 2021"
              content={[
  "An intensive program, focusing on applied technical and employability skills, including:",
"o Cybersecurity (180 Hours): Vulnerability assessment and penetration testing.",
"o English Skills (80 Hours): Speaking, listening, Email and report writing.",
"o Soft Skills (80 Hours): Positive attitude and communication skills.",
,

           ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="computer science , BAU "
              date="2016 - 2020"
              content={[`GPA: 2.98`]}
            />

        

          
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
