import {createStyles, makeStyles} from "@material-ui/core";
import {mainTheme} from "../../../themes/mainTheme";

export const useStyles = makeStyles(createStyles({

    forecastContainer:{
        marginTop:"1.3em",
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-start",
        flexDirection:"column",
        color: mainTheme.palette.primary.main,
        width:"100%",
        height:"25%"
    },

    forecastInfoContainer:{
        marginTop:"1em",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
        [mainTheme.breakpoints.down("sm")]:{
            flexDirection:"column",
            justifyContent:"flex-start",
        },
        width:"100%",
        height:"75%"
    },
    spanInfo:{
        fontSize:'2.0em',
        [mainTheme.breakpoints.down("sm")]:{

            fontSize:"1.1em",
        },

    }

}))
