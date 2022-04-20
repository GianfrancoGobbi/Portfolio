import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


export function Nav() {
    return (
        <div className="nav">
            <Link to="/">
            <div className="contenedor_titulo">
                <h2 className="nav_h2">GIANFRANCO GOBBI</h2>
                <div className="profesion">Graphic Designer & Full Stack Developer</div>
            </div>
            </Link>
            <div className="nav_portfolio">PORTFOLIO</div>

            <Link to="/Mail">
                <div className="nav_contacto">CONTACTO</div>
            </Link>

        </div>
    )
}

export default Nav;