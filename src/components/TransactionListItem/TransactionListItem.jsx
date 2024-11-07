import { TableRow, TableItem } from './TransactionListItem.styled';

export const TransactionListItem = ({ data }) => {
  console.log(data);
  return (
    <TableRow>
      <TableItem>17.05.2023</TableItem>
      <TableItem>{data.type}</TableItem>
      <TableItem>{data.amount}</TableItem>
      {/* <td>25.12.2302 14:34</td> */}
      <TableItem>approved</TableItem>
      <TableItem>
        <button type="button">Details</button>
      </TableItem>
    </TableRow>
  );
};
