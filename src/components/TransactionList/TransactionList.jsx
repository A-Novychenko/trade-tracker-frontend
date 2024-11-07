import { TransactionListItem } from 'components/TransactionListItem';
import { Table, TableHead } from './Transaction.styled';

const testData = [
  {
    id: '672d2871f0a2515c91c2505e',
    type: 'deposit',
    amount: 7000,
    approved: true,
    owner: '672cf691c82bd314d79a46fc',
    createdAt: '2024-11-07T20:52:01.876Z',
    updatedAt: '2024-11-07T20:53:59.805Z',
  },
  {
    id: '672d2871f0a2515c91c2505e',
    type: 'deposit',
    amount: 7000,
    approved: true,
    owner: '672cf691c82bd314d79a46fc',
    createdAt: '2024-11-07T20:52:01.876Z',
    updatedAt: '2024-11-07T20:53:59.805Z',
  },
  {
    id: '672d2871f0a2515c91c2505e',
    type: 'deposit',
    amount: 7000,
    approved: true,
    owner: '672cf691c82bd314d79a46fc',
    createdAt: '2024-11-07T20:52:01.876Z',
    updatedAt: '2024-11-07T20:53:59.805Z',
  },
];

export const TransactionList = () => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Data</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          {/* <TableHead>Created</TableHead> */}
          <TableHead>Status</TableHead>
          <TableHead>Details</TableHead>
        </tr>
      </thead>
      <tbody>
        {testData.map((item, idx) => {
          return <TransactionListItem key={idx} data={item} />;
        })}
      </tbody>
    </Table>
  );
};
