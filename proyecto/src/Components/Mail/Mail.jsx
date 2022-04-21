import emailjs from "emailjs-com";
import React from 'react';
import Nav from '../Nav/Nav.jsx';
import './Mail.css';
import Redes1 from '../Mail/redes-01.png';
import Redes2 from '../Mail/redes-02.png';
import Redes3 from '../Mail/redes-03.png';
import Redes4 from '../Mail/redes-04.png';
import FondoGiant from '../Home/imagenfondoperfil.jpg'
import { Link } from 'react-router-dom';


export function Mail() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_scno5am', 'outlook_template', e.target, 'zdXWuxl_wN1bRGu2V')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="container">
            <Nav />

            <form onSubmit={sendEmail}>
                <div className="container" >
                    <h2 className='h2_Mail'>Trabajemos juntos</h2>

                    <input className="inputs" type="text" placeholder="Nombre" name="name" />

                    <input className="inputs" type="email" placeholder="Email" name="email" />

                    <textarea className="input_textarea" id="" cols="30" rows="8" placeholder="Escribe aquí tu propuesta" name="message"></textarea>

                    <input className="button" type="submit" value="ENVIAR"></input>

                </div>
            </form>

            <div className="contenedor_redes">


                <div className="red">
                    <a href="https://ar.linkedin.com/in/gianfranco-gobbi-53aa72112">
                        <img src={FondoGiant} className="FondoGiant" alt="Fondo" />
                        <img src={Redes1} alt="Redes" className="Redes" />
                    </a>
                </div>


                <div className="red">
                <a href="https://wa.me/5492613673544">
                    <img src={FondoGiant} className="FondoGiant" alt="Fondo" />
                    <img src={Redes2} alt="Redes" className="Redes" />
                    </a>
                </div>

                <div className="red">
                <a href="https://www.behance.net/giiangobbi">
                    <img src={FondoGiant} className="FondoGiant" alt="Fondo" />
                    <img src={Redes3} alt="Redes" className="Redes" />
                    </a>
                </div>

                <div className="red">
                <a href="https://www.instagram.com/giangobbi_/">
                    <img src={FondoGiant} className="FondoGiant" alt="Fondo" />
                    <img src={Redes4} alt="Redes" className="Redes" />
                    </a>
                </div>


            </div>

        </div>
    )
}

export default Mail;