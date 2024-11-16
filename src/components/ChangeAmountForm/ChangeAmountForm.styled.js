import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const EditBtn = styled.button`
  width: 100%;
  padding: 8px 12px;
  background-color: #00f285;
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  color: #060872;
  font-size: 15px;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #03149f;
    color: #fff;
  }
`;
