import { React } from 'react';
import './Home.css'
import Nav from '../Nav/Nav.jsx';
import Gian from '../Home/Gian.png'
import FondoGiant from '../Home/imagenfondoperfil.jpg'
import explote from '../Home/explote.jpg'
import huella from '../Home/huella.png'
import { Parallax } from 'react-parallax';
import Cv from '../Cv/CV.jpg'
import { Link } from 'react-router-dom';
import { TagCloud } from 'react-tagcloud'
import explote1 from '../Home/explote1.jpg'


export function Home() {

    const data = [
        { value: 'jQuery', count: 17 },
        { value: 'Illustrator', count: 20 },
        { value: 'JavaScript', count: 40 },
        { value: 'REACT', count: 40 },
        { value: 'Nodejs', count: 18 },
        { value: 'Express', count: 18},
        { value: 'Photoshop', count: 27 },
        { value: 'HTML5', count: 35},
        { value: 'CSS', count: 40 },
        { value: '3D max', count: 24 },
        { value: 'APPsheet', count: 9},
        { value: 'Premiere', count: 15 },
    ]

    const customRenderer = (tag, size, color) => (
        <span
            key={tag.value}
            style={{
                animation: 'blinker 4s linear infinite',
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${size / 2}em`,
                border: `2px solid #00000000`,
                margin: '8px',
                padding: '9px',
                display: 'inline-block',
                color: 'white',
                borderRadius: '15px',
                boxShadow: `-5px 0px 20px ${color}`,
                fontFamily: 'Helvetica',

            }}
        >
            {tag.value}
        </span>
    )

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
            <div className="contenedor_imagen_description">
                <div className="contenedor_imagenes">
                    <img src={Gian} className="imgGian" alt="Gian" />
                    <img src={FondoGiant} className="imgFondo" alt="Fondo" />
                </div>

                <h3 className="description">Full Stack Developer con formación como Diseñador Gráfico.
Experiencia trabajando con React, Redux, NodeJS, Postgres, etc.
Diseñé una App para logística y distribución comercial, basada
en estrategias de venta, con apoyo en bases de datos.
Actualmente trabajo en Henry como asistente de enseñanza
Full-Stack liderando la integración del grupo
                    <br />
                    Mis hobbies son los deportes, la comida y los videojuegos.
                </h3>
            </div>
            {/* <img className='imgprueba' src={'https://www.xtrafondos.com/wallpapers/resoluciones/19/explosion-polvo-y-humo-de-colores_3840x2160_3008.jpg'} alt='Explosion'></img> */}

            <Parallax blur={10} bgImage={explote1} bgImageAlt="the cat" strength={1000}>
                <div className="separador">

                </div>
            </Parallax>

            <div className="contenedortecnologias">
                <h2 className='h2t'>Tecnologías incorporadas</h2>
                <ul className='lista_tecnologias'>
                    <TagCloud className='tagcloud' tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
                </ul>
            </div>





            <Parallax blur={10} bgImage={explote1} bgImageAlt="the cat" strength={1000}>

                <h4 className='h2c'>CV</h4>

                <div className='contenedorCV'>



                    <Link to="/Cv" className="link">
                        <h4 className='AbrirPDF' id='AbrirPDF'>Abrir en PDF</h4>

                        <img className='imgCV' src={Cv} alt='CV' id='imgCV' />

                    </Link>

                </div>

            </Parallax>


            {/* <img className='imgprueba' src={'https://www.xtrafondos.com/wallpapers/resoluciones/19/explosion-polvo-y-humo-de-colores_3840x2160_3008.jpg'} alt='Explosion' ></img> */}

        </div>
    )
}

export default Home;


