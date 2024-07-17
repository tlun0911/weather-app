import axios from "axios";

const API_KEY = "6d5104716cb14ee6b7c210211241607"

export const getWeatherCity = async (city) => {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);

    return response.data;
}


export const getForecastCity = async (city) => {
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`);

    return response.data;
}