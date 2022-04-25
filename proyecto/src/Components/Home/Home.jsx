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



export function Home() {

    const data = [
        { value: 'jQuery', count: 25 },
        { value: 'Illustrator', count: 18 },
        { value: 'JavaScript', count: 38 },
        { value: 'REACT', count: 30 },
        { value: 'Nodejs', count: 28 },
        { value: 'Photoshop', count: 25 },
        { value: 'HTML5', count: 33 },
        { value: 'CSS', count: 20 },
        { value: '3D max', count: 22 },
        { value: 'APPsheet', count: 7 },
        { value: 'Premiere', count: 25 },
      ]

      const customRenderer = (tag, size, color) => (
        <span
          key={tag.value}
          style={{
            animation: 'blinker 6s linear infinite',
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${size / 2}em`,
            border: `2px solid #00000000`,
            margin: '8px',
            padding: '9px',
            display: 'inline-block',
            color: 'white',
            borderRadius: '15px', 
      boxShadow: `0px 0px 20px ${color}`,
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

            {/* <img className='imgprueba' src={'https://www.xtrafondos.com/wallpapers/resoluciones/19/explosion-polvo-y-humo-de-colores_3840x2160_3008.jpg'} alt='Explosion'></img> */}

            <Parallax blur={10} bgImage={'https://www.xtrafondos.com/wallpapers/resoluciones/19/explosion-polvo-y-humo-de-colores_3840x2160_3008.jpg'} bgImageAlt="the cat" strength={800}>
                <div className="separador">

                </div>
            </Parallax>

            <div className="contenedortecnologias">
                <h2 className='h2t'>Tecnologías incorporadas</h2>
                <ul className='lista_tecnologias'>
                <TagCloud className='tagcloud' tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
                </ul>
            </div>

          



            <Parallax blur={10} bgImage={'https://www.xtrafondos.com/wallpapers/resoluciones/19/explosion-polvo-y-humo-de-colores_3840x2160_3008.jpg'} bgImageAlt="the cat" strength={800}>

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


