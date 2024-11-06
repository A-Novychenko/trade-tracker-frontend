import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  border: 1px solid transparent;
  padding: 8px 16px;
  /* width: 100%;
  border-radius: 8px;
  background-color: rgb(11 19 67 / 74%); */
  color: #fff;
`;

export const ItemWrapper = styled.li`
  position: relative;
  width: calc(100% / 3);
  padding: 16px 32px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :not(:last-child)::before {
    content: '';
    position: absolute;
    right: 0;
    top: 15%;
    width: 1px;
    height: 70%;
    background-color: white;
  }
`;

export const Title = styled.h3`
  color: rgb(255 255 255 / 60%);
`;

export const Value = styled.p`
  font-size: 26px;
  font-weight: 700;
`;

export const MainWrap = styled.div`
  width: 1000px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: rgb(11 19 67 / 74%);
`;

export const PercentageWrap = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #04ed65;
`;

export const Text = styled.p`
  font-size: 14px;
  text-align: center;
  color: rgb(255 255 255 / 60%);
`;
