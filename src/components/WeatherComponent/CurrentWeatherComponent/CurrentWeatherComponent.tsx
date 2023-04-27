import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {CircularProgress, Typography} from "@material-ui/core";
import {useStyles} from "./CurrentWeatherComponentStyle";
import AdditionalInfoBoxComponent from "./AdditionalInfoBoxComponent/AdditionalInfoBoxComponent";


export default function CurrentWeatherComponent(){

    const currentWeather = useSelector((state:any) => state.weather.weather)
    const currentCity = useSelector((state:any) => state.weather.city)


    const [weatherIcon, setWeatherIcon] = useState<any>("")
    const [date, setDate] = useState(0)
    const [showPreloader, setShowPreloader] = useState(false);

    const classes = useStyles()

    useEffect(()=>{
        if(currentWeather.weather) {
            setWeatherIcon(`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`)
            setDate(currentWeather.dt*1000+(currentWeather.timezone*1000))

        }
        console.log(currentWeather.dt)
    }, [currentWeather])

    useEffect(()=>{
        console.log(currentCity.city)
        if(currentCity.city)
            setShowPreloader(true)
        else{
            setShowPreloader(false)
        }
    }, [currentCity])


    if(currentWeather.weather) {


        return <div className={classes.allCurrentWeatherInfo}>

                <div className={classes.currentWeatherContainer}>
                    <div className={classes.mainWeatherDataContainer}>
                        <span>{currentWeather.name}</span>
                        <span>{(new Date(date)).toDateString()}</span>
                    </div>

                        <div className={classes.containerWithIcon}>
                            {weatherIcon!==""?<img className={classes.weatherIcon} alt={"icon"} src={weatherIcon}/>:<CircularProgress/>}
                            <div className={classes.weatherInfo}>
                                <span className={"mainTemperature"}>{Math.floor(currentWeather.main.temp)}</span>
                                <span className={"weatherType"}>{currentWeather.weather[0].main}</span>
                                <span className={"minMaxTemperature"}>{`${Math.floor(currentWeather.main.temp_min)} / ${Math.floor(currentWeather.main.temp_max)}`}</span>
                            </div>
                        </div>
                </div>

                <div className={classes.additionalInfo}>
                    <AdditionalInfoBoxComponent>{{name:"Feels like", value: Math.floor(currentWeather.main.feels_like)}}</AdditionalInfoBoxComponent>
                    <AdditionalInfoBoxComponent>{{name: "Humidity", value: currentWeather.main.humidity}}</AdditionalInfoBoxComponent>
                    <AdditionalInfoBoxComponent>{{name: "Pressure", value: currentWeather.main.pressure}}</AdditionalInfoBoxComponent>
                </div>
        </div>
    }
    else{
        return null
    }
}
