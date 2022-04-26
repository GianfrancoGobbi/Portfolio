import React from 'react';
import './Portfolio.css';
import Nav from '../Nav/Nav.jsx';
import num from '../Portfolio/num.jpg';
import { Link } from 'react-router-dom';


export function Portfolio() {
    return (
        <div className="contenedor_portfolio">
            <Nav />
            <div className='portfolio'>


                <div className="FullStack">
                <h2 className='h2fullStack'>FullStack</h2>
                    <Link to={'/Fullstack'}>
                       
                        <img className='imgfullstack' src={num} alt='Explosion'></img>
                    </Link>
                </div>


                <div className="Design">
                <h2 className='h2fullStack1'>Design</h2>
                    <Link to={'/Design'}>
                       
                        <img className='imgfullstack2' src={'https://www.xtrafondos.com/wallpapers/resoluciones/19/explosion-polvo-y-humo-de-colores_3840x2160_3008.jpg'} alt='Explosion'></img>
                    </Link>
                </div>


            </div>



        </div>
    )
}

export default Portfolio;