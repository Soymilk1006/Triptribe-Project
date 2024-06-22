import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

const SearchBar: FC = () => {
  return (
    <Card
      elevation={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 4,
        width: '100%',
        mb: 2,
        px: 3,
        py: 2,
      }}
    >
      <TextField
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            fontSize: 25,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiOutlinedInput-input': {
            p: 0,
            height: 60,
          },
        }}
      ></TextField>
      <Button
        variant="contained"
        sx={{ borderRadius: 2 }}
      >
        Search
      </Button>
    </Card>
  );
};

export default SearchBar;
