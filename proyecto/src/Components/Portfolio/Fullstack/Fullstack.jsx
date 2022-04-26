import { React, useState } from 'react';
import './Fullstack.css';
import Search from './Nav'
import Cards from './Cards'
import Nav from '../../Nav/Nav'

export function Fullstack() {

    const [cities, setCities] = useState([]);

    function onClose(id) {
        setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

    function onSearch(ciudad) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${'877b332e1fe0334e07752c7013eefddb'}&units=metric`)
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

    return (
        <div className="fullstack_fullstack">
            <Nav />
            <h3 className="description1">Juguemos un poco!!!
            <br></br>
            Para mostrarte mis habilidades,
            agrega tus ciudades favoritas y luego cambiaremos el estilo de las tarjetas.
              
            </h3>
            <Search onSearch={onSearch} />
            <Cards cities={cities} onClose={onClose} />

        </div>
    )
}

export default Fullstack;