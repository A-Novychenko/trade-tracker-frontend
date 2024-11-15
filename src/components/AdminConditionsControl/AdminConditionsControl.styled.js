import styled from '@emotion/styled';

export const Btn = styled.button`
  width: 100%;
  padding: 8px 12px;
  font-size: 15px;
  background-color: #cc7affd4;
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  color: #fff;
  transition: background-color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #03149f;
  }
`;

export const OptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    max-width: 400px;
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
  word-wrap: break-word;
`;
