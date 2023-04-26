import {createStyles, makeStyles} from "@material-ui/core";
import {mainTheme} from "../../themes/mainTheme";

export const useStyles = makeStyles(createStyles({
    container:{
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        marginLeft: "1%",
        marginRight: "1%"
    },
    searchBox:{
        width:"100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        flexDirection: "row",
        borderRadius: "40px",
        border:`1px solid ${mainTheme.palette.primary.main}`,
        marginLeft: "1%",
        marginRight: "1%"
    },
    cityInput:{
        width: "100%",
        height:"100%",
        background:"transparent",
        border: "none",
        outline: "none",
        fontSize: "14px",
        fontWeight: 100,
        color: mainTheme.palette.primary.main
    },
    inputContainer:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        height:"100%",
        margin: "2%"
    },
    inputHelp:{
        background:"transparent",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        width: "50%",
        flexGrow: 1,
        position:"absolute",
        // marginLeft: "4%",
        overflow:"auto",
        marginTop: "2.5em"
    },
    circularProgress:{
        marginTop:"10%",
        position:"absolute",
    }
}))
