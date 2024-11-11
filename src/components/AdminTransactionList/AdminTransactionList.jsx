import { AdminTransactionListItem } from 'components/AdminTransactionListItem';
import { Table, TableHead, TableRow } from './AdminTransactionList.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTransactions } from '../../redux/admin/adminOperation';
import { useAdmin } from '../../hooks/index';

export const AdminTransactionList = () => {
  const dispatch = useDispatch();
  const { allTransactions, isLoading, isError } = useAdmin();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <Table>
      <thead>
        <TableRow>
          {/* <TableHead>Data</TableHead> */}
          <TableHead>Owner</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Approve</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          allTransactions.map((transaction, idx) => {
            return (
              <AdminTransactionListItem key={idx} transaction={transaction} />
            );
          })}
      </tbody>
    </Table>
  );
};
