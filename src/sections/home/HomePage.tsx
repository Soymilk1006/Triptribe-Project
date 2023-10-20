import React from 'react';
import { Grid, Paper } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Grid container spacing={2}>
    {Array.from({ length: 18 }, (_, index) => (
      <Grid item xs={4} key={index}>
        <Paper elevation={3} style={{ height: '30vw', padding: 20 }}>
          <h2>Box {index + 1}</h2>
        </Paper>
      </Grid>
    ))}
  </Grid>
  );
};

export default HomePage;
