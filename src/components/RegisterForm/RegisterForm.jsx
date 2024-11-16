import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import HowToRegIcon from '@mui/icons-material/HowToReg';

import { register } from '../../redux/auth/authOperations';
import { useLang } from 'hooks';
import { toast } from 'react-toastify';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { defaultLang } = useLang();

  const [isErrorName, setIsErrorName] = useState(null);
  const [isErrorMail, setIsErrorMail] = useState(null);
  const [isErrorPass, setIsErrorPass] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const nameFormatted =
      formData.get('name') && typeof formData.get('name') === 'string'
        ? formData.get('name').trim().toLowerCase()
        : '';

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
          : 'Email cannot contain spaces!'
      );
    }

    if (nameFormatted.length < 1) {
      toast.error(defaultLang ? 'Введите имя!' : 'Enter your name!');

      return;
    }

    if (emailFormatted.length < 1) {
      toast.error(defaultLang ? 'Введите почту!' : 'Enter your email!');

      return;
    }

    if (passwordFormatted.length < 8) {
      toast.error(defaultLang ? 'Введите пароль!' : 'Enter your password!');

      return;
    }

    const data = {
      name: formData.get('name')?.trim(),
      email: emailFormatted,
      password: formData.get('password'),
    };

    dispatch(register(data));

    e.target.reset();

    navigate('/verify');
  };

  const handleChangeName = e => {
    if (e.target.value.trim().length === 0) {
      setIsErrorName(true);
    } else {
      setIsErrorName(null);
    }
  };

  // const handleChangeEmail = e => {
  //   // const validMail = e.target.value.includes('mail.com');
  //   const minLength = e.target.value.length > 9;

  //   if (validMail && minLength) {
  //     setIsErrorMail(null);
  //   } else {
  //     setIsErrorMail(true);
  //   }
  // };

  const handleChangePassword = e => {
    const isValidPassword = e.target.value.length > 7;

    if (isValidPassword) {
      setIsErrorPass(null);
    } else {
      setIsErrorPass(true);
    }
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
            <HowToRegIcon />
          </Avatar>

          <Typography component="h2" variant="h5">
            {defaultLang ? 'Регистрация' : 'Register'}
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
              id="name"
              label="User name"
              name="name"
              onChange={handleChangeName}
              error={isErrorName}
              helperText={'Enter your name!'}
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
              id="email"
              label="E-mail"
              name="email"
              type="email"
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
              onChange={handleChangePassword}
              error={isErrorPass}
              helperText={'Password must be more than 8 characters'}
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'orangered' }}
            >
              {defaultLang ? 'Регистрация' : 'Register'}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
