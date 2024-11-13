import { useState } from 'react';
import { TableRow, TableItem, DetailBtn } from './TransactionListItem.styled';

export const TransactionListItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TableRow>
      <TableItem>17.05.2023</TableItem>
      <TableItem>{data.type}</TableItem>
      <TableItem>{data.amount}</TableItem>
      {/* <td>25.12.2302 14:34</td> */}
      <TableItem>approved</TableItem>
      <TableItem>
        <DetailBtn type="button">Details</DetailBtn>
      </TableItem>
    </TableRow>
  );
};
