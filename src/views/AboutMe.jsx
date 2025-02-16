import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function AboutMe() {
  return (
    <Card>
      <Card.Title>About Me</Card.Title>
      <Card.Img variant="top" src="holder.js/100px180" alt="Profile picture" />
      <Card.Body>
        <Card.Title>Stacey Moenter | Full Stack Developer</Card.Title>
        <Card.Text>
          Hi, I’m Stacey Moenter, a passionate and dedicated Full-Stack Developer with a love for both the front-end and back-end of web development. I have experince in creating dynamic, user-friendly web applications using modern technologies like React, Node.js, Express, and SQL. 
          </Card.Text>

          <Card.Text>
          I started my journey into the world of programming with a love for problem-solving and a desire to build things that help people. Over the past few months, I’ve gained hands-on experience working with a variety of tools and frameworks that allow me to build scalable and efficient applications from scratch. Whether it's working on the user interface or building robust back-end systems, I thrive in an environment where I can continue learning and pushing the boundaries of what’s possible with code.
          </Card.Text>

         <Card.Text>
          When I’m not coding, you can usually find me spending quality time with my family. I believe that work-life balance is crucial, and spending time with loved ones helps me recharge and come up with fresh ideas for my projects. I enjoy hiking, cooking, and playing board games and puzzles with my family. I also have a deep interest in technology innovations and love keeping up with the latest trends in the software development world.
          </Card.Text>

          <Card.Text>
          I’m always eager to take on new challenges and collaborate with others. My goal is to work on projects that have a meaningful impact, and I’m excited about the endless possibilities in tech.
        </Card.Text>
        <Link to="/portfolio">
        <Button variant="primary">View My Portfolio</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;


