import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Contact from '../views/Contact';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#AboutMe">About Me</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
