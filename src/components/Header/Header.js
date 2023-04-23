import React from 'react'
import "./Header.module.css"
import D_Logo from "./D_Logo_Header.png"
import Navbar from "../Navbar/Navbar"

export default function Header() {
  return (
    <header>
        <img src={D_Logo} />
        <Navbar />
    </header>
  )
}
