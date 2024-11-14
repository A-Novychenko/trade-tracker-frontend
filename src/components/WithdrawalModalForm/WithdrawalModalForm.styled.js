import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
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
