import {createStyles, makeStyles} from "@material-ui/core";
import {mainTheme} from "../../../themes/mainTheme";

export const useStyles = makeStyles(createStyles({

    allCurrentWeatherInfo:{
        display:"flex",
        width:"100%",
        flexDirection:"row",
        [mainTheme.breakpoints.down("sm")]:{
            flexDirection:"column",
        },
        justifyContent:"space-between",
        alignItems:"flex-start",
        color: `${mainTheme.palette.primary.main}`
    },

    currentWeatherContainer:{
        display:"flex",
        width:"25%",
        flexDirection:"column",
        [mainTheme.breakpoints.down("sm")]:{
            marginBottom:"5%",
            width:"100%"
        },
        color: `${mainTheme.palette.primary.main}`

    },
    mainWeatherDataContainer:{
        display:"flex",
        flexDirection:"column",
        fontSize:"1.7em",
        [mainTheme.breakpoints.down("sm")]:{
            justifyContent:"space-evenly",

            fontSize:"1.1em",
        },
    },
    containerWithIcon:{
        display:"flex",
        fontSize:"1.2em",
        flexDirection:"row",
        alignItems:"flex-start"

    },
    weatherIcon:{
        width:"auto",
    },
    weatherInfo:{
        display:"flex",
        flexDirection:"column",
        [mainTheme.breakpoints.down("sm")]:{
            justifyContent:"space-between",
            // flexDirection:"row",
            // width:"100%",
            fontSize:"0.9em",
        },
        justifyContent:"space-evenly",
        alignItems:"flex-start",
        height:"100%",

    },

    additionalInfo:{
        display:"flex",
        justifyContent:"space-evenly",
        flexDirection:"row",
        [mainTheme.breakpoints.down("sm")]:{
            justifyContent:"space-between",
        },
        width:"100%",
        height:"100%",
        alignItems:"center",
        fontSize:"1.1em",
    }



}))
