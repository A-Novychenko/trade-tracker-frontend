import { getFormattedDate } from '../../utils/getFormattedDate';
import { TableItem, TableRow } from './AdminTransactionListItem.styled';

import { MdOutlineDone } from 'react-icons/md';

export const AdminTransactionListItem = ({ transaction }) => {
  const { _id: id, owner, type, amount, approved, createdAt } = transaction;

  const date = getFormattedDate(createdAt);

  return (
    <TableRow>
      <TableItem>{date}</TableItem>
      <TableItem>{owner}</TableItem>
      <TableItem>{type}</TableItem>
      <TableItem>{amount}</TableItem>
      <TableItem>{id}</TableItem>
      <TableItem>
        {approved ? (
          <>
            <span>ok</span>
            <MdOutlineDone color="green" size={24} />
          </>
        ) : (
          <button>Approved now</button>
        )}
      </TableItem>
    </TableRow>
  );
};
