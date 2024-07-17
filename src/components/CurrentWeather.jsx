import React from "react";

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

//   const currentLocation = weather.location.name;

//   const refreshWeather = () => {
//     handleSearch(currentLocation);
//   };

  return (
    <div
      id="current-weather-card"
      className="w-full h-max p-4 border-2 rounded-lg border-indigo-500
    bg-indigo-200"
    >
      <div className="flex flex-col space-y-4 justify-center items-center">
        <h2 className="text-xl font-bold">
          Current Weather for {weather.location.name}, {weather.location.region}
        </h2>
        <div className="grid grid-cols-2 self-start w-full">
          <div className="flex flex-col space-y-4 justify-items-start">
            <p className="text-lg">
              Temperature: {weather.current.temp_f} &deg;
            </p>
            <p className="text-lg">
              Feels Like: {weather.current.feelslike_f} &deg;
            </p>
            <p className="text-lg">Humidity: {weather.current.humidity} %</p>
            <p className="text-lg">Wind: {weather.current.wind_mph}{" mph "}{weather.current.wind_dir}</p>
            <p className="text-lg">UV Index: {weather.current.uv}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
              id="weather-icon"
              className="w-36 h-36"
            />
            <p className="text-lg">{weather.current.condition.text}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CurrentWeather;
