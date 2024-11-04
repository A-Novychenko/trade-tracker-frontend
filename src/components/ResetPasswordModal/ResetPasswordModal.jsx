import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { emailPattern } from '../../constants/emailPattern';
import { resetPassword } from '../../redux/auth/authOperations';

export function ResetPasswordModal() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeInput = e => {
    const value = e.target.value;

    setEmail(value);

    if (!emailPattern.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = () => {
    dispatch(resetPassword(email));

    setEmail('');

    handleClose();
  };

  return (
    <>
      <Link
        component="button"
        variant="body2"
        style={{ display: 'block', textAlign: 'center' }}
        onClick={handleClickOpen}
      >
        Reset password
      </Link>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: 'orangered' }}>Reset password</DialogTitle>

        <DialogContent>
          <DialogContentText>
            To recover your password, please enter your email address here. We
            will send you instructions to reset your password.
          </DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            error={!!emailError}
            helperText={emailError}
            value={email}
            onChange={handleChangeInput}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          <Button type="button" sx={{ color: 'red' }} onClick={handleSubmit}>
            Reset password
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
