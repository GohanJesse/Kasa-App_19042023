import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.module.css"


export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : ""}>
                Accueil
            </NavLink>

            <NavLink to="/About" className={({ isActive }) => isActive ? "activeLink" : ""}>
                A propos
            </NavLink>
        </nav>
    )
}