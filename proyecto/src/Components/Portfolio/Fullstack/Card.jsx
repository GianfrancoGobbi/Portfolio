import React from 'react';
import './Card.css';

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="botoncerrar">X</button>
      </div>
      <div className="card-body">
        <h5 className="h1card">{name}</h5>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p className="p">Min </p>
            <p className="p1"> {min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p className="p">Max</p>
            <p className="p1">{max}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img className="img" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
