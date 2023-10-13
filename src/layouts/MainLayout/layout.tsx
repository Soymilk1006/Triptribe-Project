import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer';

const LayoutRoot = styled('div')({
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

const MainContent = styled('div')({
  flex: 1,
  display: 'flex',
});

const Content = styled('div')({
  flex: 3, 
  padding: '16px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
});

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutRoot>
      <Header />
      <MainContent>
        <Content>{children}</Content>
      </MainContent>
      <Footer />
    </LayoutRoot>
  );
};
