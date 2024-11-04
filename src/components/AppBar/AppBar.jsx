import { AppBar as AppBarContainer, Box, Container } from '@mui/material';

import { AuthNav } from 'components/AuthNav';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';

import { useAuth } from '../../hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component={'header'}>
      <AppBarContainer position="static" sx={{ backgroundColor: 'black' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Navigation />

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Container>
      </AppBarContainer>
    </Box>
  );
};
