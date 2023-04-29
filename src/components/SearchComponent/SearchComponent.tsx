import SearchIcon from '@material-ui/icons/Search';
import React, {useCallback, useEffect, useRef, useState} from "react";
import { useStyles } from "./SearchComponentStyle";
import {useDispatch, useSelector} from "react-redux";
import {getListOfCitiesByName} from "../../store/search/searchOperations";
import HelpElement from "./helpElement/helpElement";
import {CITY} from "../../interfaces/searchInterfaces";
import {CircularProgress, debounce} from "@material-ui/core";
import {useDebounce} from "../../utils/Debounce";
import {getWeatherForCurrentCity} from "../../store/getWeather/getWeatherOperations";
import {Simulate} from "react-dom/test-utils";
import keyDown = Simulate.keyDown;
import {setCurrentCity} from "../../store/getWeather/getWeatherActions";
import ClearIcon from '@material-ui/icons/Clear';




export default function SearchComponent(){
    const classes = useStyles();
    const dispatch = useDispatch()
    const cities:CITY[]= useSelector((state:any) => state.search.cityList.cities)
    const currentCity:CITY = useSelector((state:any) => state.weather.city.city)
    const [isLoading, setIsLoading] = useState(false)
    const [inputPrompts, setInputPrompts] = useState("")
    const [needToShow, setNeedToShow] = useState(true)

    const timeoutId = useRef<any>(0)
    const timerForDeactivatingLoading = useRef<any>(0)
    const wrapperRef = useRef(null);


    function useOutsideAlerter(ref:any) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event:any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setNeedToShow(false)
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useOutsideAlerter(wrapperRef);
    useEffect(()=>{




        clearTimeout(timeoutId.current)
        if(!isLoading) {
            setIsLoading(true);
        }
        if(!needToShow)
            setNeedToShow(true)

        timeoutId.current = setTimeout(()=>{
            dispatch(getListOfCitiesByName(inputPrompts))

        }, 250)

    }, [inputPrompts])

    useEffect(()=>{
        setIsLoading(false)
        console.log("***CITIES***", cities)
        if(cities) {
            console.log(cities.length, currentCity.name === cities[0].name);
            if (cities.length === 1 && currentCity.name === cities[0].name && cities[0].name === inputPrompts) {
                console.log(currentCity, cities[0])
                setNeedToShow(false)
            }
        }
    }, [cities])

    useEffect(()=>{
        console.log("***CURRENT CITY: ",currentCity, "***")
        if(currentCity) {
            console.log("in if condition!")
            dispatch(getWeatherForCurrentCity(currentCity))
            setInputPrompts(currentCity.name)
            setNeedToShow(false)
            setIsLoading(false)
        }
    }, [currentCity])


    const handleKeyDown = (event:any) =>{

        if(event.key === "Enter"){
            dispatch(setCurrentCity(cities[0]))
            setInputPrompts(cities[0].name)
            setNeedToShow(false)
        }

    }

    return<div className={classes.container}>
    <div className={classes.searchBox}>

        <div className = {classes.inputContainer}>

            <input type={"text"} required={true} placeholder={"ex. Moscow"} className={classes.cityInput} value={inputPrompts} onChange={(event)=>{
                setInputPrompts(event.target.value)
            }} onKeyDown={handleKeyDown}>

            </input>
            {inputPrompts !== "" ? <ClearIcon style = {{cursor:"pointer"}} color={"primary"} fontSize={"small"} onClick={()=>setInputPrompts("")}/> :
                <SearchIcon color={"primary"} fontSize={"small"}/>
            }
        </div>

    </div>
        {isLoading?<CircularProgress color="primary" className = {classes.circularProgress} size={30}/>:
            <div className = {classes.inputHelp} ref={wrapperRef}>
                {inputPrompts!=="" && needToShow && cities?cities.map((city:CITY)=>(
                    <HelpElement key={city.id}>{{value: city}}</HelpElement>
                )):null}
            </div>}

    </div>
}
