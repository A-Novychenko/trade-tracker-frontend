import { AdminConditionsControl } from 'components/AdminConditionsControl';
import { AdminWalletControl } from 'components/AdminWalletControl';
import { useLang } from 'hooks';

export const AdminPanel = () => {
  const { defaultLang } = useLang();

  return (
    <div>
      <h2>{defaultLang ? 'Панель администратора' : 'Admin control panel'}</h2>
      <AdminConditionsControl />
      <AdminWalletControl />
    </div>
  );
};
