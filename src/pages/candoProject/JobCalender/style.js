import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  TabHeader: {
    backgroundColor: "rgb( 255 ,242, 212)",
    margin:"0 auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "50px",
    boxShadow:
      " rgba(0, 0, 0, 0.1) 0px 60px 100px -100px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    color: "black",
    fontWeight: "bold",
    borderRadius: "15px",
    fontSize: "1rem",
    marginBottom:"16px;",
    marginTop:"16px",
    width:"30%"
  },    
  item:{
    textDecoration:"none",
    color: "black",
 
  },
  activeItem:{
  background:"#fff",
  padding:"4px 16px",
  borderRadius:"8px",
  color:"#000",
  textDecoration:"none",
  cursor:"pointer",
  boxShadow:"0px 3px 6px 0px rgba(0,0,0,0.16)"
  
},
inputSelect: {
  width: "250px",
  display:"flex",
  height:"40px",
  borderRadius: "8px",
  border: "none",
  // height: "40px",
  fontFamily: "Shabnam",
  "&	.MuiSelect-outlined":{
  
    borderRadius: "8px",
  },
  "&	.MuiSelect-outlined":{
  
    borderRadius: "8px",
  },


},

}));
