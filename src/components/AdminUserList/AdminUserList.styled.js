import styled from '@emotion/styled';

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

export const TableRow = styled.tr`
  @media (max-width: 767px) {
    display: block;
    margin-bottom: 8px;
  }
`;
