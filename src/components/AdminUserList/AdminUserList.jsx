import { AdminUserListItem } from 'components/AdminUserListItem';
import { Table, TableHead, TableRow } from './AdminUserList.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllUsers } from '../../redux/admin/adminOperation';
import { useAdmin } from '../../hooks/useAdmin';

export const AdminUserList = () => {
  const dispatch = useDispatch();
  const { allUsers, isLoading, isError } = useAdmin();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
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
          allUsers.map((user, idx) => {
            return <AdminUserListItem key={idx} user={user} />;
          })}
      </tbody>
    </Table>
  );
};
