import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { TopNav } from '@/layouts/MainLayout/HeaderLayout/TopNav';

const Header: React.FC = () => {
  // const appBarStyle = {
  //   backgroundColor: '#ffcf33',
  // color: '#111927',
  //   position: 'fixed',
  //   width: '100%',
  //   top: 0,
  // };

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{ bgcolor: 'white', color: 'inherit', borderBottom: '1px solid' }}
      elevation={0}
    >
      <Toolbar>
        <TopNav />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
