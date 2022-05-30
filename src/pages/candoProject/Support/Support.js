import {
  Button,
  Dialog,
  Grid,

  Slide,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import AddTicket from "./addTicket";
import useStyles from "./Style";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import axios from "axios";
import AddQRcode from "./addQRcode";
import moment from 'jalali-moment'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Support() {
  const [open, setOpen] = useState(false);
  const [AddTickets, setAddTickets] = useState(true);
  const [newTicket , setNewTicket] = useState([])
  // global
  // var layoutState = useLayoutState();
  const {  auth  , setAuth } = useContext(AuthContext)

  
  /////////////////////////////////////////////////////////////////////////////////////////
  
  const axiosInstance = useAxiosPrivate()
  const bardia = localStorage.getItem("id_token")
  console.log("bardia",bardia);
  useEffect(() => {
    const fetchData = async () =>{
      // setLoading(true);
      try {
        const {data: response} = await axios.get("http://188.121.121.225/api/ticket/getUserTickets",{
          headers: {
            'token': `${bardia}` 
          },
        },);
        console.log( "show response" , response.data);
        console.log( "auth ro see kon to support" , auth);
        setNewTicket(response.data )
        
      } catch (error) {
        console.error(error.message);
      }
      // setLoading(false);
    }
    fetchData();
  }, []);
  console.log("auth ro see kon to support",auth);


  /////////////////////////////////////////////////////////////////////////////////////////
  const m = moment();
  m.locale('fa');
  console.log(m.format('YY-MM-DD'));
    


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const classes = useStyles();

  const [data, setData] = useState([
    {
      id:1,
      Title: "موضوع تیکت",
      Date: "1400/01/01",
      Time: "12:14",
      state: {
        close: 0,
        open: 1,
        wait: 2,
      },
      Duration: "8 ماه پیش ",
    },
    {
      id:2,
      Title: "درخواست QR Code",
      Date: "1400/01/01",
      Time: "12:14",
      state: {
        close: 0,
        open: 1,
        wait: 2,
      },
      Duration: "8 ماه پیش ",
    },
    {
      id:3,
      Title: "موضوع تیکت",
      Date: "1400/01/01",
      Time: "12:14",
      state: {
        close: 0,
        open: 1,
        wait: 2,
      },
      Duration: "8 ماه پیش ",
    },
    {
      id:4,
      Title: "موضوع تیکت",
      Date: "1400/01/01",
      Time: "12:14",
      state: {
        close: 0,
        open: 1,
        wait: 2,
      },
      Duration: "8 ماه پیش ",
    },
  ]);

  const waveHello = () => {
    setAddTickets(false);
  };

  const wavebye = () => {
    setAddTickets(true);
  };
  // console.log("11111111",newTicket)
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.Button}>
        <Button
          className={classes.button1}
          onClick={() => {
            handleClickOpen();
            waveHello();
          }}
          style={{ fontFamily: "Shabnam" }}
        >
          تیکت به پشتیبانی
        </Button>
        <Button
          className={classes.button2}
          onClick={() => {
            handleClickOpen();
            wavebye();
          }}
          style={{ fontFamily: "Shabnam" }}
        >
          درخواست به QR Code
        </Button>
      </Grid>


      {newTicket?.map((element) => {
        return (
          <Link
          key={element._id}
          to={`./Support/${element._id}`  }
          item
          sm={12}
          className="pointer"
          style={{ marginTop: "32px",color: "#000",textDecoration:"none",cursor: "pointer"}}
        >
            <Grid className={classes.rightContent}>
              <Grid item className={classes.Titles}>
                <Typography className={classes.Title}>
                  {element.title}
                </Typography>
                <Typography className={classes.Date}> {moment.from(element.createdAt).locale('fa').format('YYYY/M/D HH:mm')}</Typography>
                <Typography className={classes.Time}>{element.Time}</Typography>



              </Grid>
              <Grid className={classes.State}>باز</Grid>
            </Grid>
            <Grid className={classes.Duration}>{ 'Difference is ', moment().diff(moment(element.createdAt, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'), 'days') }</Grid>

        </Link>

        );
      })}


      {data.map((element) => {
        return (
          <Link
            to={`./Support/${element.id}`}
            item
            xs={12}
            
            className="pointer"
            style={{ marginTop: "32px",color: "#000",textDecoration:"none",cursor: "pointer"}}
          >
            <Grid className={classes.rightContent}>
              <Grid item className={classes.Titles}>
                <Typography className={classes.Title}>
                  {element.Title}
                </Typography>
                <Typography className={classes.Date}>{element.Date}</Typography>
                <Typography className={classes.Time}>{element.Time}</Typography>
              </Grid>
              <Grid className={classes.State}>باز</Grid>
            </Grid>
            <Grid className={classes.Duration}>{element.Duration}</Grid>
          </Link>
        );
      })}




      <Dialog
        style={{ backgroundColor: "rgba(0 ,0 ,0, 0.5)" }}
        maxWidth="xl"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {console.log(AddTickets)}
        {AddTickets ? (
          <AddQRcode
            input={false}
            handleClose={handleClose}
            title=" درخواست QR Code  "
            style={{ width: "100%" }}
          />
        ) : (
          <AddTicket
            input={true}
            handleClose={handleClose}
            title=" تیکت جدید"
            style={{ width: "100%" }}
          />
        )}
      </Dialog>
    </Grid>
  );
}

export default Support;
