import { useState } from 'react';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';

export const AdminUserDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [percentage, setPercentage] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    console.log('parcentage', percentage);
    setIsOpen(false);
  };

  const handleInputChange = event => {
    setPercentage(event.target.value);
  };
  return (
    <div>
      <img alt="user avatar" />
      <ul>
        <li>ID</li>
        <li>Name</li>
        <li>Email</li>
        <li>
          <div>
            <p>Percentage</p>
            <button type="button" onClick={handleOpen}>
              Edit
            </button>
          </div>
        </li>
        <li>Investment</li>
        <li>Registration Date</li>
      </ul>
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
