import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


// Regular expression to validate email format
const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

function Contact() {
  // Setting up state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message:''
  });

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    // Updating the corresponding state variable based on input field
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

   // Handle input blur (when user moves cursor out of field)
   const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    if (value.trim() === '') {
      errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage
    }));
  };

  // Handle email validation when the user types
  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address'
      }));
    }
  };

  // Handling form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Resetting previous error messages
    let formErrors = {...errors};

    // Validation checks
    if (name.trim() === '') formErrors.name = 'Name is required';
    if (email.trim() === '') formErrors.email = 'Email is required';
    if (!validateEmail(email)) formErrors.email = 'Invalid email address';
    if (message.trim() === '') formErrors.message = 'Message is required';

   // If there are errors, update the error state and don't submit
   if (Object.values(formErrors).some((error) => error !== '')) {
    setErrors(formErrors);
    return;
  }

    // If everything is valid, clear form and show a success message
    setName('');
    setEmail('');
    setMessage('');
    alert(`Hello ${name}, your message has been sent!`);
    setErrors({ name: '', email: '', message: '' });
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
              onBlur={handleBlur}
              placeholder="Your Name"
            />
             {errors.name && <p className="error-text">{errors.name}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              onBlur={() => {
                handleBlur({ target: { name: 'email', value: email } });
                handleEmailBlur();
              }}
              placeholder="name@example.com"
            />
              {errors.email && <p className="error-text">{errors.email}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              rows={3}
              placeholder="Your Message"
            />
             {errors.message && <p className="error-text">{errors.message}</p>}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </form>
     </div> 
 
  );
}

export default Contact;


