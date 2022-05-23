import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    body:{
fontFamily: "Shabnam"
    },
  Titles: {
    display: "flex",
    alignItems: "center",
  },
  Title: {
    fontWeight: 600,
    fontSize: "1rem",
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
  },

  State: {
    marginTop: "16px",
  },

  Button: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "48px",
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
  },
  open: {
    border: "5px solid red",
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

  },
  inputSelect: {
    width: "200px",

  },
  MuiMenu:{
    border:"2px solid red !important"
  },

  errorTitle:{ 
    color: "red"
  },
}));
