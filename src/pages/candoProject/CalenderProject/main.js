import { Grid } from '@material-ui/core'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink,
    useParams,useRouteMatch
  } from "react-router-dom"
import Title from '../../../components/Typography/Title/Title'
import CalenderProject from './CalenderProject'
import JobCalender from './JobCalender/JobCalender'
import useStyles from "./style"; 

function Main() {

    let { path, url } = useRouteMatch();
    const classes = useStyles();

  return (
 <Grid container>    
     <Title title="تقویم کاری" style={{fontSize:"2rem"}} variant="h5"/>
         <Grid item xs={3} sm={3} className={classes.TabHeader}>
              <Grid>
                <NavLink
                 exact
                  to={`${url}`}
                  className={classes.item}
                  activeClassName={classes.activeItem}
                >
                  تقویم  
                </NavLink>
              </Grid>
              <Grid>
                <NavLink
                  to={`${url}/Jobs`}
                  className={classes.item}
                  activeClassName={classes.activeItem}
                >
                  کارها
                </NavLink>
              </Grid>
         </Grid>
   <Grid item xs={12} sm={12}>
      <Switch>
        <Route exact path={`${path}`}>
            <CalenderProject/>
        </Route>
        <Route path={`${path}/Jobs`}>
             <JobCalender/>
        </Route>

      </Switch> 
     </Grid>   
 </Grid>   
  )
}

export default Main