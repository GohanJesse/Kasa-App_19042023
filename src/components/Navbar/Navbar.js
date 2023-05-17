import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Styles.navBar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? Styles.activeLink : "")} //isActive fourni avec navLink de react router facilite le changement de style du lien actif
      >
        Accueil
      </NavLink>

      <NavLink
        to="/About"
        className={({ isActive }) => (isActive ? Styles.activeLink : "")} //isActive fourni avec navLink de react router facilite le changement de style du lien actif
      >
        A propos
      </NavLink>
    </nav>
  );
}
