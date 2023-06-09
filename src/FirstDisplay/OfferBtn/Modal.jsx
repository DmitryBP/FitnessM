import React from 'react';
import s from './Modal.module.scss';
export default function Modal({ modalActive, setModalActive }) {
  const closeModal = () => {
    setModalActive(false);
  };
  return (
    <div className={modalActive ? s.modal + ' ' + s.active : s.modal} onClick={closeModal}>
      <div className={s.modalContent} onClick={(e)=> e.stopPropagation()}>
        testContent</div>
    </div>
  );
}
