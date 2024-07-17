import React from "react";

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  console.log(forecast.forecast);

  return (
    <div
      id="forecast-container"
      className="w-full h-max p-4 border-2 rounded-lg border-indigo-500
    bg-indigo-200"
    >
      <h2 className="text-xl font-bold text-center mb-2">5 Day Forecast</h2>
        <div className="grid grid-flow-row lg:grid-cols-3 lg:grid-row-2 gap-2">
            {forecast.forecast.forecastday.map((day) => (
                <div
                    key={day.date}
                    className="flex flex-col w-full lg:w-48 h-auto space-y-2 justify-center items-center
                    p-2 border-2 rounded-lg border-indigo-500 bg-indigo-300"
                >
                    <h3 className="text-lg font-bold">{day.date}</h3>
                    <img
                        src={day.day.condition.icon}
                        alt={day.day.condition.text}
                        className="w-20 h-20"
                    />
                    <p className="text-lg">{day.day.condition.text}</p>
                    <p className="text-lg">High: {day.day.maxtemp_f} &deg;</p>
                    <p className="text-lg">Low: {day.day.mintemp_f} &deg;</p>
                </div>
            ))}

            </div>
    </div>
  );
};

export default Forecast;
