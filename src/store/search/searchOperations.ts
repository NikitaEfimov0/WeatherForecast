import {CITY} from "../../interfaces/searchInterfaces";
import searchActions from "./searchActions";

export const getListOfCitiesByName = (name:string)=>{
    return function (dispatch:any) {
        let city_list_json: CITY[] = []
        fetch("./static/cities.json")
            .then(response => {
                return response.json()

            })
            .then(json => {

                city_list_json = Object.assign([], json)
                const pattern = new RegExp(`^\\s*${name}\\w*`);
                dispatch(searchActions.getCityList(city_list_json
                    .filter((city:CITY)=>pattern.test(city.name))
                    .sort((a, b)=>a.name.localeCompare(b.name))
                    .slice(0, 5)
                    .filter((city:CITY, index:number, arr:CITY[]) =>
                        arr.findIndex(t =>
                            t.name === city.name && t.country === city.country)
                        === index)
                ))
            });


    }
}
