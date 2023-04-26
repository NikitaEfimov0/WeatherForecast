import {CITY} from "../../interfaces/searchInterfaces";
import getWeatherTypes from "./getWeatherTypes";

export const setCurrentCity = (city:CITY) => ({
    type: getWeatherTypes.SET_CURRENT_CITY,
    payload:{
        city,
    }
})

export const getWeatherForCurrentCity = (weather:any)=>({
    type: getWeatherTypes.GET_WEATHER_FOR_CURRENT_CITY,
    payload: weather

})

export const getForecastForCurrentCity = (forecast:any[])=>({
    type: getWeatherTypes.GET_WEATHER_FORECAST_FOR_CURRENT_CITY,
    payload: forecast
})

export default {
    setCurrentCity,
    getWeatherForCurrentCity,
    getForecastForCurrentCity
}



