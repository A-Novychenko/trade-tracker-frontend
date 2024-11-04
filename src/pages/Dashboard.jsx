import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Typography } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

import { Filter } from 'components/Filter';
import { TransitionsModal } from 'components/Modal';

import { addPayment } from '../redux/payments/paymentsOperations';
import { usePayments } from '../hooks';

export default function Dashboard({ handleIsSuchPayment }) {
  const dispatch = useDispatch();
  const { payments } = usePayments();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const onSubmit = () => {
    const isInPayments = payments ? null : null;
    const name = 'TEST';

    if (isInPayments) {
      handleIsSuchPayment(`${name} Is already in payments !`);
      return;
    }

    dispatch(addPayment({ name: '', number: '' }));
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ display: 'flex', mr: 'auto', my: 4, bgcolor: 'orangered' }}
      >
        <PaymentIcon fontSize="large" />

        <Typography ml={2}> Make a payment</Typography>
      </Button>
      <Filter />

      {open && (
        <TransitionsModal handleClose={handleClose} open={open}>
          <p>Payment Form</p>

          <form onSubmit={onSubmit}>
            <input type="text" />

            <button type="submit"></button>
          </form>
        </TransitionsModal>
      )}
    </div>
  );
}
