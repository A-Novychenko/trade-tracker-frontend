import { Wrapper, FilterBtn } from './TransactionFilterPanel.styled';

export const TransactionFilterPanel = () => {
  return (
    <Wrapper>
      <FilterBtn type="button">All</FilterBtn>
      <FilterBtn type="button">Deposit</FilterBtn>
      <FilterBtn type="button">Withdraw</FilterBtn>
    </Wrapper>
  );
};
