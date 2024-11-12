import { AdminTransactionListItem } from 'components/AdminTransactionListItem';

import { useAdmin } from '../../hooks/index';

import { Table, TableHead, TableRow } from './AdminTransactionList.styled';

export const AdminTransactionList = ({ allTransactions }) => {
  const { isLoading, isError } = useAdmin();

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
