import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather';
import React, { useState } from "react";
import { getWeatherCity, getForecastCity } from "./api";

function App () {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (search) => {
    const weather = await getWeatherCity(search);
    console.log(weather);
    const forecast = await getForecastCity(search);
    setWeather(weather);
    setForecast(forecast);
}

  return (
    <div className='bg-slate-200 h-screen w-screen'>
      <Header />
      <SearchBar onSearch={handleSearch}/>
      <div className="grid grid-cols-12 mt-6">
        <div className="col-start-2 col-span-4">
          <CurrentWeather weather={weather} />
        </div>

      </div>
      
    </div>
  )
}

export default App
