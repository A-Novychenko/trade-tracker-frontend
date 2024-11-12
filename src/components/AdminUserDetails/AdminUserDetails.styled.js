import styled from '@emotion/styled';

export const ImgWrapper = styled.li`
  padding: 4px;
  border-radius: 100%;
  border: 2px solid #fff;
  width: 80px;
  height: 80px;
  overflow: hidden;
`;

export const CardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  justify-content: center;
  align-items: center;
  background-color: #0317ed40;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 1px 2px 20px 3px rgba(179, 36, 179, 0.8);

  @media screen and (min-width: 768px) {
    width: 420px;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  font-size: 14px;
  color: #97d8fd;
  align-items: center;
  border-bottom: 1px solid #ffffff6e;
  padding-bottom: 8px;
`;

export const ValueWrap = styled.span`
  margin-left: auto;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;

export const EditWrap = styled.div`
  display: flex;
`;

export const Image = styled.img`
  border-radius: 100%;
`;

export const EditBtn = styled.button`
  width: 100%;
  padding: 8px 12px;
  background-color: #00f285;
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  color: #060872;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #03149f;
    color: #fff;
  }
`;

export const DelBtn = styled.button`
  width: 100%;
  padding: 8px 12px;
  background-color: #f40000;
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

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TransactionList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  background-color: #02123ec4;
  padding: 10px;
  border-radius: 8px;
  box-shadow: inset 0px -2px 28px 7px rgb(8 210 255);

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    max-height: 500px;
    overflow-y: auto;
  }
`;

export const TransactionItem = styled.li`
  font-weight: 500;
  font-size: 15px;
  border: 1px solid #e7e6ef87;
  border-radius: 16px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const TitleList = styled.h3`
  color: #ffffffa6;
`;
