import { SearchBar } from '@/layouts/MainLayout/HeaderLayout/search-bar';
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import React from 'react';

export const HeroMap = () => {
  return (
    <>
      <Box
        position={'relative'}
        maxWidth="lg"
        height={207}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        marginX={'auto'}
        marginY={4}
        sx={{
          backgroundImage:
            'url("https://drive.google.com/uc?export=view&id=1Ev2kS5ZvKR4aB0yyh7qkdoT3A29g_5yF")',
          backgroundPosition: 'center',
        }}
      >
        <Button
          variant="contained"
          sx={{ width: 169, height: 55, borderRadius: 1.5 }}
          //have a modal
          // onClick={}
        >
          Map View
        </Button>
      </Box>
    </>
  );
};
