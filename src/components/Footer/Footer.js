import React from 'react'
import "./Footer.module.css"
import D_LOGO from "./D_LOGO_Footer.png"

export default function Footer() {
  return (
    <div className='footer'>
        <img className='logo' src={D_LOGO} />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
