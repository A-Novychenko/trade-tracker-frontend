import { Button, Typography } from '@mui/material';
// import { usePayments } from 'hooks';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addPayment, fetchPayments } from 'redux/payments/paymentsOperations';

import PaymentIcon from '@mui/icons-material/Payment';
import { TransitionsModal } from 'components/Modal';
import {
  Container,
  InvestBtn,
  TitleWrap,
  WithdrawalBtn,
} from './UserPayment.styled';

export const UserPayment = () => {
  //   const dispatch = useDispatch();
  //   const { payments } = usePayments();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  //   const onSubmit = () => {
  //     const isInPayments = payments ? null : null;
  //     const name = 'TEST';

  //     if (isInPayments) {
  //       handleIsSuchPayment(`${name} Is already in payments !`);
  //       return;
  //     }

  //     dispatch(addPayment({ name: 'test', number: '+380931112233' }));
  //   };
  return (
    <Container>
      <TitleWrap>
        <PaymentIcon fontSize="large" />

        <Typography ml={2}> Make a payment</Typography>
      </TitleWrap>

      {open && (
        <TransitionsModal handleClose={handleClose} open={open}>
          <p>Payment Form</p>

          <form onSubmit={onSubmit}>
            <input type="text" />

            <button type="submit">Add payment</button>
          </form>
        </TransitionsModal>
      )}

      <InvestBtn
        type="button"
        // onClick={() => {
        //     dispatch(addPayment({ name: 'test', number: '+380931112233' }));
        // }}
      >
        Investment
      </InvestBtn>
      <WithdrawalBtn
        type="button"
        // onClick={() => {
        //     dispatch(fetchPayments());
        // }}
      >
        Withdrawal
      </WithdrawalBtn>
    </Container>
  );
};
