import React from "react";

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  return (
    <div
      id="current-weather-card"
      className="w-full h-full p-4 border-2 rounded-lg border-indigo-500
    bg-indigo-200"
    >
      <div className="flex flex-col space-y-4 justify-center items-center">
        <h2 className="text-xl font-bold">
          Current Weather for {weather.location.name}, {weather.location.region}
        </h2>
        <div className="flex flex-col space-y-4 self-start justify-items-start">
          <p className="text-lg">Temperature: {weather.current.temp_f} &deg;</p>
          <p className="text-lg">Feels Like: {weather.current.feelslike_f} &deg;</p>
          <p className="text-lg">Humidity: {weather.current.humidity} %</p>
          <p className="text-lg">Wind: {weather.current.wind_mph} mph</p>
          <p className="text-lg">UV Index: {weather.current.uv}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
