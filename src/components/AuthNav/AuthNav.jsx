import { NavLink as RouterNavLink } from 'react-router-dom';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useLang } from 'hooks';

export const AuthNav = () => {
  const { defaultLang } = useLang();

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
        {defaultLang ? 'Регистрация' : 'Register'}
      </Button>

      <Button component={RouterNavLink} variant={'outline'} to="/login">
        {defaultLang ? 'Войти' : 'Log In'}
      </Button>
    </Box>
  );
};
