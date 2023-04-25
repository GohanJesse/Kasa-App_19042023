import React from 'react'
import Styles from "./Footer.module.css"
import D_LOGO from "./D_LOGO_Footer.png"

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <img src={D_LOGO} alt='logo Kasa'/>
      <p className={Styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
