import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';

import { ModalForm } from 'components/ModalForm';
import { FeedbackButton } from 'components/FeedbackButton';

import { useLang } from 'hooks';
import { setCompleted, setError } from '@/payments/paymentsSlice';
import { serverAPI } from 'utils/serverAPI';

export const SupportModalForm = () => {
  const dispatch = useDispatch();
  const { defaultLang } = useLang();

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setStatus(null);
    setOpen(false);
  };

  const handleSubmit = async event => {
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
        setCompleted(`${defaultLang ? 'Успешно отпралено' : 'Successful'}`)
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
      setStatus(null);
      handleClose();
    }
  };

  const title = defaultLang
    ? 'Отправить запрос в поддержку'
    : 'Submit a Support Request';

  const text = defaultLang
    ? 'Пожалуйста, укажите подробности, чтобы мы могли предоставить вам точную помощь.'
    : 'Please provide details so we can offer you accurate assistance.';

  return (
    <>
      <FeedbackButton action={handleClickOpen} />
      <ModalForm
        text={text}
        title={title}
        open={open}
        status={status}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      >
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
      </ModalForm>
    </>
  );
};
