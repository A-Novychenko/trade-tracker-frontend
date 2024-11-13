import { TransactionListItem } from 'components/TransactionListItem';
import { Table, TableHead, TableRow } from './Transaction.styled';

import { useUser } from '../../hooks';

export const TransactionList = ({ transactions }) => {
  const { userIsLoading, userIsError } = useUser();

  return (
    <>
      {!userIsLoading ? (
        <Table>
          <thead>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              {/* <TableHead>Created</TableHead> */}
              <TableHead>Status</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {transactions.map((item, idx) => {
              return <TransactionListItem key={idx} data={item} />;
            })}
          </tbody>
        </Table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
