import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react';

export enum ThemeBottom {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeBottom;
}

export const Button: FC<ButtonProps> = (props): JSX.Element => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [props.className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
