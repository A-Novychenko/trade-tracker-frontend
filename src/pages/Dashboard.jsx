import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Typography } from '@mui/material';

import { TransitionsModal } from 'components/Modal';

import {
  addPayment,
  fetchPayments,
} from '../redux/payments/paymentsOperations';
import { getUserTransaction } from '../redux/user/userOperation';
import { usePayments, useUser } from '../hooks';
import { CustomerProfile } from 'components/CustomerProfile';
import { InvestmentOverview } from 'components/IvestmentOverview';
import { InvestmentConditions } from 'components/InvestmentCondition';
import { TransactionList } from 'components/TransactionList';
// import { FeedbackButton } from 'components/FeedbackButton';
import { DashboardBanner } from 'components/DashbordBanner';
import {
  Container,
  OverviewContainer,
  TransactionListTitle,
  TransactionListWrap,
} from './Dashboard.styled';
import { UserPayment } from 'components/UserPayment';
import { SupportModalForm } from 'components/SupportModalForm';
import { UserChangePassForm } from 'components/UserChangePassForm/UserChangePassForm';

export default function Dashboard({ handleIsSuchPayment }) {
  const dispatch = useDispatch();
  const { payments } = usePayments();
  const { withdrawTransactions, depositTransactions } = useUser();

  useEffect(() => {
    dispatch(getUserTransaction());
  }, [dispatch]);

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

    dispatch(addPayment({ name: 'test', number: '+380931112233' }));
  };

  return (
    <div>
      <Container>
        <div>
          <CustomerProfile />
          <UserPayment />

          <SupportModalForm />

          <UserChangePassForm />

          <DashboardBanner />
        </div>
        <OverviewContainer>
          <InvestmentOverview />
          <InvestmentConditions />
          <h3 style={{ textAlign: 'center', color: '#fff' }}>
            Transaction History
          </h3>
          <TransactionListTitle>
            <p>Deposit history</p>
            <p>Withdraw history</p>
          </TransactionListTitle>
          <TransactionListWrap style={{ display: 'flex', gap: '12px' }}>
            <TransactionList transactions={depositTransactions} />
            <TransactionList transactions={withdrawTransactions} />
          </TransactionListWrap>
        </OverviewContainer>
      </Container>
    </div>
  );
}
