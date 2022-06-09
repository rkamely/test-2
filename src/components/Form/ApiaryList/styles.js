import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    fontFamily: "Shabnam",
  },
  notAccess:{
     textAlign:"center",
     width: "100%",
     background:"orange",
     fontWeight:"600"
  },
  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  main:{

    [theme.breakpoints.down('md')]: {
      width:"100%"
    },

  },
  Title:{
    fontWeight: "bold" 
  },
  errorTitle:{ 
    color: "red"
  },
  label: {
    whiteSpace: "nowrap",
    marginRight: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    fontWeight: "bold",
    fontFamily: "Shabnam",

  },

  Divider:{
    marginTop: "32px"
  },
  // Button1: {
  //   marginTop: "8px",
  //   display: "flex",
  //   fontFamily: "Shabnam",
  //   cursor: "pointer",
  //   border: "none",
  //   marginTop: "100px",
  //   backgroundColor: "rgb( 255, 255, 255)",
  //   boxShadow: "0px 3px 6px rgba(0 ,0, 0, 0.16)",
  //   color: "#000",
  //   width: "16%",
  //   padding: "16px 0px",
  //   borderRadius: "16px",
  //   fontWeight: "bold",
  //   fontSize: "16px",
  //   "&:hover": {
  //     backgroundColor: "#fff",
  //     borderWidth: 2,
  //   },
  // },
  Map:{
    borderRadius: "8px",
    height: "250px",
    // width:"100%"
  },
  mapTitle:{
    marginTop: "32px" , fontWeight: "bold"
  },
  button:{
    display: "flex", 
    justifyContent: "space-between"
  },
  Button1: {
    fontFamily: "Shabnam",
    cursor: "pointer",
    border: "none",

    padding: "8px 0px",
    borderRadius: "16px",
    backgroundColor: "rgb( 26 ,115, 233)",
    color:"#fff",

    boxShadow: "0px 3px 6px rgba(0 ,0, 0, 0.16)",
    fontWeight: "bold",
    fontSize: "16px",
    width: "12%",
    "&:hover": {
      backgroundColor: "rgb( 26 ,115, 233)",
      borderWidth: 2,
      color: "#fff",
    },
  },
  Button2: {
    fontFamily: "Shabnam",
    cursor: "pointer",
    border: "none",
    padding: "8px 0px",
    borderRadius: "16px",
    backgroundColor: "rgb( 255 255 255)",

    boxShadow: "0px 3px 6px rgba(0 ,0, 0, 0.16)",
    fontWeight: "bold",
    fontSize: "16px",
    width: "12%",
    "&:hover": {
      backgroundColor: "rgb( 255 255 255)",
      borderWidth: 2,
      color: "#000",
    },
  },
  inputText:{
    display: "flex",
    flexDirection:"column",
  },
  TextField:{
    width: "250px",
    background:"rgb( 244 244 244)",
    border:"none",
    borderRadius: "10px",
    "& label.Mui-focused": {
      color: "rgb( 26 ,115, 233) !important",
      borderRadius: "10px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "red !important",
      borderRadius: "10px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        borderRadius: "10px",
      },

      "&.Mui-focused fieldset": {
        border: "2px solid rgb(255 ,176, 4) !important",
        borderRadius: "10px",

      },
    },
    [theme.breakpoints.down('md')]: {
      width:"100%"
        },
  },
  input: {
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    marginTop: "32px",
    fontFamily: "Shabnam",
    border: "none",
    "& label.Mui-focused": {
      border:"5px solid red",
      color: "red !important",
      borderRadius: "10px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "2px solid red !important",
      borderRadius: "10px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none", 
        borderRadius: "10px",
      },

      "&.Mui-focused fieldset": {
        border: "2px solid red !important",
        borderRadius: "10px",  
        border: "2px solid rgb(255 ,176, 4) !important",

      },
    },
    [theme.breakpoints.down('md')]: {
width:"100%",display:"flex",flexDirection:"column"
    },

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



  icon: {
    fill: "green"
  },
  text: {
    border: "none",backgroundColor: "#fff",outline: "2px solid red"
  },
  outline: {
    "&:before": {
    borderColor: "red"
    },
    "&:after": {
    borderColor: "red"
    }},
    Loading:{
      height:"90%",
      display:"flex",
      alignItems:"center"  ,
      justifyContent:"center"
  }
}));
