import { AdminUserListItem } from 'components/AdminUserListItem';
import { Table, TableHead, TableRow } from './AdminUserList.styled';

const testUsers = [
  {
    name: 'John',
    email: 'test@example.com',
    investment: 12000,
    percentage: '8%',
    registrationDate: '12.11.2023',
  },
  {
    name: 'Kiwi',
    email: 'test@example.com',
    investment: 181000,
    percentage: '9%',
    registrationDate: '12.11.2023',
    id: 'asdas324234asfaf',
  },
  {
    name: 'Mango',
    email: 'test@example.com',
    investment: 22000,
    percentage: '10%',
    registrationDate: '12.11.2023',
    id: 'asdas324234asfaf',
  },
  {
    name: 'Jack Sparrow',
    email: 'test@example.com',
    investment: 1000,
    percentage: '8%',
    registrationDate: '12.11.2023',
    id: 'asdas324234asfaf',
  },
];

export const AdminUserList = () => {
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
        {testUsers.map((user, idx) => {
          return <AdminUserListItem key={idx} user={user} />;
        })}
      </tbody>
    </Table>
  );
};
