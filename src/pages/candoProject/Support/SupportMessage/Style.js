import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    container:{
        padding: "32px 60px",
      },
    container2:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: "16px 32px",
        justifyContent: "space-between",
        borderRadius: "12px",
        width: "100%",
        marginTop: "24px",
        [theme.breakpoints.down('sm')]: {
            padding: "0px",
           },
    },
    SupportMessage:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        // padding: "16px 32px",
        justifyContent: "space-between",
        borderRadius: "12px",
        width: "100%",
        marginTop: "24px",
        alignSelf: "flex-start",
        boxShadow: "0px, 3px,6px, 0px ,rgba(0,0,0,0.16)",
        [theme.breakpoints.down('sm')]: {
            padding: "0px",
           },
    },
    SupportNewMessage:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        // padding: "16px 32px",
        justifyContent: "space-between",
        borderRadius: "12px",
        width: "100%",
        marginTop: "24px",
        alignSelf: "flex-start",
        boxShadow: "0px, 3px,6px, 0px ,rgba(0,0,0,0.16)",
        [theme.breakpoints.down('sm')]: {
            padding: "0px",
           },
    },



}));
