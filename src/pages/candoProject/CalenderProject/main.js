import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import AddJob from "../../../components/Form/JobUser/AddJob";
import Title from "../../../components/Typography/Title/Title";
import CalenderProject from "./CalenderProject";
import JobCalender from "./JobCalender/JobCalender";
import useStyles from "./style";

function Main() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  let { path, url } = useRouteMatch();
  const classes = useStyles();

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

      /////////////////////////////////////////////////////////////////////////////////////////
  
      const token = localStorage.getItem("id_token")
   console.log(token);
      useEffect(() => {
        const fetchData = async () =>{
          // setLoading(true);
          try {
            const {data: response} = await axios.post("http://185.202.113.165:3000/api/event/GetForMonth",{ "date":"1401/03/01"},{
              headers: {
                'token': `${token}` 
              },
            },);
            console.log( "show response" , response.data);
            // setApiariesList(response.data )
            // setLoading(false)
          } catch (error) {
          //  if (error.response?.status === 401) {
          //    localStorage.clear("id_token")
          //  }
           console.error("سرور دچار مشکل شده است"+"ApiaryList");
          //  setErrMessage("  با عرض پوزش سرور دچار مشکل شده است")
          //  setIserror(true)
          //  history.push("/app/Error")
          //  window.location.reload()
          }
          // setLoading(false);
        }
        fetchData();
      }, []);
   

      /////////////////////////////////////////////////////////////////////////////////////////
      
  const descriptionElementRef = React.useRef(null);

  return (
    <>
      <Grid container>
        <Title title="تقویم کاری" style={{ fontSize: "2rem" }} variant="h5" />
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item onClick={handleClickOpen("body")}>
            <img
              style={{
                flex: "1",
                backgroundColor: "rgb( 227, 156, 0)",
                cursor: "pointer",
                color: "#000",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
              src="/assets/Group 182.svg"
              alt=""
            />
          </Grid>

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
        </Grid>
        <Grid item xs={12} sm={12}>
          <Switch>
            <Route exact path={`${path}`}>
              <CalenderProject open={open}  handleClose={handleClose} scroll={scroll}/>
            </Route>
            <Route path={`${path}/Jobs`}>
              <JobCalender />
            </Route>
          </Switch>
        </Grid>
      </Grid>

      {/* <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md"
      >
        <AddJob handleClose={handleClose} />
      </Dialog> */}
    </>
  );
}

export default Main;
