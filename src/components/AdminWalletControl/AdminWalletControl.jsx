import { useAdmin, useLang } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  getWallet,
  updateWallet,
  deleteWallet,
} from '../../redux/admin/adminOperation';

import { ModalForm } from 'components/ModalForm';

import { TextField } from '@mui/material';

import {
  Btn,
  BtnWrap,
  OptionWrap,
  TextWrap,
  Text,
  Overview,
} from './AdminWalletControl.styled';

export const AdminWalletControl = () => {
  const { defaultLang } = useLang();
  const { wallet } = useAdmin('');
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getWallet());
  }, []);

  const toggleIsOpen = () => {
    setIsOpen(prev => !prev);
  };

  const handleClose = () => {
    setIsOpen(prev => !prev);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const text = formJson.text.trim();

    dispatch(updateWallet({ text }));

    toggleIsOpen();
  };

  const deleteCurrentCondition = () => {
    dispatch(deleteWallet());
  };

  return (
    <OptionWrap>
      <TextWrap>
        <Text>
          {defaultLang ? 'Номер текущего кошелька' : 'Current wallet'}
        </Text>
        <Overview>
          {wallet?.length <= 0
            ? defaultLang
              ? 'На данный момент не добавлен номер кошелька'
              : 'No have wallet at this time'
            : wallet}
        </Overview>
      </TextWrap>
      <BtnWrap>
        <Btn type="button" onClick={() => toggleIsOpen('edit')}>
          {defaultLang ? 'Изменить  кошелек' : 'Edit wallet'}
        </Btn>
        <Btn type="button" onClick={() => deleteCurrentCondition()}>
          {defaultLang ? 'Удалить кошелек' : 'Delete wallet'}
        </Btn>
      </BtnWrap>
      {isOpen && (
        <ModalForm
          text={defaultLang ? 'Изменить кошелек' : 'Edit wallet'}
          title={
            defaultLang ? 'Управление кошелком' : 'Withdrawal wallet control'
          }
          open={isOpen}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        >
          <TextField
            autoFocus
            required
            margin="dense"
            id="text"
            name="text"
            fullWidth
            variant="filled"
            sx={{
              '& .MuiInputBase-input': {
                width: '350px',
                color: '#fff',
              },
            }}
          />
        </ModalForm>
      )}
    </OptionWrap>
  );
};
