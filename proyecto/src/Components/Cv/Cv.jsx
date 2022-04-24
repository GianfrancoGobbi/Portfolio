import React from 'react';
import './Cv.css';
import Nav from '../Nav/Nav.jsx';
import imgcv from '../Cv/CV.jpg'

export function Cv() {
    return (
       
        <div className="Cv">
             <Nav />

            <object
                data={require('../Cv/CV.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
            >
                <br />
                <a href={require('../Cv/CV.pdf')} id="enlaceDescargarPdf"
                    download="GianfrancoGobbi.pdf"
                >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo
                  <img className='imgCV' src={imgcv} alt='CV'></img></a>
            </object>

        </div>
    )

}

export default Cv;