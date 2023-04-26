import {CITY} from "../../interfaces/searchInterfaces";
import searchActions from "./searchActions";
import searchTypes from "./searchTypes";

const cityList:CITY[] = []

const defaultState = {
    cityList: cityList,
}

export const searchReducer = (state = defaultState, action:any)=>{
    switch (action.type){
        case searchTypes.SEARCH:
            return {...state, cityList: [...action.payload]}
        case searchTypes.CITIES_LIST:
            return {...state, cityList: action.payload}
        default:
            return state
    }
}
