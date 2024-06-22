import React from 'react';
import { Grid, Paper } from '@mui/material';
import Layout from '@/layouts/MainLayout/Header';
import { HeroBanner } from '@/components/hero-banner';
import { HeroMap } from '@/components/map-with-button';
import { Box } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box component="main">
      <HeroBanner />
      <HeroMap />
      <Grid
        container
        spacing={2}
      >
        {Array.from({ length: 18 }, (_, index) => (
          <Grid
            item
            xs={4}
            key={index}
          >
            <Paper
              elevation={3}
              style={{ height: '30vw', padding: 20 }}
            >
              <h2>Box {index + 1}</h2>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
