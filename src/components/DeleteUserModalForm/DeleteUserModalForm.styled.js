import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 20px;
  margin-bottom: 20px;
`;

export const DelBtn = styled.button`
  width: 100%;
  padding: 8px 12px;
  background-color: #f40000;
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  color: #fff;
  font-size: 15px;
  transition: background-color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #03149f;
  }
`;
