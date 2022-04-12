import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Button, Dialog, Grid, Slide, Typography } from "@material-ui/core";
import PageTitle from "../../../components/PageTitle/PageTitle";
import Widget from "../../../components/Widget/Widget";
import useStyles from "./Style";
import Chart from "../../../components/Chart/Chart";
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
  useParams,useRouteMatch
} from "react-router-dom" 
import RightTopCard from "./RightTopCard";
import LeftCard from "./LeftCard";
import Audio from "./Audio";
import Diagram from "./Diagram";
import WebHiveSubmit from "./webHiveSubmit";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
}); 

function HiveStatus() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let { path, url } = useRouteMatch();
  return (
    <>
      <PageTitle title="خانه" />
      <Grid container spacing={3}>

    <Grid item sm={6} >

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
            <RightTopCard />
        </Route>
        <Route path={`${path}/Sound`}>
            <Audio />
        </Route>
        <Route path={`${path}/Diagram`}>
            <Diagram /> 
        </Route>
      </Switch>     
             
    </Grid>















      <Grid item sm={6} >        
        <LeftCard />   
          <div>
          
          <Button onClick={handleClickOpen}> رو من کلیک کن</Button>
          <Dialog 
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <WebHiveSubmit  onClose={handleClose} />
        </Dialog > 
          </div>
      </Grid>
      </Grid>

    </>
  );
}

export default HiveStatus;
