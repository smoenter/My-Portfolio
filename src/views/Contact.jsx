import {useState} from 'react';

// Here we import a helper function that will check if the email is valid
import { checkMessage, validateEmail } from './utils/helpers';


function Contact () {
  // setting state variables for name, email and message using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message'){
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

  // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
  if (!validateEmail(email) || !name) {
    setErrorMessage('Email or Name is invalid');
    // We want to exit out of this code block if something is wrong so that the user can correct it
    return;
    // Then we check to see if the user input a message. If no message then we set an error message regarding the no message.
  }
  if (!checkMessage(message)) {
    setErrorMessage(
      `Message is required: `
    );
    return;
  }
 // If successful, we want to clear out the input after registration.
 setName('');
 setMessage('');
 setEmail('');
 alert(`Hello ${name}`);
};

  return (
    <div className="container text-center">
      <h1>
       Contact
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
          <input
          value={message}St
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}


export default Contact;
  

