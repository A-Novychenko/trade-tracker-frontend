import { useAuth, useLang } from '../../hooks';

import { Container, Title } from './CustomerProfile.styled';

export const CustomerProfile = () => {
  const {
    user: { email, id },
  } = useAuth();
  const { defaultLang } = useLang();

  return (
    <Container>
      <Title>
        {defaultLang ? 'Информация о пользователе' : 'Personal user info'}
      </Title>
      <div>
        <p>{defaultLang ? 'Почта' : 'E-mail:'}</p>
        <p>{email}</p>
      </div>
      <div>
        <p>ID:</p>
        <p>{id}</p>
      </div>
    </Container>
  );
};
