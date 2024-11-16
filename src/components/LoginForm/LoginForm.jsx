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
import { setError } from '@/payments/paymentsSlice';
import { toast } from 'react-toastify';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { defaultLang } = useLang();

  const [isErrorMail, setIsErrorMail] = useState(null);
  const [isErrorPass, setIsErrorPass] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const emailFormatted =
      formData.get('email') && typeof formData.get('email') === 'string'
        ? formData.get('email').trim().toLowerCase()
        : '';

    const passwordFormatted =
      formData.get('password') && typeof formData.get('password') === 'string'
        ? formData.get('password').trim()
        : '';

    const isSpacesEmail = emailFormatted.includes(' ');

    if (isSpacesEmail) {
      toast.error(
        defaultLang
          ? 'Почта не может быть с пробелами!'
          : 'Enter your password!'
      );

      return;
    }

    if (emailFormatted.length < 1) {
      toast.error(defaultLang ? 'Введите почту!' : 'Enter your email!');

      return;
    }

    if (passwordFormatted.length < 1) {
      toast.error(
        defaultLang ? 'Введите пароль!' : 'Email cannot contain spaces!'
      );

      return;
    }

    const data = {
      email: emailFormatted,
      password: passwordFormatted,
    };

    dispatch(logIn(data));
    // dispatch(
    //   logIn({
    //     //SLAVA
    //     // email: 'admin@mail.com',
    //     // email: 'novychenkoa@gmail.com',
    //     //
    //     //
    //     //SASHA
    //     // email: 'adm@mail.com',
    //     email: 'nmmassagekiev@gmail.com',
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
              type="email"
              autoComplete="email"
              // onChange={handleChangeEmail}
              error={isErrorMail}
              helperText={'Email'}
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
              helperText={'Password'}
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
