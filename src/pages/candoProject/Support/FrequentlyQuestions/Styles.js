import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container:{
padding:"80px",
[theme.breakpoints.down('sm')]: {

  padding:0,

},
  },
  yellowBorder: {
    borderRadius: " 9px",
    border: "3px solid rgb(255 176 4)",
  },
  yellowBackGround: {
    background: "rgb(255 176 4)",
    borderRadius: "50%",
    color: "rgb(255 130 4)",
  },
  inputSelect: {
    width: "22%",
    height:"40px",
    backgroundColor: "white",
    boxShadow: "0px 3px 6px rgba(0 ,0, 0, 0.16)",
    borderRadius: "10px",
    border: "none",
    // height: "40px",
    fontFamily: "Shabnam",
    "& 	.MuiSelect-iconOpen": {
        color: "#fecf33",
        backgroundColor:" rgb( 255 156 0)",
        borderRadius: "50px",
      }, 
    "& label.Mui-focused": {
      color: "rgb( 26 ,115, 233) !important",
      borderRadius: "10px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "2px solid rgb( 26 ,115, 233) !important",
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

  
  Accordion: {

 
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
      border: "10px solid red",
      color: "red",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  },
  arrowStyle: {
    "& .Mui-expanded": {
      color: "rgb( 255 176 4)",
    },
    " & .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      border: "10px solid blue",
    },
  },
}));
