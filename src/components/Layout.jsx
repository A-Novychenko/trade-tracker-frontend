import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Suspense } from 'react';
import { Container } from '@mui/material';

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
