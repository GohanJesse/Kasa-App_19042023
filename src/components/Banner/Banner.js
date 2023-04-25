import React from 'react'
import Styles from "./Banner.module.css"


export default function Banner() {
  return (
    <div className={Styles.bannerHome}>
        <h2 className={Styles.tag}>Chez vous, partout ailleurs</h2>
    </div>
  )
}
