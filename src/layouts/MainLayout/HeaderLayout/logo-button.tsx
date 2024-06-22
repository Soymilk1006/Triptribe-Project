import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { paths } from '@/paths';
import { LogoImage } from '@/icons/logo-image';
import { LogoText } from '@/icons/logo-text';
export function LogoButton() {
  return (
    <Box
      component={Link}
      href={'/'}
      sx={{
        height: '60px',
        overflow: 'hidden',
        padding: 0.5,
        display: 'flex',
        alignItems: 'center',
        fontSize: 4,
        lineHeight: 5,
        color: 'primary.dark',
      }}
    >
      <Box sx={{ height: '60px' }}>
        <LogoImage />
      </Box>
      <Box sx={{ height: '160px' }}>
        <LogoText />
      </Box>
    </Box>
  );
}
