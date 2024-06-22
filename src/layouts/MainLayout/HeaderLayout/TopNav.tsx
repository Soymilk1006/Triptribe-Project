import type { FC } from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { SearchBar } from '@/layouts/MainLayout/HeaderLayout/search-bar';
import { AccountButton } from '@/layouts/MainLayout/HeaderLayout/account-button';
import { PlacesTab } from '@/layouts/MainLayout/HeaderLayout/places-tab';
import { LogoButton } from '@/layouts/MainLayout/HeaderLayout/logo-button';

import { usePathname } from 'next/navigation';

export const TopNav: FC = () => {
  const autoHideRestAttrPageList = ['/signup', '/signin'];
  const autoHideSearchBarPageList = ['/signup', '/signin', '/'];
  const pathname = usePathname();
  const isHomepage = autoHideSearchBarPageList.includes(pathname);
  const isSearAttrPage = autoHideRestAttrPageList.includes(pathname);
  const [loginStatus, setLoginStatus] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(!isHomepage);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setShowSearchBar(false);

      if (!isHomepage || window.scrollY > 320) {
        setShowSearchBar(true);
      } else {
        setShowSearchBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  console.log(showSearchBar);
  console.log(pathname);
  const simulateLogin = () => {
    setLoginStatus(!loginStatus);
  };

  return (
    <Box
      width={'100%'}
      // borderBottom={'1px solid'}
      pt={2}
      pb={isScrolled ? 1 : 2}
      sx={{
        transition: '0.2s',
      }}
    >
      <Grid
        container
        maxWidth="lg"
        px={1}
        sx={{
          zIndex: 1,
          marginX: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
        }}
      >
        <Grid
          item
          px={2}
        >
          <LogoButton />
        </Grid>
        {/* 不在homepage或者showSearchBar为true */}
        {showSearchBar && (
          <Grid
            item
            px={2}
            xs={4}
            sm={true}
            md={4}
            sx={{
              borderRadius: 2,
            }}
          >
            <SearchBar text={'Search Everything'} />
          </Grid>
        )}

        {/* places-tab. in middle */}
        {!isSearAttrPage && (
          <Grid
            item
            xs
            px={2}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
              display: showSearchBar ? { xs: 'none', lg: 'revet' } : { xs: 'none', md: 'revet' },
            }}
          >
            <PlacesTab />
          </Grid>
        )}

        {/* right top corner. different display with different login state */}
        <Grid
          item
          // lg={showSearchBar ? 2 : 2}
          // px={2}
          xs={2}
        >
          <AccountButton
            loginStatus={loginStatus}
            simulateLogin={simulateLogin}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
