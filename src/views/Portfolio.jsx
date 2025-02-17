import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Portfolio() {
  return (
    <div className="container">
      {/* First Row */}
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 1: Digital Recipe Box</Card.Title>
              <Card.Text>
                This group project was to create a digital recipe box allows you to store recipes to your digital recipe box, so you will never lose your favorite reciepes again. Type in the ingredients and add the instructions to the recipe, choose a category as to where you want to store your recipes then hit submit to save it. A quick and easy way to save your favorite recipes without having to lot of paper or space to store it.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex gap-2 mb-2">
                <Button variant="primary" href="https://smoenter.github.io/Project-1/" target="_blank">Live Demo</Button>
                <Button variant="secondary" href="https://github.com/smoenter/Project-1" target="_blank" className="mt-2">GitHub Repo</Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 2: README Template</Card.Title>
              <Card.Text>
                A Professional README generator to be able to use in futur projects
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex gap-2 mb-2">
                <Button variant="primary" href=" https://drive.google.com/file/d/1lDPzlf8tWVbOBC8WBpFny4RJpZeUv2_u/view?usp=sharing" target="_blank">Live Demo</Button>
                <Button variant="secondary" href="https://github.com/smoenter/README-Template" target="_blank" className="mt-2">GitHub Repo</Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 3:  Vehicle Builder </Card.Title>
              <Card.Text>
                Vehicle Builder. Create the car of your dreams or find one that is already exist for you. This code can also inform your if the truck can tow or if your motorbike can performed a wheelie. In this projected I learned how to use typescript
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex gap-2 mb-2">
                <Button variant="primary" href="https://drive.google.com/file/d/15Tz4S_Jqv_6C3UwYPFS3YYPQTwtWwI7P/view" target="_blank">Live Demo</Button>
                <Button variant="secondary" href="https://github.com/smoenter/Challenge-8-Vehicle-Builder" target="_blank" className="mt-2">GitHub Repo</Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 4: Weather App</Card.Title>
              <Card.Text>
                WeatherApp is a simple application that provides weather information for different locations.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex gap-2 mb-2">
                <Button variant="primary" href="https://challenge-9-weather-app.onrender.com" target="_blank">Live Demo</Button>
                <Button variant="secondary" href="https://github.com/smoenter/Challenge-9-Weather-App" target="_blank" className="mt-2">GitHub Repo</Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 5: Employee Tracker</Card.Title>
              <Card.Text>
                Employee Tracker is a command-line application that allows users to manage a company's employee database. It uses Node.js, Inquirer, and MySQL.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex gap-2 mb-2">
                <Button variant="primary" href="https://drive.google.com/file/d/12EHGJ_ElLiEIW-kca9DhWpWugd7K7A91/view?usp=drive_link" target="_blank">Live Demo</Button>
                <Button variant="secondary" href="https://github.com/smoenter/Challenge-10-Employee-Tracker" target="_blank" className="mt-2">GitHub Repo</Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 6</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex gap-2 mb-2">
                <Button variant="primary" href="https://live-application-link.com" target="_blank">Live Demo</Button>
                <Button variant="secondary" href="https://github.com/yourusername/project6" target="_blank" className="mt-2">GitHub Repo</Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}


export default Portfolio;


