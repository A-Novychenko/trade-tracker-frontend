import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks';

import { Box, Button, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

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
      <Box sx={{ display: 'flex' }}>
        <AccountBoxIcon sx={{ mr: 1 }} />
        <Typography>Welcome, {user.name}</Typography>
      </Box>

      <Button
        component="button"
        type="button"
        variant="outline"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
