import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Breadcrumbs, Button, Dialog, Grid, Slide, Typography } from "@material-ui/core";
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
import { NavigateBefore } from "@material-ui/icons";
import Title from "../../../components/Typography/Title/Title";
import LinaerStepper from "./LinaerStepper";


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
  console.log(path,"path")
  console.log(url,"url")
  let { id } = useParams();
  
  console.log("id ro bebin " , id);
  const breadcrumbs = [

    <Link
      to="/app/ApiaryList"
      key="1"
      style={{textDecoration:"none",cursor:"pointer"}}
    >
          <Title key="1" title=" زنبورستان "/>

    </Link>,
        <Link
        to="/app/ApiaryList"
        key="1"
        style={{textDecoration:"none",cursor:"pointer"}}
      >
            <Title key="2" title="کندووان"/>
  
      </Link>,

            <Title key="3" title={id}/>


  ];
  return (
    <>
      <Breadcrumbs 
        separator={<NavigateBefore fontSize="large" style={{color:"rgb(227, 156, 0)"}} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Grid container spacing={3} style={{marginTop:"32px"}}>

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















      <Grid item  xs={12} lg={6} >        
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
        {/* <WebHiveSubmit  onClose={handleClose} /> */}
        <LinaerStepper onClose={handleClose}/>
        </Dialog > 
          </div>
      </Grid>
      </Grid>

    </>
  );
}

export default HiveStatus;
