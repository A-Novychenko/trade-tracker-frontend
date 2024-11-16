import { useLang } from 'hooks';
import { getFormattedDate } from '../../utils/getFormattedDate';

import { TableItem, TableRow, CustomLink } from './AdminUserListItem.styled';

export const AdminUserListItem = ({ user }) => {
  const { name, email, _id: id, investment, createdAt } = user;

  const { defaultLang } = useLang();

  const date = getFormattedDate(createdAt);

  return (
    <TableRow>
      <TableItem>{name}</TableItem>
      <TableItem>{email}</TableItem>
      <TableItem>{investment?.total || 0}</TableItem>
      <TableItem>{investment?.percentage || 0}</TableItem>
      <TableItem>{date}</TableItem>
      <TableItem>{id}</TableItem>
      <TableItem>
        <CustomLink to={`/dashboard/users/${id}`}>
          {defaultLang ? 'Опции' : 'More info'}
        </CustomLink>
      </TableItem>
    </TableRow>
  );
};
