import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 8px 12px;
  width: 250px;
  display: flex;
  justify-content: space-around;
`;

export const FilterBtn = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #8507ff;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;

  &:hover,
  &:focus {
    background-color: #f88306;
    color: #000000;
  }

  &:active {
    background-color: #f88306;
    color: #000000;
  }
`;
