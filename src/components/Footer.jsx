import React from 'react';


export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {new Date().getFullYear()} Stacey Moenter. All Rights Reserved.</p>
       
       {/* Contact info in the footer */}
        <p>
          Contact: <a href="mailto:staceymoenter@gmail.com">staceymoenter@gmail.com</a>
        </p>

        {/* Images for Linkedin and GitHub */}
        <div style={imageContainerStyle}>
          <a href="https://www.linkedin.com/in/stacey-moenter-6017a064/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCiqr3xq0yH68Dqu-UeyNAmupxDMB1On3SmiZNaoOdYxea-hcAHMEkAY9ss8W8Wrn0kU&usqp=CAU"
              alt="Linkedin Logo"
              style={imageStyle}
            />
          </a>

          <a href="https://github.com/smoenter" target="_blank" rel="noopener noreferrer">
            <img
              src="https://researchcomputing.princeton.edu/sites/g/files/toruqf7036/files/styles/freeform_750w/public/2021-02/Github.png?h=0adafebd&itok=ifc6IOIP"
              alt="GitHub Logo"
              style={imageStyle}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
// Styling for the footer
const footerStyle = {
  backgroundColor: '#dbdada',
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

const imageContainerStyle = {
  marginTop: '10px',  
  display: 'flex',  
  justifyContent: 'center', 
  gap: '25px',  
};

const imageStyle = {
  width: '60px',  
  height: '60px',
 };

 
