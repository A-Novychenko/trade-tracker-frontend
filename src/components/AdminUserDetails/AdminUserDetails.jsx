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
  deleteUser,
  getUserById,
  updatePercentage,
} from '../../redux/admin/adminOperation';

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
} from './AdminUserDetails.styled';

export const AdminUserDetails = () => {
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [percentage, setPercentage] = useState('');
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  console.log('user', user);

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
  }, [id, dispatch, isOpen]);

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
    setPercentage(event.target.value);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteUser(id)).unwrap();
      setUser(null);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
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
            <ListItem>
              Email: <ValueWrap>{user?.email}</ValueWrap>
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
              Edit user percentage
            </EditBtn>
            <DelBtn type="button" onClick={() => handleDelete()}>
              Delete user
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
