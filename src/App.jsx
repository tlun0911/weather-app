import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import React, { useState } from "react";
import { getWeatherCity, getForecastCity } from "./api";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (search) => {
    const weather = await getWeatherCity(search);
    const forecast = await getForecastCity(search);
    setWeather(weather);
    setForecast(forecast);
  };

  return (
    <div className="bg-slate-200 min-h-lvh w-screen overflow-x-hidden overscroll-x-none">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-flow-row lg:grid-rows-1 mx-2 lg:grid-cols-12 mt-6 gap-y-2 gap-x-2">
        <div className="row-start-1 lg:col-start-2 lg:col-span-4">
          <CurrentWeather weather={weather} />
        </div>
        <div className="row-start-2 lg:row-start-1 lg:col-start-6 lg:col-span-6">
          <Forecast forecast={forecast} />
        </div>
      </div>
    </div>
  );
}

export default App;
