import { Link } from 'react-router-dom';
import { TableItem, TableRow, CustomLink } from './AdminUserListItem.styled';

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
        <CustomLink to={`/dashboard/users/${id}`}>More info</CustomLink>
      </TableRow>
    </TableRow>
  );
};
