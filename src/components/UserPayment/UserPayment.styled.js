import styled from '@emotion/styled';

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: orangered;
`;

export const InvestBtn = styled.button`
  cursor: pointer;
  height: 50px;
  padding: 4px 8px;
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  background-color: #00a429;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #0eff4a;
    color: #113390;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  background-color: rgb(11 19 67 / 74%);
  padding: 8px 16px;
`;

export const WithdrawalBtn = styled.button`
  cursor: pointer;
  height: 50px;
  padding: 4px 8px;
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  background-color: #620897;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #b538ff;
    color: #ffff04;
  }
`;
