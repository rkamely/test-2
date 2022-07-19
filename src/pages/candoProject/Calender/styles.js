import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    padding: "8px 0px",
    borderRadius: "8px",
    marginTop: "16px",


    // overflow:"hidden"
  },
  day: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    cursor: "pointer",
    marginTop: "8px",
    fontWeight:"600",
 

  },
  dayBox: {
    marginRight: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    // display: "flex",
    // width: "100%",
    // justifyContent: "center",
    // alignItems:"center",
    // border:"2px solid red"
  },
  daySelected: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgb( 255 176 4)",
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    padding: "6px",
    alignItems: "center",
    cursor: "pointer",
  },
  Header: {
    display: "flex",
    justifyContent: "space-between",
  },
  arrow: {
    cursor: "pointer",
  },
}));
