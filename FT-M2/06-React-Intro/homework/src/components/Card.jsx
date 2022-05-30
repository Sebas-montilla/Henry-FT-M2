import React from "react";

export default function Card(props) { // with destructuring ({name, max, min, img, onClose})
  // acá va tu código

  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h4>{props.name}</h4>
      <div>
        <h6>Min</h6>
        <p>{props.min}</p>
      </div>
      <div>
        <h6>Max</h6>
        <p>{props.max}</p>
      </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} />
    </div>
  );
}
