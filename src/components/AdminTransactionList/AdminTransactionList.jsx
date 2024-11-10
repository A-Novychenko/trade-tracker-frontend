import { AdminTransactionListItem } from 'components/AdminTransactionListItem';
import { Table, TableHead, TableRow } from './AdminTransactionList.styled';

const testTransaction = [
  {
    _id: '672d2871f0a2515c91c2505e',
    type: 'deposit',
    amount: 7000,
    approved: true,
    owner: '672cf691c82bd314d79a46fc',
    createdAt: '2024-11-07T20:52:01.876Z',
    updatedAt: '2024-11-07T20:53:59.805Z',
  },
  {
    _id: '672d2871f0a2515c91c2505e',
    type: 'deposit',
    amount: 7000,
    approved: true,
    owner: '672cf691c82bd314d79a46fc',
    createdAt: '2024-11-01T20:52:01.876Z',
    updatedAt: '2024-11-07T20:53:59.805Z',
  },
  {
    _id: '672d2871f0a2515c91c2505e',
    type: 'deposit',
    amount: 7000,
    approved: true,
    owner: '672cf691c82bd314d79a46fc',
    createdAt: '2024-11-03T20:52:01.876Z',
    updatedAt: '2024-11-07T20:53:59.805Z',
  },
  {
    _id: '672d2871f0a2515c91c2505e',
    type: 'deposit',
    amount: 7000,
    approved: true,
    owner: '672cf691c82bd314d79a46fc',
    createdAt: '2024-11-06T20:21:01.876Z',
    updatedAt: '2024-11-07T20:53:59.805Z',
  },
];

export const AdminTransactionList = () => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead>Data</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Approve</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {testTransaction.map((transaction, idx) => {
          return (
            <AdminTransactionListItem key={idx} transaction={transaction} />
          );
        })}
      </tbody>
    </Table>
  );
};
