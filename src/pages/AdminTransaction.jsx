import { AdminTransactionList } from 'components/AdminTransactionList';
import { TransactionFilterPanel } from 'components/TransactionFilterPanel';

export const AdminTransaction = () => {
  return (
    <div>
      <h1>admintrasaction</h1>
      <TransactionFilterPanel />
      <AdminTransactionList />
    </div>
  );
};
