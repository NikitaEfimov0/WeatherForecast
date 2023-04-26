import {useDispatch} from "react-redux";
import {CITY} from "../../../interfaces/searchInterfaces";
import {useStyles} from "./helpElementStyle";
import getWeatherTypes from "../../../store/getWeather/getWeatherTypes";
import {setCurrentCity} from "../../../store/getWeather/getWeatherActions";

export default function HelpElement(props:{children:{value: CITY}}){

    const dispatcher = useDispatch()
    const classes = useStyles()

    const handleCLick = () =>{
        dispatcher(setCurrentCity(props.children.value))
    }


    return <div className={classes.elem} onClick={handleCLick}>
        <div>{props.children.value.name}</div>

        {props.children.value.country}
    </div>
}
