import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header: React.FC = () => {
  const appBarStyle = {
    backgroundColor: '#ffcf33',
    color: '#111927',
    position: 'fixed',
    width: '100%',
    top: 0,
  };

  return (
    <AppBar position="static" style={appBarStyle} elevation={0}>
      <Toolbar>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
