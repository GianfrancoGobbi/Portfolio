import React from 'react';
import './Home.css'
import Nav from '../Nav/Nav.jsx';
import Gian from '../Home/Gian.png'
import FondoGiant from '../Home/imagenfondoperfil.jpg'
import explote from '../Home/explote.jpg'
import huella from '../Home/huella.png'

export function Home() {
    return (
        <div>
            <div className="contenedorHello">

                <h1 className="h1">Hola, soy</h1>
                <h2 className="h2">GIANFRANCO</h2>
                <h3 className="h3">Graphic Designer</h3>
                <h3 className="h4">Full stack developer</h3>
                <img className="imgcolor" src={explote} alt="explote" />
                <img className="imghuella" src={huella} alt="huella" />
            </div>

            <Nav />
            <div className="contenedor_imagenes">
                <img src={Gian} className="imgGian"></img>
                <img src={FondoGiant} className="imgFondo"></img>
            </div>

            <h3 className="description">Mi nombre es Gianfranco, soy de Argentina.
                Soy diseñador gráfico y Full Stack developer graduado
                en Henry. Me adapto facilmente a los equipos de trabajo, autodidacta
                y en busca de conocer mis límites.</h3>
            <img className='imgprueba' src={'https://www.xtrafondos.com/wallpapers/resoluciones/19/explosion-polvo-y-humo-de-colores_3840x2160_3008.jpg'} ></img>
            <img className='imgprueba' src={'https://www.xtrafondos.com/wallpapers/resoluciones/19/explosion-polvo-y-humo-de-colores_3840x2160_3008.jpg'} ></img>
        </div>
    )
}

export default Home;


