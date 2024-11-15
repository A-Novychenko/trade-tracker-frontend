import { AdminTransactionList } from 'components/AdminTransactionList';
import { TransactionFilterPanel } from 'components/TransactionFilterPanel';

import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTransactions } from '../redux/admin/adminOperation';

import { useAdmin } from '../hooks/index';
import { useLang } from 'hooks';

import { CustomInput, Wrapper } from './AdminTransaction.styled';

export const AdminTransaction = () => {
  const [filter, setFilter] = useState('All');
  const [searchId, setSearchId] = useState('');

  const { allTransactions, isLoading, isError } = useAdmin();
  const { defaultLang } = useLang();

  const dispatch = useDispatch();

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
  };

  const handleSearchChange = event => {
    setSearchId(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const filteredTransactions = useMemo(() => {
    return allTransactions.filter(transaction => {
      const matchesFilter =
        filter === 'All' || transaction.type === filter.toLowerCase();
      const matchesSearch = searchId
        ? transaction._id.includes(searchId)
        : true;
      return matchesFilter && matchesSearch;
    });
  }, [allTransactions, filter, searchId]);

  return (
    <div>
      <h1>{defaultLang ? 'Тразакции' : 'Transactions'}</h1>
      <Wrapper style={{ display: 'flex' }}>
        <TransactionFilterPanel onFilterChange={handleFilterChange} />
        <CustomInput
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={handleSearchChange}
        />
      </Wrapper>
      <AdminTransactionList allTransactions={filteredTransactions} />
    </div>
  );
};
