import { AdminUserList } from 'components/AdminUserList';
import { useLang } from 'hooks';

export const AdminUsers = () => {
  const { defaultLang } = useLang();
  return (
    <div>
      <h1>{defaultLang ? 'Пользователи' : 'Users'}</h1>
      <AdminUserList />
    </div>
  );
};
