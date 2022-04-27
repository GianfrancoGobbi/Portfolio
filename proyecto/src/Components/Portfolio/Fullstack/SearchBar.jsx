import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  
  const [city, setCity]=useState("")

  return (
    <form className="search" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className="inputs"
        type="text"
        placeholder="Agrega tu ciudad favorita"
        onChange={e => setCity(e.target.value)}
      />
      <input id="botonagregar" className="button" type="submit" value="Agregar" />
    </form>
  );
}
