import { useAdmin, useLang } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  getCondition,
  updateCondition,
  deleteCondition,
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
} from './AdminConditionsControl.styled';

export const AdminConditionsControl = () => {
  const { defaultLang } = useLang();
  const { condition } = useAdmin('');
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getCondition());
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

    dispatch(updateCondition({ text }));

    toggleIsOpen();
  };

  const deleteCurrentCondition = () => {
    dispatch(deleteCondition());
  };

  return (
    <OptionWrap>
      <TextWrap>
        <Text>
          {defaultLang
            ? 'Текущие условия для вывода средств'
            : 'Current conditions for withdrawal of funds'}
        </Text>
        <Overview>
          {condition?.length <= 0
            ? defaultLang
              ? 'На данный момент не добавлены условия вывода'
              : 'No withdrawal conditions have been added at this time'
            : condition}
        </Overview>
      </TextWrap>
      <BtnWrap>
        <Btn type="button" onClick={() => toggleIsOpen('edit')}>
          {defaultLang ? 'Изменить  условия' : 'Edit Condition'}
        </Btn>
        <Btn type="button" onClick={() => deleteCurrentCondition()}>
          {defaultLang ? 'Удалить условия' : 'Delete Condition'}
        </Btn>
      </BtnWrap>
      {isOpen && (
        <ModalForm
          text={defaultLang ? 'Изменить условия' : 'Edit Condition'}
          title={
            defaultLang ? 'Условия вывода средств' : 'Withdrawal conditions'
          }
          open={isOpen}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        >
          <TextField
            autoFocus
            required
            multiline
            rows={4}
            margin="dense"
            id="text"
            name="text"
            fullWidth
            variant="filled"
            sx={{
              '& .MuiInputBase-input': {
                color: '#fff',
              },
            }}
          />
        </ModalForm>
      )}
    </OptionWrap>
  );
};
