import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ThreeDots } from 'react-loader-spinner';

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

import { toast } from 'react-toastify';

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
  const { isError, isLoading } = useAdmin();

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
        toast.error('Ошибка получения данных');
        console.error('Error fetching user:', error);
      }
    };

    if (id) {
      getUser(id);
    }
  }, [id, dispatch, percentage]);

  const toggleOpenMailModal = () => setIsOpenMailModal(prev => !prev);

  const toggleOpenPassModal = () => setIsOpenPassModal(prev => !prev);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setPercentage('');
  };

  const handleConfirm = async () => {
    // await dispatch(updatePercentage({ id, percentage }));
    // setIsOpen(false);
    try {
      await dispatch(updatePercentage({ id, percentage }));
      setUser(prevUser => ({
        ...prevUser,
        investment: {
          ...prevUser.investment,
          percentage,
        },
      }));
      setIsOpen(false);
    } catch (error) {
      console.error('Error updating percentage:', error);
    } finally {
      setPercentage('');
    }
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
      toast.error('Ошибка удаления');
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
              {defaultLang ? 'Имя' : 'Name:'}{' '}
              <ValueWrap>{user?.name}</ValueWrap>
            </ListItem>
            <ListItem style={{ display: 'block' }}>
              <div style={{ display: 'flex' }}>
                {defaultLang ? 'Почта' : 'Email:'}{' '}
                <ValueWrap>{user?.email}</ValueWrap>
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
              {defaultLang ? 'Процент' : 'Percentage:'}{' '}
              <ValueWrap>{user?.investment?.percentage || 0}%</ValueWrap>
            </ListItem>
            <ListItem>
              {defaultLang ? 'Инвестиции' : 'Investment:'}{' '}
              <ValueWrap>{user?.investment?.total || 0}</ValueWrap>
            </ListItem>
            <ListItem>
              {defaultLang ? 'Прибыль' : 'Profit:'}{' '}
              <ValueWrap>{user?.investment?.profit || 0}</ValueWrap>
            </ListItem>
            <ListItem>
              {defaultLang ? 'Дата регестрации' : 'Registration Date:'}{' '}
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
          <>
            {isLoading && (
              <div
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  width: '300px',
                  height: '300px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2000,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#aa00ff"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              </div>
            )}
            <Dialog open={isOpen} onClose={handleClose}>
              <DialogTitle>
                {defaultLang ? 'Изменить процент' : 'Edit user percentage'}
              </DialogTitle>
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
          </>
        )}
        {isOpenMailModal && (
          <>
            {isLoading && (
              <div
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  width: '300px',
                  height: '300px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2000,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#aa00ff"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              </div>
            )}
            <ModalForm
              text={'Enter new user email'}
              title={'Change user email'}
              open={isOpenMailModal}
              handleClose={toggleOpenMailModal}
              handleSubmit={handleChangeEmailSubmit}
            >
              {
                <ChangeMailInput
                  value={newEmail}
                  onChange={handleChangeEmail}
                />
              }
            </ModalForm>
          </>
        )}
        {isOpenPassModal && (
          <>
            {isLoading && (
              <div
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  width: '300px',
                  height: '300px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2000,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#aa00ff"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              </div>
            )}
            <ModalForm
              text={
                defaultLang
                  ? 'Введите новый пароль юзера'
                  : 'Enter new user password'
              }
              title={
                defaultLang
                  ? 'Изменить пароль пользователя'
                  : 'Change user email'
              }
              open={isOpenPassModal}
              handleClose={toggleOpenPassModal}
              handleSubmit={handleChangePasswordSubmit}
            >
              {<ChangeMailInput value={newPass} onChange={handleChangePass} />}
            </ModalForm>
            {isLoading && <ThreeDots />}
          </>
        )}
        <TransactionList>
          <TitleList>
            {defaultLang ? 'История транзакций' : 'Transactions history'}
          </TitleList>
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
                        {defaultLang ? 'Подтверджена' : 'Approved'}
                        <AiOutlineCheck size={20} color="#07ff07" />
                      </>
                    ) : (
                      <>
                        {defaultLang ? 'Ожидает' : 'Not approved'}{' '}
                        <AiOutlineClose size={20} color="red" />
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
