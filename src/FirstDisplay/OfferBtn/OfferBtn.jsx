import React, { useState } from 'react'
import Modal from './Modal';
import s from './offerBtn.module.scss'

export default function OfferBtn() {
  const [modalActive, setModalActive] = useState(false);
  const openModal = () => setModalActive(true)
  return (
    <div>
      <button className={s.offerBtn} onClick={openModal}>Записаться на бесплатную тренировку</button>
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
    </div>
  )
}
