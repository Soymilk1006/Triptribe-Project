import { FC } from 'react';
import Link from 'next/link';
import { Button, Box, Typography } from '@mui/material';

export const PlacesTab: FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      {/* <Link href={'/restaurants'}> */}
      <Button
        href={'/restaurants'}
        variant="text"
        color="inherit"
      >
        <Typography
          variant="subtitle1"
          fontSize="1.5rem"
        >
          Restaurants
        </Typography>
      </Button>
      {/* </Link> */}
      {/* <Link href={'/attractions'}> */}
      <Button
        href={'/attractions'}
        variant="text"
        color="inherit"
      >
        <Typography
          variant="subtitle1"
          fontSize="1.5rem"
        >
          Attractions
        </Typography>
      </Button>
      {/* </Link> */}
    </Box>
  );
};
