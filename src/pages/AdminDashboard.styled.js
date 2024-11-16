import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const BurgerBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #8502da;
  border: none;
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  position: 'fixed';
  z-index: 2;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 250px;
  height: 100vh;
  background-color: rgba(11, 19, 67);
  color: white;
  transition: left 0.3s ease;
  padding: 50px 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 5;

  @media screen and (min-width: 768px) {
    background-color: rgba(11, 19, 67, 0.74);
    position: relative;
    width: 250px;
    height: 100vh;
    left: 15px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255);
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CustomLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &:hover {
    color: #fff;
  }
`;
