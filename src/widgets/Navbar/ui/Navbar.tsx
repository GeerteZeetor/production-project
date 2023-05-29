import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={'/'}
          className={classNames(cls.mainLink)}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
          О Сайте
        </AppLink>
      </div>
    </div>
  );
};
