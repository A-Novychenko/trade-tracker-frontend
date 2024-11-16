import { useLang } from 'hooks';
import { Wrapper, FilterBtn } from './TransactionFilterPanel.styled';

export const TransactionFilterPanel = ({ onFilterChange }) => {
  const { defaultLang } = useLang();
  return (
    <Wrapper>
      <FilterBtn type="button" onClick={() => onFilterChange('All')}>
        {defaultLang ? 'Все' : 'All'}
      </FilterBtn>
      <FilterBtn type="button" onClick={() => onFilterChange('Deposit')}>
        {defaultLang ? 'Депозит' : 'Deposit'}
      </FilterBtn>
      <FilterBtn type="button" onClick={() => onFilterChange('Withdraw')}>
        {defaultLang ? 'Выводы' : 'Withdraw'}
      </FilterBtn>
    </Wrapper>
  );
};
