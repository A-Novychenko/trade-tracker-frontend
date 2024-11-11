import { getFormattedDate } from '../../utils/getFormattedDate';
import { TableItem, TableRow, CustomLink } from './AdminUserListItem.styled';

export const AdminUserListItem = ({ user }) => {
  const { name, email, _id: id, investment, createdAt } = user;

  const date = getFormattedDate(createdAt);

  return (
    <TableRow>
      <TableItem>{name}</TableItem>
      <TableItem>{email}</TableItem>
      <TableItem>{investment.investment}</TableItem>
      <TableItem>{investment.percentage}</TableItem>
      <TableItem>{date}</TableItem>
      <TableItem>{id}</TableItem>
      <TableRow>
        <CustomLink to={`/dashboard/users/${id}`}>More info</CustomLink>
      </TableRow>
    </TableRow>
  );
};
