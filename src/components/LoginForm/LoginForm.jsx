import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

import { ResetPasswordModal } from 'components/ResetPasswordModal';

import { logIn } from '../../redux/auth/authOperations';
import { useLang } from 'hooks';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { defaultLang } = useLang();

  const [isErrorMail, setIsErrorMail] = useState(null);
  const [isErrorPass, setIsErrorPass] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    dispatch(logIn(data));
    // dispatch(
    //   logIn({
    //     //SLAVA
    //     // email: 'admin@mail.com',
    //     email: 'novychenkoae@gmail.com',
    //     //
    //     //
    //     //SASHA
    //     // email: 'adm@mail.com',
    //     // email: 'nmmassagekiev@gmail.com',
    //     //
    //     //
    //     password: 'Novik77',
    //   })
    // );

    e.target.reset();
  };

  const handleChangeEmail = e => {
    // const validMail = e.target.value.includes('mail.com');
    // const minLength = e.target.value.length > 9;
    // if (validMail && minLength) {
    //   setIsErrorMail(null);
    // } else {
    //   setIsErrorMail(true);
    // }
  };

  const handleChangePassword = e => {
    // const isValidPassword = e.target.value.length > 6;
    // if (isValidPassword) {
    //   setIsErrorPass(null);
    // } else {
    //   setIsErrorPass(true);
    // }
  };

  return (
    <>
      <Container component="div" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LoginIcon />
          </Avatar>

          <Typography component="h2" variant="h5">
            {defaultLang ? 'Войти' : 'Log in'}
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              // onChange={handleChangeEmail}
              error={isErrorMail}
              helperText={'Domain must match "mail.com"'}
              sx={{
                '& .MuiInputBase-input': { color: 'white' },
                '& .MuiInputLabel-root': { color: 'rgb(255 255 255 / 60%);' },
                '& .MuiOutlinedInput-root': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'orange',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'orange',
                  },
                },
                '& .MuiFormHelperText-root': {
                  color: 'rgb(255 255 255 / 60%);',
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              // onChange={handleChangePassword}
              error={isErrorPass}
              helperText={'Password must be more than 7 characters'}
              sx={{
                '& .MuiInputBase-input': { color: 'white' },
                '& .MuiInputLabel-root': { color: 'rgb(255 255 255 / 60%);' },
                '& .MuiOutlinedInput-root': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'orange',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'orange',
                  },
                },
                '& .MuiFormHelperText-root': {
                  color: 'rgb(255 255 255 / 60%);',
                },
              }}
            />

            <ResetPasswordModal />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'orangered' }}
            >
              {defaultLang ? 'Войти' : 'Log in'}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
