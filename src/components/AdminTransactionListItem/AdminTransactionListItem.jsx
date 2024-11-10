import { useState } from 'react';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';

import { getFormattedDate } from '../../utils/getFormattedDate';

import {
  TableItem,
  TableRow,
  CustomBtn,
} from './AdminTransactionListItem.styled';

import { MdOutlineDone } from 'react-icons/md';

export const AdminTransactionListItem = ({ transaction }) => {
  const { _id: id, owner, type, amount, approved, createdAt } = transaction;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    console.log('Approved');
    setIsOpen(false);
  };

  const date = getFormattedDate(createdAt);

  return (
    <TableRow>
      <TableItem>{date}</TableItem>
      <TableItem>{owner}</TableItem>
      <TableItem>{type}</TableItem>
      <TableItem>{amount}</TableItem>
      <TableItem>{id}</TableItem>
      <TableItem>
        {approved ? (
          <>
            <span>ok</span>
            <MdOutlineDone color="green" size={24} />
          </>
        ) : (
          <CustomBtn onClick={() => handleOpen()}>Approved now</CustomBtn>
        )}
      </TableItem>

      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="confirm-dialog-title"
          aria-describedby="confirm-dialog-description"
        >
          <DialogTitle id="confirm-dialog-title">Confirm approved</DialogTitle>
          <DialogContent>
            <DialogContentText id="confirm-dialog-description">
              You sure approved this transaction?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirm} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </TableRow>
  );
};
