import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Breadcrumbs, Button, Dialog, Grid, Slide, Typography } from "@material-ui/core";
import useStyles from "./Style";
import "../Support/Support.css"
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,NavLink,
  useParams,useRouteMatch,useHistory
} from "react-router-dom" 
import RightTopCard from "./RightTopCard";
import LeftCard from "./LeftCard";
import Audio from "./Audio";
import Diagram from "./Diagram";
import WebHiveSubmit from "./webHiveSubmit";
import { NavigateBefore } from "@material-ui/icons";
import Title from "../../../components/Typography/Title/Title";
import LinaerStepper from "./LinaerStepper";
import {

  Close,
  Edit,
  
  MoreVertOutlined,
  Share,

} from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
}); 

function HiveStatus() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };
  let { path, url } = useRouteMatch();

  let { id } = useParams();
  

const Apiary_id= localStorage.getItem("Apiary_id")
const Hive_name= localStorage.getItem("Hive_name")
const apiaryIdClick =localStorage.getItem("apiaryIdClick")
localStorage.setItem("Hive_id",id)

  const breadcrumbs = [

    <Link
      to="/app/ApiaryList"
      key="1"
      style={{textDecoration:"none",cursor:"pointer",fontSize:"1.2rem"}}
    >

          <p style={{color:"rgb(227, 156, 0)" ,fontWeight:"bold",fontSize:"1.2rem"}}>زنبورستان</p>

    </Link>,
        <Link
        to={`/app/ApiaryList/Beehive/${apiaryIdClick}`}
        key="2"
        style={{textDecoration:"none",cursor:"pointer"}}
      >
            {/* <Title key="2" title="کندووان"/> */}
            <p style={{color:"rgb(227, 156, 0)" ,fontWeight:"bold",fontSize:"1.2rem"}} >{Apiary_id}</p>

  
      </Link>,

            <p style={{color:"rgb(227, 156, 0)" ,fontWeight:"bold",fontSize:"1.2rem"}}>{Hive_name}</p>
            
  ];

  return (
    <div className={classes.container}>
      <Breadcrumbs 
        separator={<NavigateBefore fontSize="large" style={{color:"rgb(227, 156, 0)"}} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Grid container spacing={3} style={{marginTop:"8px"}}>

    <Grid item xs={12}  lg={6}>

      <Grid item  className={classes.TabHeader} >
        <Grid ><NavLink exact to={`${url}`} className={classes.item} activeClassName={classes.activeItem}>وضعیت</NavLink></Grid>
        <Grid><NavLink to={`${url}/Sound`} className={classes.item} activeClassName={classes.activeItem}>صدا و تصویر</NavLink></Grid>
        <Grid><NavLink to={`${url}/Diagram`} className={classes.item} activeClassName={classes.activeItem}> نمودار </NavLink></Grid>
        <Grid><NavLink to={`${url}/History`} className={classes.item} activeClassName={classes.activeItem}> تاریخچه </NavLink></Grid>
      </Grid> 

{/* 
        <RightTopCard />
         <Audio />
         <Diagram /> */}


      <Switch>
        <Route exact path={`${path}`}>
            <RightTopCard onClickOpen={handleClickOpen}/>
        </Route>
        <Route path={`${path}/Sound`}>
            <Audio />
        </Route>
        <Route path={`${path}/Diagram`}>
            <Diagram /> 
        </Route>
      </Switch>     
             
    </Grid>















      <Grid item  xs={12} lg={6} >        
        <LeftCard />   
          <div>
          
         
      <Dialog 
          
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <WebHiveSubmit  onClose={handleClose} /> */}
        <LinaerStepper onClose={handleClose}/>
        </Dialog > 
          </div>
      </Grid>
      </Grid>

    </div>
  );
}

export default HiveStatus;
