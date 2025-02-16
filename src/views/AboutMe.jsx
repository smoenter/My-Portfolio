import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function AboutMe() {
  return (
    <Card>
      <Card.Img variant="top" src="" alt="Profile Image" />
      <Card.Title>About Me</Card.Title>
      <Card.Body>
        Hi! I'm Stacey Moenter, a passionate software developer with a love for building web applications and solving complex problems. I specialize in front-end development with a focus on React and TypeScript. I'm constantly learning and expanding my skill set to stay up-to-date with the latest technologies.
        <Card.Title>Background</Card.Title>
        I graduated with a degree in Computer Science from Ohio State University. Over the past 6 months , I've worked on various projects ranging from small websites applications.
        <Card.Title>Skills</Card.Title>
        <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>TypeScript</ListGroup.Item>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>Node.js & Express</ListGroup.Item>
        <ListGroup.Item>Git and GitHub</ListGroup.Item>
      </ListGroup>
    </Card>
    <Card.Title>Hobbies</Card.Title>
        When I'm not coding, I enjoy playing and watching my daughter's sports activities, hiking, and reading. I also love experimenting with new technologies. projects.
      </Card.Body>
    </Card>
  );
}



export default AboutMe;


