import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

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

export const CustomLink = styled(Link)`
  text-align: center;
  display: block;
  background-color: #7a14ff;
  border-radius: 12px;
  padding: 2px 8px;
  text-decoration: none;
  font-weight: 700;
  width: 100px;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #ff6611;
    transition: background-color 300ms linear;
  }
`;

export const Table = styled.table`
  width: 100%;
  padding: 8px 0;
  color: #ffffff;
  background-color: rgb(11 19 67 / 74%);
  border-radius: 8px;
  border-collapse: collapse;

  @media (max-width: 767px) {
    display: block;
    thead {
      display: none;
    }
    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }
    tr {
      margin-bottom: 15px;
      padding: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
    }
  }
`;

export const TableHead = styled.th`
  color: rgb(255 255 255 / 60%);
  padding: 8px 16px;
  text-align: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

// export const TableRow = styled.tr`
//   @media (max-width: 767px) {
//     display: block;
//     margin-bottom: 8px;
//   }
// `;
