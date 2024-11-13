import { useAuth } from '../../hooks';

import { Container, Title } from './CustomerProfile.styled';

export const CustomerProfile = () => {
  const {
    user: { email, id },
  } = useAuth();

  return (
    <Container>
      <Title>Personal user info</Title>
      <div>
        <p>E-mail:</p>
        <p>{email}</p>
      </div>
      <div>
        <p>Personal ID:</p>
        <p>{id}</p>
      </div>
    </Container>
  );
};
