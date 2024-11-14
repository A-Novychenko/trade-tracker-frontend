import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
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
