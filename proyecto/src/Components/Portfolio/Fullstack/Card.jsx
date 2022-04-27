import React from 'react';
import "./Card.css";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div id='card' className="card">
      <div id="row" className="row">
        <button onClick={onClose} id="botoncerrar" className="botoncerrar">X</button>
      </div>
      <div id="card-body" className="card-body">
        <h5 id="h1card" className="h1card">{name}</h5>
        <div className="row">
          <div id="col-sm-4" className="col-sm-4">
            <p id="p" className="p">MÍNIMA </p>
            <p id="p3" className="p1"> {min}°</p>
          </div>
          <div id="col-sm-41" className="col-sm-4">
            <p id="p2" className="p">MÁXIMA</p>
            <p id="p1" className="p1">{max}°</p>
          </div>
          <div id="col-sm-4" className="col-sm-4 col-md-4 col-lg-4">
            <img id="img" className="img" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
