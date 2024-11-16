import { AdminTransactionListItem } from 'components/AdminTransactionListItem';

import { useAdmin, useLang } from '../../hooks/index';

import { Table, TableHead, TableRow } from './AdminTransactionList.styled';

export const AdminTransactionList = ({ allTransactions }) => {
  const { isLoading, isError } = useAdmin();
  const { defaultLang } = useLang();

  return (
    <Table>
      <thead>
        <TableRow>
          {/* <TableHead>Data</TableHead> */}
          <TableHead>{defaultLang ? 'Владелец' : 'Owner'}</TableHead>
          <TableHead>{defaultLang ? 'Тип' : 'Type'}</TableHead>
          <TableHead>{defaultLang ? 'Сумма' : 'Amount'}</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>{defaultLang ? 'Статус' : 'Status'}</TableHead>
        </TableRow>
      </thead>

      <tbody>
        {isLoading && (
          <TableRow>
            <TableHead>Loading...</TableHead>
          </TableRow>
        )}
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
