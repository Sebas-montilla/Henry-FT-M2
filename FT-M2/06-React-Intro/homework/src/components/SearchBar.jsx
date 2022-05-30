import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder="city..." />
      <button onClick={() => props.onSearch("Buscando...")}>Search</button>
    </div>
  );
}
