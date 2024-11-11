import { Wrapper, FilterBtn } from './TransactionFilterPanel.styled';

export const TransactionFilterPanel = ({ onFilterChange }) => {
  return (
    <Wrapper>
      <FilterBtn type="button" onClick={() => onFilterChange('All')}>
        All
      </FilterBtn>
      <FilterBtn type="button" onClick={() => onFilterChange('Deposit')}>
        Deposit
      </FilterBtn>
      <FilterBtn type="button" onClick={() => onFilterChange('Withdraw')}>
        Withdraw
      </FilterBtn>
    </Wrapper>
  );
};
