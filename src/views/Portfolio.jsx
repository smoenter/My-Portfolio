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
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMHVXPt-NemX-odYqjPkzBL_9pVzY-KATIg&s" alt="picture of digit recipe box"/>
            <Card.Body>
              <Card.Title>Project 1: Digital Recipe Box</Card.Title>
              <Card.Text>
                This group project was to create a digital recipe box allows you to store recipes to your digital recipe box, so you will never lose your favorite reciepes again. This project used HTML, CSS, Javascript and GitHub.
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
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTO_pkbOvp1f91p9pkbe1pQVrn-ld9N_GQw&s" alt="Github readme generator picture" />
            <Card.Body>
              <Card.Title>Project 2: README Template</Card.Title>
              <Card.Text>
                A Professional README generator to be able to use in futur projects with quick and easy access. This project used inquirer package, node index.js and Github. I was also able to learn how to use screencastify to make a video of how the README worked. This project also allowed to improved my GitHub skills.
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
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluYM5js7lH99BO4aUtPgChKPu1JuCPpjjAA&s" alt ="image of vehicles" />
            <Card.Body>
              <Card.Title>Project 3:  Vehicle Builder </Card.Title>
              <Card.Text>
                Vehicle Builder. Create the car of your dreams or find one that is already exist for you. This code can also inform your if the truck can tow or if your motorbike can performed a wheelie. This project was made using typescript and inquirer, and GitHub. 
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
            <Card.Img variant="top" src="https://play-lh.googleusercontent.com/pCQw51XRP4UPr-FCYDjvNnEpFa0HDGJjjLDldN3rmw4KkwhqPu0PZXE8EopmAxzH9mQ" alt="weather picture" />
            <Card.Body>
              <Card.Title>Project 4: Weather App</Card.Title>
              <Card.Text>
                WeatherApp is a simple application that provides weather information for different locations. This project allowed me learn how to work with API keys, API routes, how to deploy the app on render, and GitHub
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
            <Card.Img variant="top" src="https://i.etsystatic.com/34307078/r/il/353255/4924089117/il_fullxfull.4924089117_5pvu.jpg" alt="picture of an employee tracker" />
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
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwBzfI5mNLhqnNzJfJERffmmaeuh_HAgUKA&s" alt="coming soon picture"/>
            <Card.Body>
              <Card.Title>Project 6</Card.Title>
              <Card.Text>
                A project will be coming soon.
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


