import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid transparent;
  padding: 8px 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: rgb(11 19 67 / 74%);
  color: #fff;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Wrapper = styled.div``;
