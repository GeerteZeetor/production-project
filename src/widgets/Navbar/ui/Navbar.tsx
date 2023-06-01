import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={classNames(cls.links)}>
      <AppLink
        theme={AppLinkTheme.PRIMARY}
        to="/"
        className={classNames(cls.mainLink)}
      >
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
        О Сайте
      </AppLink>
    </div>
  </div>
);
