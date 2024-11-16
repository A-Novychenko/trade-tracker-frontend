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
import { useDispatch } from 'react-redux';
import { confirmTransaction } from '../../redux/admin/adminOperation';
import { useLang } from 'hooks';

export const AdminTransactionListItem = ({ transaction }) => {
  const { _id: id, owner, type, amount, approved, createdAt } = transaction;

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const { defaultLang } = useLang();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    dispatch(confirmTransaction(id));
    setIsOpen(false);
  };

  const date = getFormattedDate(createdAt);

  console.log('transaction', transaction);

  return (
    <TableRow>
      <TableItem>{date}</TableItem>
      <TableItem style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ borderBottom: '1px solid #fff', padding: '4px 0px' }}>
          {owner._id}
        </span>
        <span style={{ padding: '4px 0' }}>{owner.email}</span>
      </TableItem>
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
          <CustomBtn onClick={() => handleOpen()}>
            {defaultLang ? 'Подтвердить' : 'Approved now'}
          </CustomBtn>
        )}
      </TableItem>

      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="confirm-dialog-title"
          aria-describedby="confirm-dialog-description"
        >
          <DialogTitle id="confirm-dialog-title">
            {defaultLang ? 'Подтвердить' : 'Confirm approved'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="confirm-dialog-description">
              {defaultLang
                ? 'Дествительно подтвердить ?'
                : 'You sure approved this transaction?'}
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
