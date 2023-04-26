import React from 'react';
import './App.css';
import SearchComponent from "./components/SearchComponent/SearchComponent";
import {ThemeProvider} from "@material-ui/core";
import {mainTheme} from "./themes/mainTheme";
import WeatherComponent from "./components/WeatherComponent/WeatherComponent";

function App() {

  return (
      <ThemeProvider theme={mainTheme}>
        <div className="App">
            <SearchComponent/>
            <WeatherComponent/>
        </div>
      </ThemeProvider>

  );
}

export default App;
