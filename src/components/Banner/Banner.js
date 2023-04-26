import React from 'react'
import Styles from "./Banner.module.css"


export default function Banner({ backgroundImage, text }) {
  return (
    <div className={Styles.banner} style={{ backgroundImage: `url(${backgroundImage})` }}>
        {text && <p className={Styles.tag}>{text}</p>}
    </div>
  )
}
