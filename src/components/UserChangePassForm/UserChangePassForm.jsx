import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';
import { ModalForm } from 'components/ModalForm';

import { useLang } from 'hooks';

import { userChangePassword } from '../../redux/user/userOperation';
import { ChangeBtn } from './UserChangePassForm.styled';

export const UserChangePassForm = () => {
  const dispatch = useDispatch();
  const { defaultLang } = useLang();

  const [newPass, setNewPass] = useState('');
  const [copyNewPass, setCopyNewPass] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');

  const toggleIsOpenModal = () => setIsOpen(prev => !prev);

  const handleChangePass = evt => {
    setNewPass(evt.target.value.trim());
    setError('');
  };

  const handleChangeCopyPass = evt => {
    setCopyNewPass(evt.target.value.trim());
    setError('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    // Перевірка на мінімальну кількість символів
    if (newPass.length < 6) {
      setError(
        defaultLang
          ? 'Пароль  должен быть не менше 6 символов'
          : 'Password must be at least 6 characters'
      );
      return;
    }

    if (newPass !== copyNewPass) {
      setError(defaultLang ? 'Пароли не совпадают' : 'Passwords do not match');
      return;
    }

    dispatch(userChangePassword(newPass));
    setNewPass('');
    setCopyNewPass('');
    toggleIsOpenModal();
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <ChangeBtn type="button" onClick={() => toggleIsOpenModal()}>
        {defaultLang ? 'Сменить пароль' : 'Change password'}
      </ChangeBtn>
      {isOpen && (
        <ModalForm
          text={defaultLang ? 'Введите новый пароль' : 'Enter new password'}
          title={defaultLang ? 'Смена пароля' : 'Change Password'}
          open={isOpen}
          handleClose={toggleIsOpenModal}
          handleSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label={defaultLang ? 'новый пароль' : 'new password'}
            name="newPass"
            //   autoComplete="email"
            onChange={handleChangePass}
            minLength={6}
            error={error}
            helperText={
              defaultLang
                ? 'Пароль  должен быть не менше 6 символов'
                : 'Password must be at least 6 characters'
            }
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
            label={defaultLang ? 'повторно новый пароль' : 'Copy new password'}
            name="copyNewPass"
            //   autoComplete="email"
            onChange={handleChangeCopyPass}
            minLength={6}
            error={error}
            helperText={
              defaultLang
                ? 'Пароль  должен быть не менше 6 символов'
                : 'Password must be at least 6 characters'
            }
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
        </ModalForm>
      )}
    </div>
  );
};
