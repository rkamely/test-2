import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container:{
    padding: "48px 100px",
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },

  card: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  
  
  },

  success: {
    backgroundColor: theme.palette.success.main,
    color: "#fff",
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    color: "#fff",
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },
  Programs: {
    [theme.breakpoints.down(1200)]: {
      flexDirection: "column",
    },
  },
  reminderJob: {
    display: "flex",
    flexDirection: "column",
  },
  workDone: {
    display: "flex",
    flexDirection: "column",
    // marginLeft: "32px",
    gap: "0px 50px",

    [theme.breakpoints.down(1200)]: {
      // marginLeft: "0px",
      marginTop:"16px"
    },
  },
  mapBox: {
    backgroundColor: " white",
    padding: "16px",
    overflow: "hidden",
    borderRadius: "8px",
    height: "300px",
    marginTop: "16px",
  },
  firstTitleBox: {
    marginTop: "4px",

  },
  secondPart: {
    marginTop: "8px",

 
  },
  boxes:{

    display: "flex",
    gap:"16px",
    [theme.breakpoints.down(1200)]: {
      flexDirection: "column",
    },
  },
  fiveBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  CardItem:{

    flex:" 1 1 0",
   
  }
}));
