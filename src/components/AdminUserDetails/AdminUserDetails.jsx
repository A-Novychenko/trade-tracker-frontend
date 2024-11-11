import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUser,
  getUserById,
  updatePercentage,
} from '../../redux/admin/adminOperation';

export const AdminUserDetails = () => {
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [percentage, setPercentage] = useState('');
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

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

  const handleConfirm = () => {
    dispatch(updatePercentage({ id, percentage }));
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
  return (
    <div>
      {user && (
        <ul>
          <li>
            <img alt="user" src={`http:${user.avatarURL}`} />
          </li>
          <li>ID: {user?._id}</li>
          <li>Name: {user?.name}</li>
          <li>Email: {user?.email}</li>
          <li>
            <div>
              <p>Percentage: {user?.investment?.percentage || 0}</p>
              <button type="button" onClick={handleOpen}>
                Edit
              </button>
            </div>
          </li>
          <li>Investment: {user?.investment?.investment || 0}</li>
          <li>Registration Date: {user?.createdAt}</li>
          <li>
            <button type="button" onClick={() => handleDelete()}>
              delete
            </button>
          </li>
        </ul>
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
    </div>
  );
};
