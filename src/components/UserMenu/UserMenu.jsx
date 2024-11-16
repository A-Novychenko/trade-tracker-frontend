import { useDispatch } from 'react-redux';

import { Box, Button, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { logOut } from '../../redux/auth/authOperations';
import { useAuth, useLang } from '../../hooks';
import { CustomText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
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
      <Box sx={{ display: 'flex' }}>
        <AccountBoxIcon sx={{ mr: 1 }} />

        <CustomText>
          {defaultLang ? 'Привет' : 'Welcome'}, {user.name}
        </CustomText>
      </Box>

      <Button
        component="button"
        type="button"
        variant="outline"
        onClick={() => dispatch(logOut())}
      >
        {defaultLang ? 'Выйти' : 'Logout'}
      </Button>
    </Box>
  );
};
