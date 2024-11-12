import { useState } from 'react';

import { ThreeDots } from 'react-loader-spinner';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { FeedbackButton } from 'components/FeedbackButton';

import { useLang } from '../../hooks';
import { serverAPI } from 'utils/serverAPI';
import { setError, setCompleted } from '@/payments/paymentsSlice';
import { useDispatch } from 'react-redux';

export const Popup = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);

  const { defaultLang } = useLang();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setStatus(null);
    setOpen(false);
  };

  return (
    <>
      <FeedbackButton action={handleClickOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: async event => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const message = formJson.message.trim();

            try {
              if (!message) {
                throw new Error();
              }

              setStatus('pending');

              await serverAPI.post('/users/support', { message });

              dispatch(
                setCompleted(
                  `${defaultLang ? 'Успешно отпралено' : 'Successful'}`
                )
              );
            } catch {
              dispatch(
                setError(
                  `${
                    defaultLang
                      ? 'Ошибка, попробуйте позже'
                      : 'Error, please try again later.'
                  }`
                )
              );
            } finally {
              setTimeout(() => {
                dispatch(setError(null));
                dispatch(setCompleted(null));
                setStatus(null);
                handleClose();
              }, 2000);
            }
          },
          sx: {
            backgroundColor: '#2e21df',
            color: '#fff',
          },
        }}
      >
        <div style={{ position: 'relative' }}>
          <DialogTitle
            sx={{
              color: '#fff',
            }}
          >
            {defaultLang
              ? 'Отправить запрос в поддержку'
              : 'Submit a Support Request'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{
                color: '#c2c2c2',
              }}
            >
              {defaultLang
                ? 'Пожалуйста, укажите подробности, чтобы мы могли предоставить вам точную помощь.'
                : 'Please provide details so we can offer you accurate assistance.'}
            </DialogContentText>

            <TextField
              autoFocus
              required
              multiline
              rows={4}
              margin="dense"
              id="message"
              name="message"
              fullWidth
              variant="filled"
              sx={{
                '& .MuiInputBase-input': {
                  color: '#fff',
                },
              }}
            />
          </DialogContent>

          {status && (
            <div
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                zIndex: 999999999,
              }}
            >
              <ThreeDots
                height="200"
                width="200"
                radius="9"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </div>
          )}
        </div>

        <DialogActions>
          <Button
            sx={{
              color: '#ffaaaa',
            }}
            onClick={handleClose}
          >
            {defaultLang ? 'Закрыть' : 'Close'}
          </Button>

          <Button
            disabled={status}
            sx={{
              color: '#ffffff',
              fontWeight: 600,
            }}
            type="submit"
          >
            {defaultLang ? 'Отправить' : 'Send'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
