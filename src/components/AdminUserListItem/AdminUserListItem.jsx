import { TableItem, TableRow } from './AdminUserListItem.styled';

export const AdminUserListItem = ({ user }) => {
  const { name, email, percentage, id, investment, registrationDate } = user;
  return (
    <TableRow>
      <TableItem>{name}</TableItem>
      <TableItem>{email}</TableItem>
      <TableItem>{percentage}</TableItem>
      <TableItem>{investment}</TableItem>
      <TableItem>{registrationDate}</TableItem>
      <TableItem>{id}</TableItem>
      <TableRow>
        <button type="button">Action</button>
      </TableRow>
    </TableRow>
  );
};
