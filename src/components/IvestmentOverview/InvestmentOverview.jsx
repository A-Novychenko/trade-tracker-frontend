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
  return (
    <MainWrap>
      <Container>
        <ItemWrapper>
          <Title>Investment</Title>
          <Value>23000$</Value>
        </ItemWrapper>
        <ItemWrapper>
          <Title>Profit per day</Title>
          <Value>61.3$</Value>
        </ItemWrapper>
        <ItemWrapper>
          <Title>Total balance</Title>
          <Value>23061.3$</Value>
        </ItemWrapper>
      </Container>
      <Text>
        *Your percentage of profit at the moment is -{' '}
        <PercentageWrap>8%</PercentageWrap>
      </Text>
    </MainWrap>
  );
};
