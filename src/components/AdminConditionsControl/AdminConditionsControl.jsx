import { useAdmin, useLang } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  getCondition,
  addCondition,
  updateCondition,
  deleteCondition,
} from '../../redux/admin/adminOperation';

import { ModalForm } from 'components/ModalForm';

import { TextField } from '@mui/material';
import { Btn, BtnWrap, OptionWrap } from './AdminConditionsControl.styled';

export const AdminConditionsControl = () => {
  const { defaultLang } = useLang();
  const { condition } = useAdmin('');
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState('add');

  useEffect(() => {
    dispatch(getCondition());
  }, []);

  const toggleIsOpen = type => {
    setActionType(type);
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

    if (actionType === 'add') {
      dispatch(addCondition({ text }));
    } else {
      dispatch(updateCondition({ text }));
    }
    toggleIsOpen();
  };

  const deleteCurrentCondition = () => {
    dispatch(deleteCondition());
  };

  return (
    <OptionWrap>
      <div>
        <p>
          {defaultLang
            ? 'Текущие условия для вывода средств'
            : 'Current conditions for withdrawal of funds'}
        </p>
        <p>
          {condition?.length <= 0
            ? defaultLang
              ? 'На данный момент не добавлены условия вывода'
              : 'No withdrawal conditions have been added at this time'
            : condition}
        </p>
      </div>
      <BtnWrap>
        <Btn type="button" onClick={() => toggleIsOpen('add')}>
          {defaultLang ? 'Добавить условия' : 'Add Condition'}
        </Btn>
        <Btn type="button" onClick={() => toggleIsOpen('edit')}>
          {defaultLang ? 'Изменить  условия' : 'Edit Condition'}
        </Btn>
        <Btn type="button" onClick={() => deleteCurrentCondition()}>
          {defaultLang ? 'Удалить условия' : 'Delete Condition'}
        </Btn>
      </BtnWrap>
      {isOpen && (
        <ModalForm
          text={
            actionType === 'add'
              ? defaultLang
                ? 'Добавить условия'
                : 'Add Condition'
              : defaultLang
              ? 'Изменить условия'
              : 'Edit Condition'
          }
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
