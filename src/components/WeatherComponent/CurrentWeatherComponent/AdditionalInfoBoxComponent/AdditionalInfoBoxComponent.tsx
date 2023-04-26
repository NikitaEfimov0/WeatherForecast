import React from "react";
import {useStyles} from "./AdditionalInfoBoxComponentStyle";

export default function AdditionalInfoBoxComponent(props:{children:{name:string, value:number}}){
    const classes = useStyles()

    return <div className={classes.box}>
        <span>{props.children.name}</span>
        <span>{props.children.value}</span>
    </div>
}
