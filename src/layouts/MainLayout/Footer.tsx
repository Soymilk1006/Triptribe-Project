import React from 'react';
import Box from '@mui/material/Box';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#009688',
    color: '#111927',
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <Box sx={footerStyle}>
      {/* other Footer contents*/}
      &copy; TripTribe 2023
    </Box>
  );
};

export default Footer;
