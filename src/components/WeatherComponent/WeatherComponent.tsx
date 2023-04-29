import CurrentWeatherComponent from "./CurrentWeatherComponent/CurrentWeatherComponent";
import {useStyles} from "./WeatherComponentStyle";
import ForecastWeatherComponent from "./ForecastWeatherComponent/ForecastWeatherComponent";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {weatherReducer} from "../../store/getWeather/getWeatherReducers";
import getWeatherActions from "../../store/getWeather/getWeatherActions";
import {getDefaultWeatherViaIP} from "../../store/getWeather/getWeatherOperations";

export default function WeatherComponent(){
    const classes = useStyles()

    const city = useSelector((state:any)=> state.weather.city.city)

    const dispatch = useDispatch()

    useEffect(()=>{
        if(!city){
            console.log(`***${city}***`)
            dispatch(getDefaultWeatherViaIP())
        }
    }, [])

    return <div className={classes.weatherContainer}>
        <CurrentWeatherComponent/>
        <ForecastWeatherComponent/>
    </div>
}
