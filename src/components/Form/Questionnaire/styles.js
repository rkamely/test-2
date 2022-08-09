import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({

  RadioGroup:{
    display:"flex",
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:"16px"
  },
  FormLable:{
    fontWeight:600,
    fontFamily:"Shabnam"
  },
  inputSelect: {
    width: "250px",
    display:"flex",
    height:"40px",
    backgroundColor: "rgb( 244, 244 ,244)",
    boxShadow: "0px 3px 6px rgba(0 ,0, 0, 0.16)",
    borderRadius: "10px",
    border: "none",
    // height: "40px",
    fontFamily: "Shabnam",

    "&	.MuiSelect-outlined":{
    
      borderRadius: "10px",
    },

    [theme.breakpoints.down('md')]: {
      width:"100%",
      marginTop:"8px"
        },
  },
}));
