import React from "react"
import { useNavigate } from "react-router-dom"

export default function Accommodation() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Accommodation</h1>
            <span onClick={() => navigate("/")}>Retourner sur la page d'acceuil</span>    
        </div>
    )
}