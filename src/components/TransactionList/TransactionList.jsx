import { TransactionListItem } from 'components/TransactionListItem';
import { Table, TableHead, TableRow } from './Transaction.styled';

import { useLang, useUser } from '../../hooks';

export const TransactionList = ({ transactions }) => {
  const { userIsLoading, userIsError } = useUser();
  const { defaultLang } = useLang();

  return (
    <>
      {!userIsLoading ? (
        <Table>
          <thead>
            <TableRow>
              <TableHead>{defaultLang ? 'Дата' : 'Data'}</TableHead>
              <TableHead>{defaultLang ? 'Тип' : 'Type'}</TableHead>
              <TableHead>{defaultLang ? 'Колличество' : 'Amount'}</TableHead>
              {/* <TableHead>Created</TableHead> */}
              <TableHead>{defaultLang ? 'Статус' : 'Status'}</TableHead>
              <TableHead>{defaultLang ? 'Детали' : 'Details'}</TableHead>
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
