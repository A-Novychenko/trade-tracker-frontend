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
import { useLang } from 'hooks';

export const AdminDashboard = () => {
  const { defaultLang } = useLang();

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
          {defaultLang ? 'Меню' : 'Dashboard'}
        </CustomLink>
        <CustomLink to="users" style={{ color: '#fff' }}>
          {defaultLang ? 'Пользователи' : 'Users'}
        </CustomLink>
        <CustomLink to="transactions" style={{ color: '#fff' }}>
          {defaultLang ? 'Транзакции' : 'Transactions'}
        </CustomLink>
        <CustomLink to="archived-users" style={{ color: '#fff' }}>
          {defaultLang ? 'Архив пользователей' : 'Archived users'}
        </CustomLink>
      </Sidebar>
      <div style={{ flex: 1, padding: '20px', width: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
};
