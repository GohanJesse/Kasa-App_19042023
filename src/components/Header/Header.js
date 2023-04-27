import React from 'react'
import Styles from "./Header.module.css"
import D_Logo from "./D_Logo_Header.png"
import Navbar from "../Navbar/Navbar"

export default function Header() {
  return (
    <header className={Styles.header}>
        <img className={Styles.logoHeader} src={D_Logo} alt='logo Kasa'/>
        <Navbar />
    </header>
  )
}
