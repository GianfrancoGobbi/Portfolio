import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


export function Nav() {
    return (
        <div className="nav" id="nav">
            <Link to="/">
                <div id="contenedor_titulo" className="contenedor_titulo">
                    <h2 id='nav_h2' className="nav_h2">GIANFRANCO GOBBI</h2>
                    <div id="profesion" className="profesion">Graphic Designer & Full Stack Developer</div>
                </div>
            </Link>

            <Link to="/Portfolio">
            <div id="nav_portfolio" className="nav_portfolio">PORTFOLIO</div>
            </Link>

            <Link to="/Mail">
                <div  id="nav_contacto" className="nav_contacto">CONTACTO</div>
            </Link>

        </div>
    )
}

export default Nav;