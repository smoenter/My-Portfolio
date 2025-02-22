import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function AboutMe() {
  return (
    // Card title and profile picture 
    <Card>
      <Card.Body className="d-flex flex-column align-items-center justify-content-center">
      <Card.Title>About Me</Card.Title>
      <Card.Img variant="top" src="/src/assets/images/stacey_moenter.png" alt="Profile picture" style={{ width: '25%', height: 'auto', borderRadius: '8px' }}/>
      </Card.Body>
      
      {/* Card with info about me */}
      <Card.Body className="d-flex flex-column align-items-center justify-content-center">
        <Card.Title>Stacey Moenter | Full Stack Developer</Card.Title>
        <Card.Text style={{ width: '75%', padding: '8px', borderRadius: '4px' }}>
          Hi, I’m Stacey Moenter, a passionate and dedicated Full-Stack Developer with a love for both the front-end and back-end of web development. I have experince in creating dynamic, user-friendly web applications using modern technologies like React, Node.js, Express, and SQL. 
          </Card.Text>
          </Card.Body>

        {/* Card on how I got started  */}
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Card.Text style={{ width: '75%', padding: '8px', borderRadius: '4px' }}>
          I started my journey into the world of programming with a love for problem-solving and a desire to build things that help people. Over the past few months, I’ve gained hands-on experience working with a variety of tools and frameworks that allow me to build scalable and efficient applications from scratch. Whether it's working on the user interface or building robust back-end systems, I thrive in an environment where I can continue learning and pushing the boundaries of what’s possible with code.
          </Card.Text>
          </Card.Body>

        {/* Card about what I like to do outside of coding */}
         <Card.Body className="d-flex flex-column align-items-center justify-content-center">
         <Card.Text style={{ width: '75%', padding: '8px', borderRadius: '4px' }}>
          When I’m not coding, you can usually find me spending quality time with my family. I believe that work-life balance is crucial, and spending time with loved ones helps me recharge and come up with fresh ideas for my projects. I enjoy hiking, cooking, and playing board games and puzzles with my family. I also have a deep interest in technology innovations and love keeping up with the latest trends in the software development world.
          </Card.Text>
          </Card.Body>

        {/* Card about what are my goals */}
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Card.Text style={{ width: '75%', padding: '8px', borderRadius: '4px' }}>
          I’m always eager to take on new challenges and collaborate with others. My goal is to work on projects that have a meaningful impact, and I’m excited about the endless possibilities in tech.
        </Card.Text>
        {/* A button to view my portfolio */}
        <Link to="/portfolio">
        <Button variant="primary">View My Portfolio</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;


