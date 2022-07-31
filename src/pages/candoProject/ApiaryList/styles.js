import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    Loading:{
        height:"90%",
        display:"flex",
        alignItems:"center"  ,
        justifyContent:"center"
    },
    container:{
        padding: "32px ",
      },
      addButton: {
        backgroundColor: "rgb( 26, 115 ,233)",
        fontFamily: "Shabnam",
        padding: "8px 12px",
        width:"80px",
        boxShadow: "0px 3px 6px 0px rgba( 0 ,0, 0, 0.16)",
        color: "#fff",
        fontWeight: 600,
        fontSize: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
        "&:hover": {
            background: "rgb( 26, 115 ,200)",
          },
    
      },
      cancelButton: {
        backgroundColor: "#fff",
        fontFamily: "Shabnam",
        width:"80px",
        padding: "8px 12px",
        boxShadow: "0px 3px 6px 0px rgba( 0 ,0, 0, 0.16)",
        color: "#000",
        fontWeight: 600,
        fontSize: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
      },

}));
