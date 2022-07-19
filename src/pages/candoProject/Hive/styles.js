import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  Loading:{
    height:"90%",
    display:"flex",
    alignItems:"center"  ,
    justifyContent:"center"
},
  container:{
    padding: "32px ",
  },
    inputSelect: {
        width: "250px",
        display:"flex",
        height:"40px",
        borderRadius: "8px",
        border: "none",
        // height: "40px",
        fontFamily: "Shabnam",
        "&	.MuiSelect-outlined":{
        
          borderRadius: "8px",
        },
        "&	.MuiSelect-outlined":{
        
          borderRadius: "8px",
        },
    
     
      },
    
    
    
      select: {
        backgroundColor: "rgb( 244, 244 ,244)",
        borderRadius: "10px",
        "&:before": {
          border: "none",    backgroundColor: "#fff",outline: "2px solid red",
          borderRadius: "10px",
        },
        "&:hover": {
          border: "none",    backgroundColor: "#fff",outline: "2px solid red",
          borderRadius: "10px",
        },
        "&:after": {
          border: "none", backgroundColor: "#fff",outline: "2px solid red",      borderRadius: "10px",
        },
        "&:not(.Mui-disabled):hover::before": {
          border: "none", backgroundColor: "#fff",outline: "2px solid red",      borderRadius: "10px",
        },
      },
}));
