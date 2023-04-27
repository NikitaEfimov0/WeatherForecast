import {createStyles, makeStyles} from "@material-ui/core";
import {mainTheme} from "../../../../themes/mainTheme";

export const useStyles = makeStyles(createStyles({

    forecastBox:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"column",
        border: `1.2px solid ${mainTheme.palette.primary.main}`,
        borderRadius:"20px",
        [mainTheme.breakpoints.down("sm")]:{
            // paddingLeft:"5%",
            // paddingRight:"5%",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection:"row",
            height:"35%",
            width:"90%",
            marginBottom:"1em",
        },
        height:"100%",
        width:"15%",
        background: "rgba(92, 104, 100, 0.62)",
        backdropFilter: "blur(40px)",
    },

    tempBox:{
        [mainTheme.breakpoints.down("sm")]: {
            width: "85px",
        }
    }



}))
