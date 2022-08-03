import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    fontFamily: "Shabnam",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  Title: {
    fontWeight: "bold",
  },
  Divider: {
    marginTop: "16px",
  },
  codeTitle: {
    fontWeight: "bold",
    margin: "24px 0px",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  errorMessage: {
    color: "red",
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
  Button1: {
    fontFamily: "Shabnam",
    cursor: "pointer",
    border: "none",

    // padding: "8px 0px",
    borderRadius: "16px",
    backgroundColor: "rgb( 26 ,115, 233)",
    color: "#fff",

    boxShadow: "0px 3px 6px rgba(0 ,0, 0, 0.16)",
    fontWeight: "bold",
    fontSize: "16px",
    // width: "20%",
    height: "20px",
    "&:hover": {
      backgroundColor: "rgb( 26 ,115, 233)",
      borderWidth: 2,
      color: "#fff",
    },
  },

  inputText: {
    display: "flex",
    flexDirection: "column",
  },
  TextField: {
    width: "48%",
    background: "rgb( 240 240 240)",
    border: "none",
    borderRadius: "10px",
    "& label.Mui-focused": {
      color: "orange !important",
      borderRadius: "10px",
      fontWeight: "bold",
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
  },
  TextField2: {
    width: "300px",
    background: "rgb( 240 240 240)",
    border: "none",
    borderRadius: "10px",
    "& label.Mui-focused": {
      color: "orange !important",
      borderRadius: "10px",
      fontWeight: "bold",
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
  },
  input: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "32px",
    fontFamily: "Shabnam",
    border: "none",
    "& label.Mui-focused": {
      border: "5px solid red",
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
        borderRadius: "10px",
        border: "2px solid rgb(255 ,176, 4) !important",
      },
    },
  },
  inputSelect: {
    width: "250px",
    display: "flex",
    height: "40px",
    backgroundColor: "rgb( 244, 244 ,244)",
    boxShadow: "0px 3px 6px rgba(0 ,0, 0, 0.16)",
    borderRadius: "10px",
    border: "none",
    // height: "40px",
    fontFamily: "Shabnam",
    "&	.MuiSelect-outlined": {
      borderRadius: "10px",
    },
  },

  select: {
    backgroundColor: "rgb( 244, 244 ,244)",
    borderRadius: "10px",
    "&:before": {
      border: "none",
      backgroundColor: "#fff",
      outline: "2px solid red",
      borderRadius: "10px",
    },
    "&:hover": {
      border: "none",
      backgroundColor: "#fff",
      outline: "2px solid red",
      borderRadius: "10px",
    },
    "&:after": {
      border: "none",
      backgroundColor: "#fff",
      outline: "2px solid red",
      borderRadius: "10px",
    },
    "&:not(.Mui-disabled):hover::before": {
      border: "none",
      backgroundColor: "#fff",
      outline: "2px solid red",
      borderRadius: "10px",
    },
  },
  icon: {
    fill: "green",
  },
  text: {
    border: "none",
    backgroundColor: "#fff",
    outline: "2px solid red",
  },
  outline: {
    "&:before": {
      borderColor: "red",
    },
    "&:after": {
      borderColor: "red",
    },
  },
  item: {
    textDecoration: "none",
    color: "rgb( 227, 156, 0)",
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

  TabHeader: {
    backgroundColor: "rgb( 255 ,242, 212)",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "50px",
    boxShadow:
      " rgba(0, 0, 0, 0.1) 0px 60px 100px -100px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    color: "rgb( 227, 156, 0)",
    fontWeight: "bold",
    borderRadius: "15px",
    fontSize: "1rem",
    marginBottom: "16px;",
    marginTop: "16px",
  },

  buttonLogin: {
    backgroundColor: "rgb( 26 115 233)",
    borderRadius: "8px",
    marginTop: "20px",
    width: "150px",
    color: "#fff",
    fontFamily: "Shabnam",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  addButton: {
    backgroundColor: "rgb( 26, 115 ,233)",
    fontFamily: "Shabnam",
    padding: "8px 12px",
    width: "80px",
    boxShadow: "0px 3px 6px 0px rgba( 0 ,0, 0, 0.16)",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      background: "rgb( 26, 115 ,200)",
    },
  },
  cancelButton: {
    backgroundColor: "#fff",
    fontFamily: "Shabnam",
    width: "80px",
    padding: "8px 12px",
    boxShadow: "0px 3px 6px 0px rgba( 0 ,0, 0, 0.16)",
    color: "#000",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
  },
}));
