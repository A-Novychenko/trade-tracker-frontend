import { AdminUserListItem } from 'components/AdminUserListItem';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getAllUsers } from '../../redux/admin/adminOperation';

// import { useAdmin, useLang } from '../../hooks/useAdmin';

import { Table, TableHead, TableRow } from './AdminUserList.styled';
import { useAdmin, useLang } from 'hooks';

export const AdminUserList = () => {
  const dispatch = useDispatch();
  const { allUsers, isLoading, isError } = useAdmin();
  const { defaultLang } = useLang();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead>{defaultLang ? 'Имя' : 'Name'}</TableHead>
          <TableHead>{defaultLang ? 'Почта' : 'Email'}</TableHead>
          <TableHead>{defaultLang ? 'Инвестиции' : 'Investment'}</TableHead>
          <TableHead>{defaultLang ? 'Процент' : 'Percentage'}</TableHead>
          <TableHead>
            {defaultLang ? 'Дата Регистрации' : 'Registration Date'}
          </TableHead>
          <TableHead>ID</TableHead>
          <TableHead>{defaultLang ? 'Опции' : 'Option'}</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {!isLoading &&
          allUsers.map((user, idx) => {
            return <AdminUserListItem key={idx} user={user} />;
          })}
      </tbody>
    </Table>
  );
};
