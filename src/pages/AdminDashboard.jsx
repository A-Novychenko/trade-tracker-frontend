import { Link, Outlet } from 'react-router-dom';

import { RiMenuUnfold3Fill } from 'react-icons/ri';
import {
  Sidebar,
  BurgerBtn,
  CloseBtn,
  CustomLink,
} from './AdminDashboard.styled';
import { useState } from 'react';

import { IoMdClose } from 'react-icons/io';

export const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div style={{ display: 'flex' }}>
      <BurgerBtn onClick={() => toggleSidebar()}>
        <RiMenuUnfold3Fill size={24} color="#fff" />
      </BurgerBtn>
      <Sidebar isOpen={isOpen}>
        <CloseBtn type="button" onClick={() => toggleSidebar()}>
          <IoMdClose size={24} />
        </CloseBtn>
        <CustomLink to="adminpanel" style={{ color: '#fff' }}>
          Dashboard
        </CustomLink>
        <CustomLink to="users" style={{ color: '#fff' }}>
          Users
        </CustomLink>
        <CustomLink to="transactions" style={{ color: '#fff' }}>
          Transaction
        </CustomLink>
      </Sidebar>
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};
