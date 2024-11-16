import { Table, TableHead, TableRow } from './AdminUsersArchived.styled';

import { useLang } from 'hooks';
import { Fragment, useEffect, useState } from 'react';
import { setError } from '@/payments/paymentsSlice';
import { serverAPI } from 'utils/serverAPI';
import { CustomLink, TableItem } from './AdminUsersArchived.styled';

export const AdminUsersArchived = () => {
  const { defaultLang } = useLang();
  const [archivedUsers, setArchivedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
            archivedUsers.map(({ name, email, investment, date, _id }, idx) => {
              return (
                <Fragment key={idx}>
                  <TableRow>
                    <TableItem>{name}</TableItem>
                    <TableItem>{email}</TableItem>
                    <TableItem>{investment?.total || 0}</TableItem>
                    <TableItem>{investment?.percentage || 0}</TableItem>
                    <TableItem>{date}</TableItem>
                    <TableItem>{_id}</TableItem>
                    <TableItem>
                      <CustomLink to={`/dashboard/archived-users/${_id}`}>
                        More info
                      </CustomLink>
                    </TableItem>
                  </TableRow>
                </Fragment>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
