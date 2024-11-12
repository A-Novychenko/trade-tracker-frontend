import { useState } from 'react';

import { ThreeDots } from 'react-loader-spinner';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

import { FeedbackButton } from 'components/FeedbackButton';

import { useLang } from '../../hooks';
import { serverAPI } from 'utils/serverAPI';

export const FeedbackForm = () => {
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

              setStatus('success');
            } catch {
              setStatus('fail');
            } finally {
              setTimeout(() => {
                handleClose();
              }, 3000);
            }
          },
          sx: {
            backgroundColor: '#2e21df',
            color: '#fff',
          },
        }}
      >
        <DialogTitle
          sx={{
            color: '#fff',
          }}
        >
          {defaultLang
            ? 'Отправить запрос в поддержку'
            : 'Submit a Support Request'}
        </DialogTitle>

        {!status && (
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
        )}

        {status && (
          <div
            style={{
              minWidth: 200,
              padding: 80,
            }}
          >
            {status === 'pending' ? (
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ThreeDots
                  height="180"
                  width="180"
                  radius="9"
                  color="#ffffff"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              </p>
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  padding: 80,
                  textAlign: 'center',
                  fontSize: 32,
                  fontWeight: 700,
                  backgroundColor: status === 'success' ? 'green' : 'red',
                }}
              >
                {status === 'success' && (
                  <p>
                    <CheckCircleIcon sx={{ fontSize: 80 }} />
                    {defaultLang ? (
                      <p style={{ fontSize: 24 }}>Успешно отпралено</p>
                    ) : (
                      <p style={{ fontSize: 24 }}>Successful</p>
                    )}
                  </p>
                )}
                {status === 'fail' && (
                  <p>
                    <ErrorIcon sx={{ fontSize: 80 }} />
                    {defaultLang ? (
                      <p style={{ fontSize: 24 }}>Ошибка, попробуйте позже</p>
                    ) : (
                      <p style={{ fontSize: 24 }}>
                        Error, please try again later.
                      </p>
                    )}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        <DialogActions>
          {status === 'success' || status === 'fail' ? (
            <Button
              sx={{
                color: '#ffaaaa',
              }}
              onClick={handleClose}
            >
              {defaultLang ? 'Закрыть' : 'Close'}
            </Button>
          ) : (
            <Button
              sx={{
                color: '#ffaaaa',
              }}
              onClick={handleClose}
            >
              {defaultLang ? 'Отменить' : 'Cancel'}
            </Button>
          )}

          {status !== 'fail' &&
            status !== 'pending' &&
            status !== 'success' && (
              <Button
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                }}
                type="submit"
              >
                {defaultLang ? 'Отправить' : 'Send'}
              </Button>
            )}
        </DialogActions>
      </Dialog>
    </>
  );
};
