// Validate if the name is not empty
export const validateName = (name) => {
  return name.trim() !== ''; // Name should not be empty
};

// Validate if the email is in a correct format using a regular expression
export const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email); // Test the email with regex
};

// Check if the message is not empty
export const checkMessage = (message) => {
  return message.trim() !== ''; // Message should not be empty
};
