import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CustomInput = styled.input`
  outline: transparent;
  border: solid 1px transparent;
  border-radius: 8px;
  width: 100%;
  transition: border-color 300ms ease-in-out;

  &:hover,
  &:focus,
  &:active {
    border-color: #00ffef;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;
