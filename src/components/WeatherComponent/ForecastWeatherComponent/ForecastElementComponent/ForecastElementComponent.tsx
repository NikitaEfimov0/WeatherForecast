import {useStyles} from "./ForecastElementComponentStyle";
import {useEffect, useState} from "react";

export default function ForecastElementComponent(props:{children:{date:string, icon:string, min:number, max:number}}){



    const classes = useStyles()

    const [icon, setIcon] = useState("")
    const [dateInReadableFormat, setDateInReadableFormat] = useState("")

    const checkIfNeedZero = (value:number)=>{
        return (value<10?'0'+value:value)
    }

    useEffect(()=>{

        setIcon(`https://openweathermap.org/img/wn/${props.children.icon}.png`)
        const [day, time] = props.children.date.split(' ')
        const _dateObject = new Date(`${day}T${time}`)
        setDateInReadableFormat(`${checkIfNeedZero(_dateObject.getDate())}.${checkIfNeedZero(_dateObject.getMonth())} ${checkIfNeedZero(_dateObject.getHours())}:${checkIfNeedZero(_dateObject.getMinutes())}`)

    })

    return <div className={classes.forecastBox}>
        <span>{dateInReadableFormat}</span>
        <img src = {icon} alt={""}/>
        <span>{`${props.children.min} / ${props.children.max}`}</span>
    </div>
}
