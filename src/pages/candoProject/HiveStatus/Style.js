import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container:{
    padding: "32px ",
  },
  TabHeader: {
    backgroundColor: "rgb( 255 ,242, 212)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "60px",
    boxShadow:
      " rgba(0, 0, 0, 0.1) 0px 60px 100px -100px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    color: "rgb( 227, 156, 0)",
    fontWeight: "bold",
    borderRadius: "15px",
    fontSize: "18px",
    marginBottom: "16px;",
  },
  item: {
    textDecoration: "none",
    color: "rgb( 227, 156, 0)",
  },
  rightTopCard_Container:{
    fontWeight: 600,height:"auto",background:"#fff",padding:"20px 30px 100px",borderRadius:"15px",
    boxShadow:"0px 3px 6px 0px rgba(0 ,0 ,0, 0.16)"
  },
  LeftCard_Container:{
    fontWeight: 600,height:"auto",background:"#fff",padding:"20px 30px 100px",borderRadius:"15px",
    boxShadow:"0px 3px 6px 0px rgba(0 ,0 ,0, 0.16)"
  },
  diagram_container:{
    fontWeight: 600,height:"auto",background:"#fff",padding:"20px 30px",borderRadius:"15px",
    boxShadow:"0px 3px 6px 0px rgba(0 ,0 ,0, 0.16)"
  },
  Audio_container:{
    fontWeight: 600,height:"auto",background:"#fff",padding:"20px 30px",borderRadius:"15px",
    boxShadow:"0px 3px 6px 0px rgba(0 ,0 ,0, 0.16)"
  },
  activeItem: {
    background: "#fff",
    padding: "4px 16px",
    borderRadius: "8px",
    color: "#000",
    textDecoration: "none",
    cursor: "pointer",
    boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.16)",
  },
  greenHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb( 33, 192, 99)",
    boxShadow: "0px 3px 6px 0px rgba(0, 0,0, 0.16)",
    padding: theme.spacing(2.5),
    borderRadius: "15px",
    color: "#fff",
  },
  cards: {
    boxShadow: "red 0px 6px 0px,  0px 7px 13px -3px, red 0px -3px 0px inset",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 0px ",

    // paddingTop:theme.spacing(2),
  },
  Soundscards: {
    boxShadow: " rgba(0, 0, 0, 0.16) 0px 0px 4px 0px",
    boxSizing: "border-box",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: " 20px 50px ",
    height: "100px",
    // width:"50px"
  },

  logoHives: {
    width: "80px",
    height: "80px",
    border: "8px solid red",
    borderRadius: "50%",
    marginRight: "16px",
  },
  cardSubtitleLeft: {
    marginTop: "8px",
  },
  cardTitleLeftBottom: {
    fontWeight: 600,
    color: "rgb( 173 173 173) ",
  },
  cardSubtitleLeftBottom: { fontWeight: 600, marginTop: "16px" },
  cardBottomPart: {
    display: "flex",
    flexDirection: "column",
  },
  midPartAudio: {
    boxShadow: " rgba(0, 0, 0, 0.16) 0px 0px 4px 0px",
    boxSizing: "border-box",
    borderRadius: "15px",
    padding: "32px",
  },
  DialogActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "16px",
  },
  DialogBox: {
    width: "500px",
    padding: "40px 20px",
  },
  ButtonHiveSubmitYes: {
    background: theme.palette.secondary.main,
    fontWeight: 600,
    padding: "4px 32px",
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  },
  ButtonHiveSubmitNo: {
    background: "rgb( 244 244 244)",
    fontWeight: 600,
    padding: "4px 32px",
  },

  ButtonHiveSubmitNoFinish: {
    display: "none",
  },
  hideElement:{
    display: "none",
  },
  ButtonHiveSubmitFinish: {
    background: "blue",
    fontWeight: 600,
    width: "50%",
    color: "#fff",
    padding: "4px 48px",
    fontWeight: "bold",
    fontFamily: "Shabnam",
    borderRadius: "12px",
    "&:hover": {
      background: "blue",
    },
  },
  mainChartHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb( 244 ,244 ,244)",
    padding: "0 16px",
    borderRadius: "12px",
  },
  select: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: "8px",
    margin: "8px 0",
  },
  mainChartHeaderLabels: { display: "flex",alignItems: "center",   borderRadius: "12px",backgroundColor: "rgb(244 244 244)", padding: "12px",
},
  mainChartHeaderLabel:{display: "flex",alignItems: "center",justifyContent: "center",marginRight: "16px"},
  mainChartLegentElement:{marginLeft: "8px" },
  leftHeader: {
    display: "flex",
    alignItems: "center",
  },
  
  date: {
    margin: "16px 8px",
  },
  dot:{
    marginLeft: "16px",
    border:"1px solid red"
  },
  //////////////////////////////////////
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
