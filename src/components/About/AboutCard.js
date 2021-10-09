import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Farah Jamal </span>
            from <span className="purple"> Amman, Jordan.</span>
            <br />I am a fresh computer science graduate who trying to be a full stack developer 😁.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books 📖
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing CTFs 🏁
            </li>
            <li className="about-activity">
              <ImPointRight /> drawing characters using MOHO 🎴
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to Imagine Dragons 🎶
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
          "I'm not a part of your machine,
          I am the machine"
{" "}
          </p>
          <footer className="blockquote-footer">Imagine dragons</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
