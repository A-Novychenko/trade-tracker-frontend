import styled from '@emotion/styled';

export const TableRow = styled.tr`
  position: relative;
  font-size: 14px;
  background-color: rgb(60 62 75 / 74%);

  &:nth-of-type(even) {
    background-color: rgb(14 32 132 / 74%);
  }

  &:hover td:first-of-type::before {
    width: 5px;
  }
`;

export const TableItem = styled.td`
  text-align: center;
  padding: 4px 8px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background-color: white;
    transition: width 0.3s ease;
  }
`;

export const DetailBtn = styled.button`
  cursor: pointer;
  background-color: #8c36ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #14c21f;
    color: #000;
  }
`;
