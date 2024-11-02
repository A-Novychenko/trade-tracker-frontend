import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { Button, Container } from '@mui/material';

import { useAuth } from '../hooks';
import { setVerify } from '../redux/auth/authSlice';
import { resendVerify } from '../redux/auth/authOperations';

export default function VerifyEmail() {
  const { verify, user } = useAuth();

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const success = searchParams.get('success');

  useEffect(() => {
    if (success) {
      dispatch(setVerify(success));
    }
  }, [dispatch, success]);

  const handleResendEmail = () => {
    if (user.email) {
      dispatch(resendVerify({ email: user.email }));
    }
  };

  return (
    <>
      {verify === 'pending' && (
        <Container component="div" maxWidth="xs">
          <h1>Verifyed pending</h1>
          <p style={{ display: 'none' }}>
            Перевірте свою пошту! Дякуємо за реєстрацію! Ми надіслали вам лист
            із посиланням для верифікації. Будь ласка, відкрийте свою електронну
            скриньку, знайдіть наш лист і натисніть на посилання, щоб
            підтвердити свою електронну адресу. Це допоможе нам захистити ваш
            обліковий запис та забезпечити безпеку ваших даних. Якщо ви не
            отримали лист протягом декількох хвилин, перевірте папку зі спамом
            або натисніть кнопку нижче, щоб надіслати лист повторно. [Повторно
            надіслати лист]
          </p>

          <p>
            Check Your Email! Thank you for registering! We have sent you an
            email with a verification link. Please open your inbox, find our
            email, and click the link to confirm your email address. This will
            help us protect your account and ensure the security of your data.
            If you haven’t received the email within a few minutes, check your
            spam folder or click the button below to resend the email.
          </p>

          <Button
            type="button"
            onClick={handleResendEmail}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: 'orangered' }}
          >
            Resend Email
          </Button>
        </Container>
      )}

      {verify === 'true' && (
        <Container component="div" maxWidth="xs">
          <h1>Verifyed</h1>

          <p style={{ fontSize: '40px', color: 'green' }}>Success</p>

          <Link to="/login">Log in</Link>
        </Container>
      )}

      {verify === false && (
        <Container component="div" maxWidth="xs">
          <h1>Verifyed</h1>

          <p style={{ fontSize: '40px', color: 'red' }}>Error</p>

          <Button
            type="button"
            onClick={handleResendEmail}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: 'orangered' }}
          >
            Resend Email
          </Button>
        </Container>
      )}
    </>
  );
}
