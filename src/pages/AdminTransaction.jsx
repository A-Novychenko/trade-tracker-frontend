import { AdminTransactionList } from 'components/AdminTransactionList';
import { TransactionFilterPanel } from 'components/TransactionFilterPanel';

import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTransactions } from '../redux/admin/adminOperation';
import { useAdmin } from '../hooks/index';

export const AdminTransaction = () => {
  const [filter, setFilter] = useState('All');

  const dispatch = useDispatch();
  const { allTransactions, isLoading, isError } = useAdmin();

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
  };

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const filteredTransactions = useCallback(() => {
    return allTransactions.filter(transaction => {
      switch (filter) {
        case 'Deposit':
          return transaction.type === 'deposit';
        case 'Withdraw':
          return transaction.type === 'withdraw';
        default:
          return transaction;
      }
    });
  }, [allTransactions, filter]);

  const transactions = filteredTransactions();

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionFilterPanel onFilterChange={handleFilterChange} />
      <AdminTransactionList allTransactions={transactions} />
    </div>
  );
};
