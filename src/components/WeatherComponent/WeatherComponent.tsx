import CurrentWeatherComponent from "./CurrentWeatherComponent/CurrentWeatherComponent";
import {useStyles} from "./WeatherComponentStyle";
import ForecastWeatherComponent from "./ForecastWeatherComponent/ForecastWeatherComponent";

export default function WeatherComponent(){
    const classes = useStyles()

    return <div className={classes.weatherContainer}>
        <CurrentWeatherComponent/>
        <ForecastWeatherComponent/>
    </div>
}
