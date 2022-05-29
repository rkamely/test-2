import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    body:{
fontFamily: "Shabnam"
    },
    
container:{
padding:"0 40px",
[theme.breakpoints.down('xs')]: {

    padding:0,

},
},

  Titles: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start"
     },
  },
  Title: {
    fontWeight: 600,
    fontSize: "1rem",

  },
  box:{
    width: "50vw",
    padding: "0 48px",
    overflowX: "hidden",
    overflowY: "auto",
    [theme.breakpoints.down('sm')]: {
      width:"80vw",
           },
  },
  titleBox:{
    textAlign: "center",
    color: "rgb( 227 ,156, 0)",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Shabnam",
  },
  Time: {
    color: "rgb( 112 112 112)",
    fontSize: "0.8rem",
    marginLeft: "8px",
  },

  Date: {
    color: "rgb( 112 112 112)",
    fontSize: "0.8rem",
    marginLeft: "8px",
  },

  Duration: {
    color: " rgb( 173 173 173)",
    fontSize: "0.8rem",
    marginRight: "24px",
    [theme.breakpoints.down('xs')]: {

      marginRight: 0,
  
  },
  },

  State: {
    marginTop: "16px",
  },

  Button: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "48px",
    [theme.breakpoints.down('xs')]: {

      display:"flex",
      flexDirection:"column"
  },
  },

  button1: {
    background: "rgb( 255 176 4)",
    padding: "8px 16px",
    color: "#000",
    borderRadius: "8px",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0px 3px 6px rgba( 0, 0, 0, 0.2 )",
    "&:hover": {
      background: "rgb( 255 176 4)",
    },
    [theme.breakpoints.down('xs')]: {

width:"100%"  },
  },

  button2: {
    background: "rgb( 255 176 4)",
    padding: "8px 16px",
    color: "#000",
    borderRadius: "8px",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0px 3px 6px rgba( 0, 0, 0, 0.2 )",
    "&:hover": {
      background: "rgb( 255 176 4)",
    },
    [theme.breakpoints.down('xs')]: {

      width:"100%",marginTop:"16px"  },
  },

  addButton: {
    backgroundColor: "rgb( 26, 115 ,233)",
    fontFamily: "Shabnam",
    padding: "8px 24px",
    boxShadow: "0px 3px 6px 0px rgba( 0 ,0, 0, 0.16)",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "16px",
    cursor: "pointer",
    "&:hover": {
        background: "rgb( 26, 115 ,200)",
      },

  },
  cancelButton: {
    backgroundColor: "#fff",
    fontFamily: "Shabnam",
    padding: "8px 24px",
    boxShadow: "0px 3px 6px 0px rgba( 0 ,0, 0, 0.16)",
    color: "#000",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "16px",
    cursor: "pointer",
  },

  actionButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding:"32px 48px"
  },
  input:{
    width: "200px",
  },
  Select:{
    width:"100%"
  },

  inputSelect: {
    width: "200px",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      // marginLeft: "0px"
       },
  },


  errorTitle:{ 
    color: "red"
  },
  topMain:{
    display: "flex", alignItems: "center", marginTop: "16px" ,
    [theme.breakpoints.down('sm')]: {
        display:"flex",
        flexDirection:"column",
         width:"100%"
          },
  },
  inputQrCode:{
    backgroundColor: "rgb( 244, 244, 244)",
    width: "200px",
    borderRadius: "8px",
    border: "none",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
  },
  input:{
    display:"flex",flexDirection:"column",marginLeft: "32px",
    [theme.breakpoints.down('sm')]: {
       width:"100%",
       marginLeft: "0px"
        },
  },


}));
