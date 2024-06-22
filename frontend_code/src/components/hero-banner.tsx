import { SearchBar } from '@/layouts/MainLayout/HeaderLayout/search-bar';
import { Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';

export const HeroBanner = () => {
  const [h2Text, setH2Text] = useState('Where to?');
  const h2TextList = { places: 'Where to', Restaurant: 'Find places to eat' };
  return (
    <>
      <Box
        maxWidth="lg"
        height={450}
        marginX={'auto'}
        mb={4}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          backgroundImage:
            'url("https://drive.google.com/uc?export=view&id=13fBD9P9zs4ZO13Jm5kiusEfkYx8eezry")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Box
          sx={{
            width: '70%',
            bgcolor: 'white',
            // height: 69,
            borderRadius: 1,
            // borderStyle: 'solid',
            // borderWidth: 1,
            zIndex: '2',
            overflow: 'hidden',
          }}
        >
          <SearchBar text={'Search'} />
        </Box>
      </Box>
    </>
  );
};
