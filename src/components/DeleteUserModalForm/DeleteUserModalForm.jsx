import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';
import { toast } from 'react-toastify';

import { ModalForm } from 'components/ModalForm';

import { useLang } from 'hooks';
import { useDispatch } from 'react-redux';
import { deleteUser } from '@/admin/adminOperation';

import { DelBtn, Wrap } from './DeleteUserModalForm.styled';

export const DeleteUserModalForm = ({ currentUser, id, setUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { defaultLang } = useLang();

  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setStatus(null);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await dispatch(deleteUser(id)).unwrap();

      setUser(null);
      navigate('/dashboard/users');
    } catch (error) {
      toast.error('Ошибка удаления');
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <DelBtn type="button" onClick={handleOpenModal}>
        {defaultLang ? 'Удалить пользователя' : 'Delete user'}
      </DelBtn>

      <ModalForm
        title={
          defaultLang
            ? 'Подтверждаете удаление пользователя?'
            : 'Do you confirm deletion of user?'
        }
        text=""
        open={openModal}
        status={status}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
        sendName={defaultLang ? 'Удалить пользователя' : 'Delete user'}
      >
        <Wrap>
          <Typography>
            {`
            ${defaultLang ? 'Пользователь' : 'User'}:
            ${currentUser?.name}`}
          </Typography>

          <Typography>
            {`
            ${defaultLang ? 'Пользователь' : 'User'}:
            ${currentUser?.email}`}
          </Typography>

          {currentUser?.investment && (
            <>
              <Typography>
                {`
            ${defaultLang ? 'Пользователь' : 'User'}:
            ${currentUser?.investment?.investment}`}
              </Typography>

              <Typography>
                {`
            ${defaultLang ? 'Пользователь' : 'User'}:
            ${currentUser?.investment?.total}`}
              </Typography>
            </>
          )}
        </Wrap>
      </ModalForm>
    </>
  );
};
