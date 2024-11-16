import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';

import {
  changeUserEmail,
  deleteUser,
  getUserById,
  updatePercentage,
  changeUserPassword,
} from '../../redux/admin/adminOperation';

import { useAdmin, useLang } from '../../hooks';

import { getFormattedDate } from '../../utils/getFormattedDate';

import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

import {
  ImgWrapper,
  CardWrapper,
  ValueWrap,
  ListItem,
  Image,
  EditBtn,
  DelBtn,
  TransactionList,
  TransactionItem,
  CardContainer,
  TitleList,
  ChangeMailInput,
  ChangePassBtn,
} from './AdminUserDetails.styled';
import { ModalForm } from 'components/ModalForm';

export const AdminUserDetails = () => {
  const { id } = useParams();

  const { defaultLang } = useLang();
  const { isError } = useAdmin();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMailModal, setIsOpenMailModal] = useState(false);
  const [isOpenPassModal, setIsOpenPassModal] = useState(false);
  const [percentage, setPercentage] = useState('');
  const [user, setUser] = useState(null);
  const [newEmail, setNewEmail] = useState('');
  const [newPass, setNewPass] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async id => {
      try {
        const resp = await dispatch(getUserById(id));

        const userData = resp.payload.data.user[0];

        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (id) {
      getUser(id);
    }
  }, [id, dispatch]);

  const toggleOpenMailModal = () => setIsOpenMailModal(prev => !prev);

  const toggleOpenPassModal = () => setIsOpenPassModal(prev => !prev);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = async () => {
    await dispatch(updatePercentage({ id, percentage }));
    setIsOpen(false);
  };

  const handleInputChange = event => {
    const value = Number(event.target.value);
    if (isNaN(value)) {
      return;
    }

    setPercentage(value);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteUser(id)).unwrap();
      setUser(null);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleChangeEmailSubmit = evt => {
    evt.preventDefault();
    dispatch(changeUserEmail({ id, email: newEmail }));

    if (!isError) {
      setUser(pervState => ({
        ...pervState,
        email: newEmail,
      }));
    }

    setNewEmail('');
    toggleOpenMailModal();
  };

  const handleChangeEmail = evt => {
    setNewEmail(evt.target.value.trim());
  };

  const handleChangePasswordSubmit = evt => {
    evt.preventDefault();
    console.log('newPassword: ' + newPass);
    dispatch(changeUserPassword({ id, password: newPass }));
    setNewPass('');
    toggleOpenPassModal();
  };

  const handleChangePass = evt => {
    setNewPass(evt.target.value.trim());
  };

  const formattedDate = getFormattedDate(user?.createdAt);

  return (
    <div>
      <CardContainer>
        {user && (
          <CardWrapper>
            <ImgWrapper>
              <Image alt="user" src={`http:${user.avatarURL}`} />
            </ImgWrapper>
            <ListItem>
              ID: <ValueWrap>{user?._id}</ValueWrap>
            </ListItem>
            <ListItem>
              Name: <ValueWrap>{user?.name}</ValueWrap>
            </ListItem>
            <ListItem style={{ display: 'block' }}>
              <div style={{ display: 'flex' }}>
                Email: <ValueWrap>{user?.email}</ValueWrap>
              </div>
              <EditBtn
                type="button"
                style={{ marginTop: '20px' }}
                onClick={() => toggleOpenMailModal()}
              >
                {defaultLang ? 'Изменить почту' : 'Change email'}
              </EditBtn>
            </ListItem>
            <ListItem>
              Percentage:{' '}
              <ValueWrap>{user?.investment?.percentage || 0}%</ValueWrap>
            </ListItem>
            <ListItem>
              Investment: <ValueWrap>{user?.investment?.total || 0}</ValueWrap>
            </ListItem>
            <ListItem>
              Profit: <ValueWrap>{user?.investment?.profit || 0}</ValueWrap>
            </ListItem>
            <ListItem>
              Registration Date:{' '}
              <ValueWrap>{formattedDate || 'No date'}</ValueWrap>
            </ListItem>

            <EditBtn type="button" onClick={handleOpen}>
              {defaultLang
                ? 'Изменить процент пользователя'
                : 'Edit user percentage'}
            </EditBtn>
            <ChangePassBtn type="button" onClick={() => toggleOpenPassModal()}>
              {defaultLang
                ? 'Изменить пароль пользователя'
                : 'Change user password'}
            </ChangePassBtn>
            <DelBtn type="button" onClick={() => handleDelete()}>
              {defaultLang ? 'Удалить пользователя' : 'Delete user'}
            </DelBtn>
          </CardWrapper>
        )}
        {isOpen && (
          <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Edit user percentage</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Enter percentage"
                type="number"
                fullWidth
                variant="outlined"
                value={percentage}
                onChange={handleInputChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirm} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        )}
        {isOpenMailModal && (
          <ModalForm
            text={'Enter new user email'}
            title={'Change user email'}
            open={isOpenMailModal}
            handleClose={toggleOpenMailModal}
            handleSubmit={handleChangeEmailSubmit}
          >
            {<ChangeMailInput value={newEmail} onChange={handleChangeEmail} />}
          </ModalForm>
        )}
        {isOpenPassModal && (
          <ModalForm
            text={
              defaultLang
                ? 'Введите новый пароль юзера'
                : 'Enter new user password'
            }
            title={
              defaultLang ? 'Изменить пароль пользователя' : 'Change user email'
            }
            open={isOpenPassModal}
            handleClose={toggleOpenPassModal}
            handleSubmit={handleChangePasswordSubmit}
          >
            {<ChangeMailInput value={newPass} onChange={handleChangePass} />}
          </ModalForm>
        )}
        <TransactionList>
          <TitleList>Transactions history</TitleList>
          {user &&
            user.transactions.map((transaction, idx) => {
              const { _id, type, amount, approved, createdAt } = transaction;
              const formattedDate = getFormattedDate(createdAt);
              return (
                <TransactionItem key={idx}>
                  <p>{formattedDate}</p>
                  <p>{_id}</p>
                  <p>{type}</p>
                  <p>{amount}</p>
                  <p>
                    {approved ? (
                      <>
                        Approved <AiOutlineCheck size={20} color="#07ff07" />
                      </>
                    ) : (
                      <>
                        Not approved <AiOutlineClose size={20} color="red" />
                      </>
                    )}
                  </p>
                </TransactionItem>
              );
            })}
        </TransactionList>
      </CardContainer>
    </div>
  );
};
