import React from 'react';
import './Home.css'
import Nav from '../Nav/Nav.jsx';
import Gian from '../Home/Gian.png'
import FondoGiant from '../Home/imagenfondoperfil.jpg'
import explote from '../Home/explote.jpg'
import huella from '../Home/huella.png'
import { Parallax } from 'react-parallax';


export function Home() {
    return (
        <div className="home">
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
                <img src={Gian} className="imgGian" alt="Gian" />
                <img src={FondoGiant} className="imgFondo" alt="Fondo" />
            </div>

            <h3 className="description">Mi nombre es Gianfranco Gobbi, nací en Argentina.
                Soy diseñador gráfico senior y Full Stack developer junior graduado
                en Henry bootcamp. Actualmente me desarrollo en la sistematización de ventas en línea.
                Me gusta el trabajo en equipo, autodidacta
                y siempre en busca de nuevos desafios para enfrentar.
                <br />
                Mis hobbies son los deportes, la comida y los videojuegos.
            </h3>

            <img className='imgprueba' src={'https://www.xtrafondos.com/wallpapers/resoluciones/19/explosion-polvo-y-humo-de-colores_3840x2160_3008.jpg'} alt='Explosion'></img>

            <Parallax blur={10} bgImage={'https://www.xtrafondos.com/wallpapers/resoluciones/19/explosion-polvo-y-humo-de-colores_3840x2160_3008.jpg'} bgImageAlt="the cat" strength={800}>
                
         

            <div>
                <h2 className='h2t'>Tecnologías incorporadas</h2>
                <ul className='lista_tecnologias'>
                    <li className='tecnologias'>Javascrip</li>
                    <li className='tecnologias'>Html</li>
                    <li className='tecnologias'>CSS</li>
                    <li className='tecnologias'>React</li>
                    <li className='tecnologias'>Redux</li>
                    <li className='tecnologias'>Illustrator</li>
                    <li className='tecnologias'>Photoshop</li>
                    <li className='tecnologias'>3D MAX</li>
                    <li className='tecnologias'>Premiere</li>
                    <li className='tecnologias'>After Effects</li>
                </ul>
            </div>
            </Parallax>
            <img className='imgprueba' src={'https://www.xtrafondos.com/wallpapers/resoluciones/19/explosion-polvo-y-humo-de-colores_3840x2160_3008.jpg'} alt='Explosion' ></img>

        </div>
    )
}

export default Home;


