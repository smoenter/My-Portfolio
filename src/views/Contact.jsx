import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// Import helper functions for validation
import { validateName, validateEmail, checkMessage } from './utils/helpers'; // Adjust path if needed

function Contact() {
  // Setting up state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Updating the corresponding state variable based on input field
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

  // Handling form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Resetting previous error messages
    let errors = [];

    // Validation checks
    if (!validateName(name)) errors.push('Name is required');
    if (!validateEmail(email)) errors.push('Email is invalid');
    if (!checkMessage(message)) errors.push('Message is required');

    // If there are validation errors, we set them in the state
    if (errors.length > 0) {
      setErrorMessages(errors);
      return; // Stop form submission if validation fails
    }

    // If everything is valid, clear form and show a success message
    setName('');
    setEmail('');
    setMessage('');
    alert(`Hello ${name}, your message has been sent!`);

    // Reset error messages after successful form submission
    setErrorMessages([]);
  };

  return (
    <div className="container text-center">
      <h1>Contact</h1>
      <form onSubmit={handleFormSubmit}>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Your Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="name@example.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={message}
              onChange={handleInputChange}
              rows={3}
              placeholder="Your Message"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </form>

      {/* Display error messages if any */}
      {errorMessages.length > 0 && (
        <div className="error-messages">
          {errorMessages.map((error, index) => (
            <p key={index} className="error-text">{error}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Contact;


