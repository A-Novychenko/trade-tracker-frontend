import { NavLink as RouterNavLink } from 'react-router-dom';

import { Box, Button, Toolbar, Typography } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import { useAuth } from '../../hooks';
import { CustomBox } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <CustomBox component={'nav'}>
      <Toolbar sx={{ backgroundColor: 'orangered' }}>
        <Button component={RouterNavLink} variant="outline" to="/">
          <CurrencyExchangeIcon sx={{ mr: 2 }} />

          <Typography
            variant="h6"
            component="p"
            sx={{
              textTransform: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            msv.trade
          </Typography>
        </Button>

        {isLoggedIn && (
          <Button component={RouterNavLink} to="/dashboard" variant="outline">
            <Typography
              variant="h6"
              component="p"
              sx={{ textTransform: 'none' }}
            >
              Dashboard
            </Typography>
          </Button>
        )}
      </Toolbar>
    </CustomBox>
  );
};
