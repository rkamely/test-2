import {
  Button,
  Dialog,
  Grid,

  Slide,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import AddTicket from "./addTicket";
import useStyles from "./Style";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Support() {
  const [open, setOpen] = useState(false);
  const [bardia, setbardia] = useState(true);

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
    setbardia(false);
  };

  const wavebye = () => {
    setbardia(true);
  };

  return (
    <Grid container style={{ padding: "0 40px" }}>
      <Grid item sm={12} className={classes.Button}>
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
      {data.map((element) => {
        return (
          <Link
            to={`./Support/${element.id}`}
            item
            sm={12}
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
        {console.log(bardia)}
        {bardia ? (
          <AddTicket
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
