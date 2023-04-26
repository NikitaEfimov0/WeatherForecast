import {WEATHER_INFO} from "../../interfaces/weatherInterfaces";
import {CITY} from "../../interfaces/searchInterfaces";
import getWeatherTypes from "./getWeatherTypes";

const weather:any = {}
const city:any = {}
const forecast:any[] = []

const defaultState = {
    weather: weather,
    city:city,
    forecast:forecast
}

export const weatherReducer = (state = defaultState, action:any)=>{
    switch (action.type){
        case getWeatherTypes.SET_CURRENT_CITY:
            return {...state, city: action.payload}
        case getWeatherTypes.GET_WEATHER_FOR_CURRENT_CITY:
            return {...state, weather: action.payload}
        case getWeatherTypes.GET_WEATHER_FORECAST_FOR_CURRENT_CITY:
            return {...state, forecast: action.payload}
        default:
            return state
    }
}
