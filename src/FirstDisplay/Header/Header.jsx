import React from 'react';
import s from './header.module.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';

export default function Header() {
  return (
    <header className={s.Header}>
      <a href="tel:+79811924115">+7 (981) 192-41-15</a>
      <BurgerMenu />
    </header>
  );
}
