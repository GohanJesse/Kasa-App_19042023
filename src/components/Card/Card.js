import React from 'react'
import Styles from "./Card.module.css"

export default function Card() {

  return (
    <div className={Styles.card}>
        <p>Titre de la location</p>
    </div>
  )
}