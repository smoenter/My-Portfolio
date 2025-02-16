import React from 'react'
import Card from 'react-bootstrap/Card';

function Portfolio() {
  return (
    <Card> 
      <Card.Body>
        <Card.Title>Portfolio</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Projects</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="https://github.com/smoenter">GitHub Link</Card.Link>
        <Card.Link href="https://www.linkedin.com/in/stacey-moenter-6017a064/">Linkedin Link</Card.Link>
      </Card.Body>
    </Card>
    
  );
}




export default Portfolio;
  

