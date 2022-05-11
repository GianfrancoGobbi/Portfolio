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

        document.getElementById("nav").className = "navml"
        document.getElementById("nav_h2").className = "nav_h2ml"
        document.getElementById("nav_contacto").className = "nav_contactoml"
        document.getElementById("nav_portfolio").className = "nav_portfolioml"
        document.getElementById("profesion").className = "profesionml"
        document.getElementById("contenedor_titulo").className = "contenedor_tituloml"
        document.getElementById("botonagregar").className = "botonagregarml"
    }

    function configuraryt() {
        document.getElementById("p").className = "pyt";
        document.getElementById("h1card").className = "h1cardyt";
        document.getElementById("card").className = "cardyt";
        document.getElementById("row").className = "rowyt";
        document.getElementById("card-body").className = "card-bodyyt";
        document.getElementById("row").className = "rowyt";
        document.getElementById("col-sm-4").className = "col-sm-4yt";
        document.getElementById("col-sm-41").className = "col-sm-4yt";
        document.getElementById("p1").className = "p1yt";
        document.getElementById("p2").className = "pyt";
        document.getElementById("p3").className = "p1yt";
        document.getElementById("botoncerrar").className = "botoncerraryt";
        document.getElementById("img").className = "imgyt";
        document.getElementById("fullstack_fullstack").className = "fullstack_fullstackyt";
        document.getElementById("description1").className = "description1yt";
    
        document.getElementById("nav").className = "navyt"
        document.getElementById("nav_h2").className = "nav_h2yt"
        document.getElementById("nav_contacto").className = "nav_contactoyt"
        document.getElementById("nav_portfolio").className = "nav_portfolioyt"
        document.getElementById("profesion").className = "profesionyt"
        document.getElementById("contenedor_titulo").className = "contenedor_tituloyt"
        document.getElementById("botonagregar").className = "botonagregaryt"
    }

    return (

        <div id="fullstack_fullstack" className="fullstack_fullstack">


            <Nav />
            <h3 id="description1" className="description1">Juguemos un poco!!!
                <br></br>
                Para mostrarte mis habilidades,
                <br></br>
                agrega tu ciudad favorita <br></br>
                la cual tendrá su clima actual <br></br>
                luego cambia el estilo de la pagina.

            </h3>
            <Search onSearch={onSearch} />
            <div className="estilostarjetas">
                <button id='boton_estilo_ml' className="boton_estilo_ml" onClick={configurarMl}>Estilo Mercado Libre</button>
                <button id='boton_estilo_yt' className="boton_estilo_yt" onClick={configuraryt}>Estilo YouTube</button>
            </div>
            <Cards cities={cities} onClose={onClose} />

        </div>
    )
}

export default Fullstack;