import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, ListGroup } from 'react-bootstrap';

export default function Resume() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>My Resume</Card.Title>
        <Card.Text>
          Below are my proficiencies, as well as a link to download my full resume.
        </Card.Text>
        <Button variant="primary" href="https://docs.google.com/document/d/1WbLNWkRH1pqX8_NOQGXvnJPpPI1hya3w1DnRKN3sjvU/edit?usp=sharing"
          target="_blank"
          download>Download My Resume</Button>
      </Card.Body>

      <Card.Body>
        <Card.Title>My Proficiencies:</Card.Title>
        <ListGroup className="mt-3">
          <ListGroup.Item>HTML5, CSS3, JavaScript (ES6+)</ListGroup.Item>
          <ListGroup.Item>React.js</ListGroup.Item>
          <ListGroup.Item>Node.js, Express.js</ListGroup.Item>
          <ListGroup.Item>SQL, PostgreSQL</ListGroup.Item>
          <ListGroup.Item>Git, GitHub</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
