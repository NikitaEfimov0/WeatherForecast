import {CITY} from "../../interfaces/searchInterfaces";
import getWeatherActions from "./getWeatherActions";

const API_KEY = "2ab6eb761ae66ffc39e2ca459cc44eb1";
const cnt = 5
export const getWeatherForCurrentCity = (city:CITY) =>{
    console.log("here")
    return function(dispatch:any) {
        const params = "current"
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${API_KEY}&units=metric`)
            .then(response => {
                response.json().then(jsonResult => {
                    dispatch(getWeatherActions.getWeatherForCurrentCity(jsonResult))
                })
            })


        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.coord.lat}&lon=${city.coord.lon}&cnt=${cnt}&appid=${API_KEY}&units=metric`)
            .then(response =>{
                response.json().then(jsonResult =>{
                    console.log(jsonResult)
                    dispatch(getWeatherActions.getForecastForCurrentCity(jsonResult))
                })
            })
    }
}

