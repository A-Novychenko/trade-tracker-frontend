import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';

import { AppBar } from 'components/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />

      <div>
        <Container maxWidth="xl">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </div>
    </>
  );
};
