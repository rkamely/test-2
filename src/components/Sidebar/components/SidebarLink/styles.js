import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  link: {
    textDecoration: "none",
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
  
    },
  },

  externalLink: {
    border:"2px solid red",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none'
  },
  linkActive: {
    backgroundColor: theme.palette.background.light,
    
  },

  linkNested: {
    // border:"2px solid red",
    display:"flex",
    flexDirection:"row-reverse",
    marginRight: "16px",
    paddingLeft:"16px",
    "&:hover, &:focus": {
      backgroundColor: "rgb( 255 ,176 ,4)",
    },
  },
  linkIcon: {
    // display:"none",
    // marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary + "99",
    transition: theme.transitions.create("color"),
    width: 24,
    display: "flex",
    justifyContent: "center",
  },
 
  linkIconActive: {
    color: theme.palette.primary.main,
  },
  linkText: {

    paddingLeft: "6px",
    color: "#fff",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 16,
  },
  linkTextActive: {
    color: "#fff",
  },
  linkTextHidden: {
    opacity: 0,
  },
  /////////
  nestedList: {

    paddingRight: theme.spacing(2) + 30,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",

  },
/////////////
  sectionTitle: {
    marginRight: theme.spacing(4.5),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  divider: {
    position:"absolut",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    height: 1,
    backgroundColor: "#fff",
  },
}));
