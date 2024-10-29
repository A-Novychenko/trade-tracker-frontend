import { NavLink as RouterNavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box
      component={'div'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Button component={RouterNavLink} variant={'outline'} to="/register">
        Register
      </Button>
      <Button component={RouterNavLink} variant={'outline'} to="/login">
        Log In
      </Button>
    </Box>
  );
};
