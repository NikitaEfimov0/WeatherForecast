import {CITY} from "../../interfaces/searchInterfaces";
import getWeatherActions from "./getWeatherActions";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const WEATHER_API_KEY = "2ab6eb761ae66ffc39e2ca459cc44eb1";
const IP_GEO_API_KEY = "3f2196e21b9b497aad86956569f9f07e"
const cnt = 5
export const getWeatherForCurrentCity = (city:CITY) =>{

    return function(dispatch:any) {
        const params = "current"
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${WEATHER_API_KEY}&units=metric`)
            .then(response => {
                response.json().then(jsonResult => {
                    dispatch(getWeatherActions.getWeatherForCurrentCity(jsonResult))
                })
            })


        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.coord.lat}&lon=${city.coord.lon}&cnt=${cnt}&appid=${WEATHER_API_KEY}&units=metric`)
            .then(response =>{
                response.json().then(jsonResult =>{
                    dispatch(getWeatherActions.getForecastForCurrentCity(jsonResult))
                })
            })
    }
}

export const getDefaultWeatherViaIP = () =>{

    return function(dispatch:any){
        fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${IP_GEO_API_KEY}`)
            .then(response => response.json())
            .then(result => {
                const city:CITY = {
                    id: result.city_geoname_id,
                    name:result.city,
                    state: result.region_iso_code,
                    country: result.country_code,
                    coord:{
                        lon: result.longitude,
                        lat: result.latitude
                    }
                }
                dispatch(getWeatherForCurrentCity(city))


            })
            .catch(error=>{
                console.log(`***${error}***`)
            })



    }

}

