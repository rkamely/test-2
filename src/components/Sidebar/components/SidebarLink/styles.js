import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  link: {
    margin: "14px 24px",
    textDecoration: "none",
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
    },
  },

  externalLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
  },
  linkActive: {
    backgroundColor: theme.palette.background.light,
  },
  linkActive1: {
    backgroundColor: theme.palette.background.light,
  },

  linkNested: {
    paddingRight: 0,
    "&:hover, &:focus": {
      backgroundColor: "rgb( 255 ,176 ,4)",
    },
  },

  linkIcon: {
    marginLeft: theme.spacing(1),
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
    padding: 0,
    color: "#fff",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 15,
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  /////////////
  sectionTitle: {
    marginRight: theme.spacing(4.5),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  aboutUsPart1: {
    position: "fixed",
    bottom: "50px",
    width: "279px",
    background: "rgb( 53 53 53)",
    transition: "0.3s all",
  },
  aboutUsPart2: {
    position: "fixed",
    bottom: "50px",
    width: "50px",
    background: "rgb( 53 53 53)",
    transition: "0.3s all",
  },
  bottomSettingPart1: {
    position: "fixed",
    bottom: "0px",
    width: "279px",
    background: "rgb( 53 53 53)",
    transition: "0.3s all",
  },
  bottomSettingPart2: {
    position: "fixed",
    bottom: "0px",
    width: "50px",
    background: "rgb( 53 53 53)",
    transition: "0.3s all",
  },
  bottombtnDivider1: {
    marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(0.5),
    backgroundColor: "#fff",
    position: "fixed",
    width: "250px",
    margin: "0 16px",
    height: "1px",
    bottom: "113px",
    transition: "0.3s all",
  },
  bottombtnDivider2: {
    marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(0.5),
    backgroundColor: "#fff",
    position: "fixed",
    width: "65px",
    margin: "0 16px",
    height: "1px",
    bottom: "113px",
    transition: "0.3s all",
  },
}));
