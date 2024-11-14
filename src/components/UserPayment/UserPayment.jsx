import { Typography } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

import { InvestmentModalForm } from 'components/InvestmentModalForm';
import { WithdrawalModalForm } from 'components/WithdrawalModalForm';

import { useLang } from 'hooks';

import { Container, TitleWrap } from './UserPayment.styled';

export const UserPayment = () => {
  const { defaultLang } = useLang();

  return (
    <Container>
      <TitleWrap>
        <PaymentIcon fontSize="large" />

        <Typography ml={2}>
          {defaultLang ? 'Управление средствами' : 'Make a payment'}
        </Typography>
      </TitleWrap>

      <InvestmentModalForm />

      <WithdrawalModalForm />
    </Container>
  );
};
