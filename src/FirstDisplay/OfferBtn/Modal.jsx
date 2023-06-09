import React, { useRef } from 'react';
import s from './Modal.module.scss';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';

export default function Modal({ modalActive, setModalActive }) {
  const closeModal = () => {
    setModalActive(false);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ywzrgdm', 'template_vc2zrhb', form.current, 'LAsrp2TffzpdiOoMN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={modalActive ? s.modal + ' ' + s.active : s.modal} onClick={closeModal}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        testContent
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
