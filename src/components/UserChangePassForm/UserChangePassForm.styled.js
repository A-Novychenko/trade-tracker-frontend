import styled from '@emotion/styled';

export const ChangeBtn = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  padding: 4px 8px;
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  background-color: #f85f20e3;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #0efffa;
    color: #113390;
  }
`;
