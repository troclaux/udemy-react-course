import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <button className="botaoNavbar">Banco de dados</button>
            <button className="botaoNavbar">Administração</button>
            <button className="botaoNavbar">Perfil</button>
        </div>
    )
}
