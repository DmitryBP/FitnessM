import React from 'react';
import s from './FerstDispley.module.scss';
import Header from './Header/Header';
import ContactIcon from './ContactIcon/ContactIcon';
import OfferBtn from './OfferBtn/OfferBtn';

export default function FerstDispley() {
  return (
    <div className={s.Container}>
      <Header />
      <h1>Fitness-M</h1>
      <h2>Сегодня усилие завтра результат</h2>
      <p>Персональные и групповые тренировки для придания телу привлекательной формы</p>
      <OfferBtn />
      <ContactIcon />
    </div>
  );
}
