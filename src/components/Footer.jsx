import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {new Date().getFullYear()} Stacey Moenter. All Rights Reserved.</p>
        <p>
          Contact: <a href="mailto:staceymoenter@gmail.com">staceymoenter@gmail.com</a>
        </p>
        <div>
          <a href="https://www.linkedin.com/in/stacey-moenter-6017a064/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> |
          <a href="https://github.com/smoenter" target="_blank" rel="noopener noreferrer">
            GitHub
            </a>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '15px',
  textAlign: 'center',
  position: 'relative',
  bottom: '0',
  width: '100%',
  borderRadius: '15px',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};
