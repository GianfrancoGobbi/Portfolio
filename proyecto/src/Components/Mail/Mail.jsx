import emailjs from "emailjs-com";
import React from 'react';
import Nav from '../Nav/Nav.jsx';
import './Mail.css';

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

                    <input type="submit" value="Enviar"></input>

                </div>
            </form>

        </div>
    )
}

export default Mail;