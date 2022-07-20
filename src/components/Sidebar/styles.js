import { makeStyles } from "@material-ui/styles";

const drawerWidth = 280;

export default makeStyles(theme => ({
  sidebarList:{
    position:"relative",
    border:"2px solid red",
    overflow:"hidden"
 },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
 
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 40,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  ///////////sidebar top
  candoLogo:{
    marginRight: theme.spacing(2),
    marginBottom:theme.spacing(3),
  },
  candoTopSidebar:{
     display:"flex",
     alignItems:"center",
     justifyContent:"center",
     fontSize:"0.6rem",
     marginTop: theme.spacing(0),
     marginBottom: theme.spacing(4),
     color:"#fff",
     
    //   [theme.breakpoints.up("md")]: {
    //   display: "none",
    // },
  },
  candoTopSidebarTitle: {
     color: theme.palette.secondary.main,
  },
  /////////
  mobileBackButton: {
    marginTop: theme.spacing(0.5),
    marginLeft: 18,
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(0.625),
    },
    // [theme.breakpoints.up("md")]: {
    //   display: "none",
    // },
  },
}));
