import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : ""}>
                acceuil
            </NavLink>

            <NavLink to="/About" className={({ isActive }) => isActive ? "activeLink" : ""}>
                À propos
            </NavLink>
        </nav>
    )
}