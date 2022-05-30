import React from "react";
import Card from "./Card";

export default function Cards(props) {
  // with destructuring ({cities})
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {props.cities.map((city) => (
        <Card
          key={city.name}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
      ))}
    </div>
  );
}
