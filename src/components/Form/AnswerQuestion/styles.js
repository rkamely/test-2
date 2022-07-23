import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    fontFamily: "Shabnam",
    /////////////////////
    // position: "absolute",
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    // background: "rgba(0, 0, 0, 0.15)",
    zIndex: 200,
    paddingRight:" 64px",
    paddingLeft:" 64px"
  },

  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    // gap:"60px",
    flexWrap:"noWrap",
    // border:"2px solid red",
    marginTop:"24px",
    [theme.breakpoints.down('md')]: {
      width:"100%",
      flexWrap:"Wrap",
    
    },
  },
  main:{

    [theme.breakpoints.down('md')]: {
      width:"100%",

    
    },

  },
  Title:{
    fontWeight: "bold" ,
    color:"rgb( 227 156 0)",
    marginTop:"8px"


  },


  Divider:{
    marginTop: "24px",
    width:"97%",
    position:"absolute",
    right:"0",
    left:"0"
  },
  Divider2:{
    marginTop: "80px",
    background:"rgb(244 244 244)",

    width:"97%",
    position:"absolute",
    right:"0",
    left:"0"
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
    height: "320px",
    width:"50px"
  },

  mapTitle:{
    marginTop: "32px" , fontWeight: "bold"
  },
  ButtonBox:{
    width: "100%",padding:"24px 32px 8px 32px" ,marginTop:"80px"
  },
  button:{
    display: "flex", 
    justifyContent: "space-between"
  },
  Button1: {
    fontFamily: "Shabnam",
    cursor: "pointer",
    border: "none",
    padding: "12px 30px",
    borderRadius: "16px",
    backgroundColor: "rgb( 26 ,115, 233)",
    color:"#fff",

    boxShadow: "0px 3px 6px rgba(0 ,0, 0, 0.16)",
    fontWeight: "bold",
    fontSize: "16px",
    // width: "12%",
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
    padding: "12px 30px",
    borderRadius: "16px",
    backgroundColor: "rgb( 255 255 255)",

    boxShadow: "0px 3px 6px rgba(0 ,0, 0, 0.16)",
    fontWeight: "bold",
    fontSize: "16px",
    // width: "12%",
    "&:hover": {
      backgroundColor: "rgb( 255 255 255)",
      borderWidth: 2,
      color: "#000",
    },
  },





}));
