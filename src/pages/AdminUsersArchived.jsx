import { Table, TableHead, TableRow } from '@mui/material';

import { AdminUserListItem } from 'components/AdminUserListItem';

import { useAdmin, useLang } from 'hooks';
import { useEffect, useState } from 'react';
import { setError } from '@/payments/paymentsSlice';
// import { useDispatch } from 'react-redux';
import { serverAPI } from 'utils/serverAPI';

export const AdminUsersArchived = () => {
  const { defaultLang } = useLang();
  const [archivedUsers, setArchivedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const dispatch = useDispatch();
  // const { allUsers, isLoading, isError } = useAdmin();

  useEffect(() => {
    const getArchivedUsers = async () => {
      try {
        setIsLoading(true);
        const { data } = await serverAPI.get('/admin/archived');

        setArchivedUsers(data.users);
      } catch (e) {
        setError(`Get users error ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getArchivedUsers();
  }, []);

  return (
    <div>
      <h1>{defaultLang ? 'Архив пользователей' : 'Archived users'}</h1>

      <Table>
        <thead>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Investment</TableHead>
            <TableHead>Percentage</TableHead>
            <TableHead>registrationDate</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {!isLoading &&
            archivedUsers &&
            archivedUsers.map((user, idx) => {
              return <AdminUserListItem key={idx} user={user} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};
