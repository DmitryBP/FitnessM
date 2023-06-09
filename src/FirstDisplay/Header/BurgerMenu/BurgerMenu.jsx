import React, { useState } from 'react';
import s from './BurgerMenu.module.scss';
import burger from '../Burger.svg';

export default function BurgerMenu() {
  const [isMenuActive, cheingMenuActive] = useState(false);
  const showMenu = () => {
    cheingMenuActive(true);
  };
  const closeMenu = () => {
    cheingMenuActive(false);
  };
  return (
    <nav className={s.nav}>
      <img src={burger} alt="burger" onClick={showMenu} />
      <div
        className={isMenuActive ? s.burgerMenu + ' ' + s.active : s.burgerMenu}
        onClick={closeMenu}
      >
        <ul className={s.burgerMenuContant} onClick={(e) => e.stopPropagation()}>
          <li>
            <a href="#">Персональные тренировки</a>
          </li>
          <li>
            <a href="#">Групповые тренировки</a>
          </li>
          <li>
            <a href="#">OnLine тренировки</a>
          </li>
          <li>
            <a href="#">Программа тренировок</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
