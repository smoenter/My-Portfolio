import { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function Contact() {
  // Setting up state variables
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });



  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handling form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    // Check if fields are empty or invalid
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
        valid = false;
      }
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      valid = false;
    }

    // Update the state with the error messages
    setErrors(newErrors);

    // If all fields are valid, submit the form
    if (valid) {
      // Call sendEmail function to send email via EmailJS
      sendEmail(e);

      // Clear form fields and show success message
      alert(`Hello ${formData.name}, your message has been sent!`);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  // Using useRef for the form to send to Emailjs
  const form = useRef();

  // Function to send email via Emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container text-center">
      <h1>Contact</h1>
      <Form onSubmit={handleFormSubmit} ref={form}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="name@example.com"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            placeholder="Your Message"
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </Form.Group>

        <Button variant="primary" type="submit" style={{ marginBottom: '30px' }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;



