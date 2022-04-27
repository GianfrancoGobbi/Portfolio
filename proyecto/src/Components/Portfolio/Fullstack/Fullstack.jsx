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
        document.getElementById("p1").className = "p1ml";
              document.getElementById("botoncerrar").className = "botoncerrarml";
    }

    return (

        <div className="fullstack_fullstack">


            <Nav />
            <h3 className="description1">Juguemos un poco!!!
                <br></br>
                Para mostrarte mis habilidades,
                agrega tus ciudades favoritas y luego cambiaremos el estilo de las tarjetas.

            </h3>
            <Search onSearch={onSearch} />
            <div className="estilostarjetas">
                <button id='ml' className="estilos" onClick={configurarMl}>ML</button>
                <button id='spotify' className="estilos">spotify</button>
                <button id='facebook' className="estilos">facebook</button>
                <button id='youtube' className="estilos">youtube</button>
            </div>
            <Cards cities={cities} onClose={onClose} />

        </div>
    )
}

export default Fullstack;