import React from "react"
import { useNavigate } from "react-router-dom"

export default function D_404() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>404</h1>
            <h2>Oups! la page que vous demandez n'existe pas.</h2>
            <span onClick={() => navigate("/")}>Retourner sur la page d'acceuil</span>
        </div>
    )
}