import React from 'react';
import './Nav.css';

export function Nav() {
    return (
        <div className="nav">
            <div className="contenedor_titulo">
                <h2 className="nav_h2">GIANFRANCO GOBBI</h2>
                <div className="profesion">Graphic Designer & Full Stack Developer</div>
            </div>
            <div className="nav_portfolio">PORTFOLIO</div>
            <div className="nav_contacto">CONTACTO</div>

        </div>
    )
}

export default Nav;