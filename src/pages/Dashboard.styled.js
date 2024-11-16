import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TransactionListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const TransactionListTitle = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 8px;
    justify-content: space-around;
    color: rgb(255 255 255 / 60%);
  }
`;

export const OverviewContainer = styled.div`
  padding: 0 14px;
`;
