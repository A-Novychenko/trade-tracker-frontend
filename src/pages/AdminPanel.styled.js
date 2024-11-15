import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-around;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
`;
