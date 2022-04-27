import { React, useState } from 'react';
import './Fullstack.css';
import Search from './Nav'
import Cards from './Cards'
import Nav from '../../Nav/Nav'
import "./Card.css";




export function Fullstack() {





    const [cities, setCities] = useState([]);

    function onClose(id) {
        setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

    function onSearch(ciudad) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${'877b332e1fe0334e07752c7013eefddb'}&units=metric`)
            .then(r => r.json())
            .then((recurso) => {
                if (recurso.main !== undefined) {
                    const ciudad = {
                        min: Math.round(recurso.main.temp_min),
                        max: Math.round(recurso.main.temp_max),
                        img: recurso.weather[0].icon,
                        id: recurso.id,
                        wind: recurso.wind.speed,
                        temp: recurso.main.temp,
                        name: recurso.name,
                        weather: recurso.weather[0].main,
                        clouds: recurso.clouds.all,
                        latitud: recurso.coord.lat,
                        longitud: recurso.coord.lon
                    };
                    setCities(oldCities => [...oldCities, ciudad]);
                } else {
                    alert("Ciudad no encontrada");
                }
            });

    }


    function configurarMl() {
        document.getElementById("p").className = "pml";
        document.getElementById("h1card").className = "h1cardml";
        document.getElementById("card").className = "cardml";
        document.getElementById("row").className = "rowml";
        document.getElementById("card-body").className = "card-bodyml";
        document.getElementById("row").className = "rowml";
        document.getElementById("col-sm-4").className = "col-sm-4ml";
        document.getElementById("col-sm-41").className = "col-sm-4ml";
        document.getElementById("p1").className = "p1ml";
        document.getElementById("p2").className = "pml";
        document.getElementById("p3").className = "p1ml";
        document.getElementById("botoncerrar").className = "botoncerrarml";
        document.getElementById("img").className = "imgml";
        document.getElementById("fullstack_fullstack").className = "fullstack_fullstackml";
        document.getElementById("description1").className = "description1ml";
      
        document.getElementById("nav").className ="navml"
        document.getElementById("nav_h2").className ="nav_h2ml"
        document.getElementById("nav_contacto").className ="nav_contactoml"
        document.getElementById("nav_portfolio").className ="nav_portfolioml"
        document.getElementById("profesion").className ="profesionml"
        document.getElementById("contenedor_titulo").className ="contenedor_tituloml"
        document.getElementById("botonagregar").className ="botonagregarml"
    }

    return (

        <div id="fullstack_fullstack" className="fullstack_fullstack">


            <Nav />
            <h3 id="description1" className="description1">Juguemos un poco!!!
                <br></br>
                Para mostrarte mis habilidades,
                <br></br>
                agrega tu ciudad favorita <br></br> y luego cambiaremos el estilo de la tarjeta.

            </h3>
            <Search onSearch={onSearch} />
            <div className="estilostarjetas">
                <button id='boton_estilo_ml' className="boton_estilo_ml" onClick={configurarMl}>Mercado Libre</button>
                {/* <button id='spotify' className="estilos">spotify</button>
                <button id='facebook' className="estilos">facebook</button>
                <button id='youtube' className="estilos">youtube</button> */}
            </div>
            <Cards cities={cities} onClose={onClose} />

        </div>
    )
}

export default Fullstack;