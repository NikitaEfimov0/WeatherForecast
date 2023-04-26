import searchTypes from "./searchTypes";
import {CITY} from "../../interfaces/searchInterfaces";

const searchCity = ( city:CITY ) => ( {
    type: searchTypes.SEARCH,
    payload: {
        city
    }
});

const getCityList = (cities:CITY[]) =>({
    type: searchTypes.CITIES_LIST,
    payload: {
        cities
    }
})

export default {
    searchCity,
    getCityList
};
