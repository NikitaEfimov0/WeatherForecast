import {createStyles, makeStyles} from "@material-ui/core";
import {mainTheme} from "../../../themes/mainTheme";

export const useStyles = makeStyles(createStyles({

    forecastContainer:{
        marginTop:"1.6em",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"flex-start",
        flexDirection:"column",
        color: mainTheme.palette.primary.main,
        width:"100%",
        height:"45%"
    },

    forecastInfoContainer:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
        [mainTheme.breakpoints.down("sm")]:{
            flexDirection:"column",
            justifyContent:"flex-start",

        },
        width:"90%",
        height:"50%"
    },
    spanInfo:{
        fontSize:'2.0em',
        [mainTheme.breakpoints.down("sm")]:{

            fontSize:"1.1em",
        },

    }

}))
