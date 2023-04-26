import {applyMiddleware , combineReducers , createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {searchReducer} from "./search/searchReducers";
import {weatherReducer} from "./getWeather/getWeatherReducers";

const rootReducer = combineReducers({
    search: searchReducer,
    weather: weatherReducer
})

export const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
