import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import Layout from "./components/Layout";
import SearchBar from "./components/SearchBar.jsx";
import data, { Cairns } from "./data.js";

function App() {
  return (
    <Layout>
      <div className="App">
        <div>
          <Card
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
          />
        </div>
        <div>
          <Cards cities={data} />
        </div>
        <div>
          <SearchBar onSearch={(ciudad) => alert(ciudad)} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
