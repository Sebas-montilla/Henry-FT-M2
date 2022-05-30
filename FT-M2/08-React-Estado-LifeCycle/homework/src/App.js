import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";

const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIKEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          const city = {
            id: data.id,
            name: data.name,
            min: data.main.temp_min,
            max: data.main.temp_max,
            img: data.weather[0].icon,
          };
          if (cities.find((c) => c.id === city.id)) {
            alert("La ciudad ya se encuentra");
          } else {
            setCities((oldState) => [...oldState, city]);
          }
        } else {
          alert("La ciudad que buscas no existe");
        }
      });
  }

  function handleOnClose (id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id))
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={handleOnClose} />
    </div>
  );
}
