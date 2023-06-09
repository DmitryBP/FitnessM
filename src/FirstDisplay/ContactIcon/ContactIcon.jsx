import React from 'react'
import telega from './img/telega.svg'
import instagram from './img/instagram.svg'
import mapPin from './img/map-pin.svg'
import s from './ContactIcon.module.scss'

export default function ContactIcon() {
  return (
    <div className={s.contactIconWrapper}>
      <img src={telega} alt="Telega" />
      <img src={instagram} alt="instagram" />
      <img src={mapPin} alt="map-pin" />
    </div>
  )
}
