import React from 'react';
import './Cv.css';
import Nav from '../Nav/Nav.jsx';
import imgcv from '../Cv/CV.jpg'

export function Cv() {
    return (
        <div>
            <Nav />
            <div className="Cv">


                <object
                    data={require('../Cv/CV.pdf')}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                >
                    <br />
                    <a className='avisocv' href={require('../Cv/CV.pdf')} id="enlaceDescargarPdf"
                        download="GianfrancoGobbi.pdf">
                        <h4 className='h4cv'>Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo
                        </h4>
                        <img className='imgCV' src={imgcv} alt='CV'>
                        </img>
                    </a>
                </object>

            </div>
        </div>
    )

}

export default Cv;