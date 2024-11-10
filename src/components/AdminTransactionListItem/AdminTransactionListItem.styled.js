import styled from '@emotion/styled';

export const TableRow = styled.tr`
  position: relative;
  font-size: 14px;
  background-color: rgb(60 62 75 / 74%);

  &:nth-child(even) {
    background-color: rgb(14 32 132 / 74%);
  }

  &:hover td:first-child::before {
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

export const CustomBtn = styled.button`
  cursor: pointer;
  border: none;
  text-align: center;
  display: block;
  background-color: #7a14ff;
  border-radius: 12px;
  padding: 2px 8px;
  text-decoration: none;
  font-weight: 700;
  width: 100%;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #ff6611;
    transition: background-color 300ms linear;
  }
`;
