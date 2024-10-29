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
import { logIn } from '../../redux/auth/authOperations';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();
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
    e.target.reset();
  };

  const handleChangeEmail = e => {
    const validMail = e.target.value.includes('mail.com');
    const minLength = e.target.value.length > 9;
    if (validMail && minLength) {
      setIsErrorMail(null);
    } else {
      setIsErrorMail(true);
    }
  };
  const handleChangePassword = e => {
    const isValidPassword = e.target.value.length > 6;
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
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            Log in
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
              onChange={handleChangeEmail}
              error={isErrorMail}
              helperText={'Domain must match "mail.com"'}
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
              onChange={handleChangePassword}
              error={isErrorPass}
              helperText={'Password must be more than 7 characters'}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
