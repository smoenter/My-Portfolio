import { NavLink } from 'react-router-dom';
import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export default function NavLinks() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/about">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    </Card>
  );
}



