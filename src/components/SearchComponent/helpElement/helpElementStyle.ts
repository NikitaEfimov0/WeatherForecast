import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(createStyles({
    elem: {
        background: "transparent",
        // backdropFilter: "blur(20px)",
        color: "white",
        cursor: "pointer",
        // marginTop: "1%",
        // marginBottom: "1%",
        paddingBottom:"2%",
        paddingTop:"2%",
        paddingLeft: "3%",
        paddingRight:"3%",
        fontSize: "14px",
        fontWeight: 100,
        display:"flex",
        justifyContent:"space-between",
        flexDirection: "row",
        transition:"background",
        transitionDuration:"0.3s",
        transitionTimingFunction: "ease-in-out",
        borderRadius:"10px",
        "&:hover":{
            background: "rgba(47,93,103,0.8)",
            backdropFilter: "blur(100px)",
            transitionDuration:"0.3s",
        }
    }

}))
