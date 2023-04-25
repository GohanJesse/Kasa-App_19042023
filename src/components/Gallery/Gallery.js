import React from 'react'
import Styles from "./Gallery.module.css"
import Card from "../Card/Card"


export default function Gallery() {

  return (
    <div className={Styles.gallery}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

