import { useAuth, useLang } from '../../hooks';
import {
  Container,
  ItemWrapper,
  Title,
  Value,
  MainWrap,
  PercentageWrap,
  Text,
} from './InvestmentOverview.styled';

export const InvestmentOverview = () => {
  const {
    user: {
      investment: { investment, percentage, profit, total },
    },
  } = useAuth();
  const { defaultLang } = useLang();

  let formattedProfit = Math.round(profit * 100) / 100;
  let formattedTotal = Math.round(total * 100) / 100;
  return (
    <MainWrap>
      <Container>
        <ItemWrapper>
          <Title>{defaultLang ? 'Инвестиции' : 'Investment'}</Title>
          <Value>{investment}$</Value>
        </ItemWrapper>
        <ItemWrapper>
          <Title>{defaultLang ? 'Прибыль' : 'Total profit'}</Title>
          <Value>{formattedProfit}$</Value>
        </ItemWrapper>
        <ItemWrapper>
          <Title>{defaultLang ? 'Общий баланс' : 'Total balance'}</Title>
          <Value>{formattedTotal}$</Value>
        </ItemWrapper>
      </Container>
      <Text>
        {defaultLang
          ? 'Ваша процентная ставка на данный момент - '
          : '*Your percentage of profit at the moment is - '}
        <PercentageWrap>{percentage}%</PercentageWrap>
      </Text>
    </MainWrap>
  );
};
