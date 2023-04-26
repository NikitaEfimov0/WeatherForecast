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

            flexDirection:"row",
            height:"35%",
            width:"100%",
        },
        height:"100%",
        width:"15%",
        background: "rgba(92, 104, 100, 0.62)",
        backdropFilter: "blur(40px)",
    }

}))
