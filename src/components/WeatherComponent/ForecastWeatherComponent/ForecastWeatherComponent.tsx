import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {CircularProgress} from "@material-ui/core";
import ForecastElementComponent from "./ForecastElementComponent/ForecastElementComponent";
import {useStyles} from "./ForecastWeatherComponentStyle";

export default function ForecastWeatherComponent(){


    const forecast = useSelector((state:any)=>state.weather.forecast);

    const currentCity = useSelector((state:any) => state.weather.city)

    const classes = useStyles()

    const [forecastExists, setForecastExists] = useState(false);
    const [showPreloader, setShowPreloader] = useState(false)

    useEffect(()=>{
        if(forecast.cod){
            setForecastExists(true)
        }
        else{
            setForecastExists(false)
        }
    }, [forecast])

    useEffect(()=>{
        if(currentCity.city){
            setShowPreloader(true)
        }
        else{
            setShowPreloader(false)
        }
    }, [currentCity])

    return  (showPreloader?
                (forecastExists?<div className={classes.forecastContainer}>

                <span className={classes.spanInfo}>
                    HOURLY FORECAST
                </span>

                <div className={classes.forecastInfoContainer}>
                    {forecast.list.map((fElem:any, index:number)=>(
                        <ForecastElementComponent key={index}>{{
                            date: fElem.dt_txt,
                            icon: fElem.weather[0].icon,
                            min: fElem.main.temp_min,
                            max: fElem.main.temp_max}}</ForecastElementComponent>
                    ))}
                </div>

                </div>:<CircularProgress/>):null)
}
