import { getFormattedDate } from '../../utils/getFormattedDate';
import { TableItem, TableRow } from './AdminTransactionListItem.styled';

export const AdminTransactionListItem = ({ transaction }) => {
  const { _id: id, owner, type, amount, approved, createdAt } = transaction;

  const date = getFormattedDate(createdAt);

  return (
    // <div>
    //   <p>Owner:{owner} </p>
    //   <p>Type {type}</p>
    //   <p>Amount {amount}</p>
    //   <p>id {id}</p>
    //   {approved && <p>approved</p>}
    //   <p>Create {date}</p>
    // </div>
    <TableRow>
      <TableItem>{date}</TableItem>
      <TableItem>{owner}</TableItem>
      <TableItem>{type}</TableItem>
      <TableItem>{amount}</TableItem>
      <TableItem>{id}</TableItem>
      <TableItem>{approved ? 'OK' : 'Not Approve'}</TableItem>
    </TableRow>
  );
};
