import styled from '@emotion/styled';

export const Btn = styled.button`
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

export const OptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff96;
`;

export const Overview = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
