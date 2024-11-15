import { AdminConditionsControl } from 'components/AdminConditionsControl';
import { AdminWalletControl } from 'components/AdminWalletControl';
import { useLang } from 'hooks';
import { Wrapper } from './AdminPanel.styled';

export const AdminPanel = () => {
  const { defaultLang } = useLang();

  return (
    <div>
      <h2>{defaultLang ? 'Панель администратора' : 'Admin control panel'}</h2>
      <Wrapper>
        <AdminConditionsControl />
        <AdminWalletControl />
      </Wrapper>
    </div>
  );
};
