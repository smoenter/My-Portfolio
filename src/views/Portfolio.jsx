import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Portfolio() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Portfolio</Card.Title>
        <Card.Text>
          Below are six of my projects with links to both the live applications and the corresponding GitHub repositories.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Project 1: Digital Recipe Box </Card.Subtitle>
        <Card.Text>
          The digital recipe box allows you to store recipes to your digital recipe box, so you will never lose your favorite reciepes again. Type in the ingredients and add the instructions to the recipe, choose a category as to where you want to store your recipes then hit submit to save it. A quick and easy way to save your favorite recipes without having to lot of paper or space to store it.
        </Card.Text>
        <div className="d-flex gap-2 mb-2">
        <Button variant="primary" href="https://smoenter.github.io/Project-1/" target="_blank">Live Demo</Button>
        <Button variant="secondary" href="https://github.com/smoenter/Project-1" target="_blank" className="mt-2">GitHub Repo</Button>
        </div>
      </Card.Body>


      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted"> Project 2: README Template </Card.Subtitle>
        <Card.Text>
          A Professional README generator to be able to use in futur projects
        </Card.Text>
        <div className="d-flex gap-2 mb-2">
        <Button variant="primary" href=" https://drive.google.com/file/d/1lDPzlf8tWVbOBC8WBpFny4RJpZeUv2_u/view?usp=sharing" target="_blank">Live Demo</Button>
        <Button variant="secondary" href="https://github.com/smoenter/README-Template" target="_blank" className="mt-2">GitHub Repo</Button>
        </div>
      </Card.Body>

      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Project 3: Vehicle Builder </Card.Subtitle>
        <Card.Text>
          Vehicle Builder. Create the car of your dreams or find one that is already exist for you. This code can also inform your if the truck can tow or if your motorbike can performed a wheelie. In this projected I learned how to use typescript
        </Card.Text>
        <div className="d-flex gap-2 mb-2">
        <Button variant="primary" href="https://drive.google.com/file/d/15Tz4S_Jqv_6C3UwYPFS3YYPQTwtWwI7P/view" target="_blank">Live Demo</Button>
        <Button variant="secondary" href="https://github.com/smoenter/Challenge-8-Vehicle-Builder" target="_blank" className="mt-2">GitHub Repo</Button>
        </div>
      </Card.Body>

      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Project 4: Weather App </Card.Subtitle>
        <Card.Text>
          WeatherApp is a simple application that provides weather information for different locations.
        </Card.Text>
        <div className="d-flex gap-2 mb-2">
        <Button variant="primary" href="https://challenge-9-weather-app.onrender.com" target="_blank">Live Demo</Button>
        <Button variant="secondary" href="https://github.com/smoenter/Challenge-9-Weather-App" target="_blank" className="mt-2">GitHub Repo</Button>
        </div>
      </Card.Body>

      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Project 5: Employee Tracker </Card.Subtitle>
        <Card.Text>
          Employee Tracker is a command-line application that allows users to manage a company's employee database. It uses Node.js, Inquirer, and MySQL.
        </Card.Text>
        <div className="d-flex gap-2 mb-2">
        <Button variant="primary" href="https://drive.google.com/file/d/12EHGJ_ElLiEIW-kca9DhWpWugd7K7A91/view?usp=drive_link" target="_blank">Live Demo</Button>
        <Button variant="secondary" href="https://github.com/smoenter/Challenge-10-Employee-Tracker" target="_blank" className="mt-2">GitHub Repo</Button>
        </div>
      </Card.Body>

      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Project 6 </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex gap-2 mb-2">
        <Button variant="primary" href="https://live-application-link.com" target="_blank">Live Demo</Button>
        <Button variant="secondary" href="https://github.com/yourusername/project6" target="_blank" className="mt-2">GitHub Repo</Button>
        </div>
      </Card.Body>
    </Card>

  );
}


export default Portfolio;


