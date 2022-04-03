import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Widget from "../../../components/Widget/Widget";
import useStyles from "./Style";

function RightTopCard() {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      style={{ fontWeight: 600,height:"480px"}}
    >
  

      <Widget
        color="secondary"
        style={{
          fontWeight: 600, 
          width: "100%",        
        }}
      >
        <Grid
          item
          alignItems="center"
          justifyContent="space-between"
          className={classes.greenHeader}
        >
          <Grid item>
            <Typography
              variant="p"
              weight="Bold"
              noWrap
              style={{ fontWeight: 600 }}
            >
              بازدید فعلی
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="p" weight="Bold" noWrap>
              مهلت تا سه روز آینده
            </Typography>
          </Grid>
        </Grid>







        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            marginTop: "50px",
            justifyContent: "space-between",
            alignItems: "center",
           
          }}
        >

          <Grid
            item
            sm={3}
            xs={12}
            color="secondary"
            className={classes.cards}
            style={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
          

            }}
          >
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                تاریخ بازدید
              </Typography>
            </Grid>

            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/refresh-svgrepo-com-1.svg" />
            </Grid>
          </Grid>













          <Grid
            item
            sm={3}
            xs={12}
            color="secondary"
            className={classes.cards}
            style={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                تاریخ بازدید
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/refresh-svgrepo-com-1.svg" />
            </Grid>
          </Grid>

          <Grid
            item
            sm={3}
            xs={12}
            color="secondary"
            className={classes.cards}
            style={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                تاریخ بازدید
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/refresh-svgrepo-com-1.svg" />
            </Grid>
          </Grid>

        </Grid>
















        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            marginTop: "32px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            item
            sm={3}
            xs={12}
            color="secondary"
            className={classes.cards}
            style={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                تاریخ بازدید
              </Typography>
            </Grid>

            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/refresh-svgrepo-com-1.svg" />
            </Grid>
          </Grid>

          <Grid
            item
            sm={3}
            xs={12}
            color="secondary"
            className={classes.cards}
            style={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                تاریخ بازدید
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/refresh-svgrepo-com-1.svg" />
            </Grid>
          </Grid>

          <Grid
            item
            sm={3}
            xs={12}
            color="secondary"
            className={classes.cards}
            style={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                تاریخ بازدید
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/refresh-svgrepo-com-1.svg" />
            </Grid>
          </Grid>
        </Grid>
        
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            marginTop: "32px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            item
            sm={3}
            xs={12}
            color="secondary"
            className={classes.cards}
            style={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                تاریخ بازدید
              </Typography>
            </Grid>

            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/refresh-svgrepo-com-1.svg" />
            </Grid>
          </Grid>

          <Grid
            item
            sm={3}
            xs={12}
            color="secondary"
            className={classes.cards}
            style={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                تاریخ بازدید
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/refresh-svgrepo-com-1.svg" />
            </Grid>
          </Grid>

          <Grid
            item
            sm={3}
            xs={12}
            color="secondary"
            className={classes.cards}
            style={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                تاریخ بازدید
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/refresh-svgrepo-com-1.svg" />
            </Grid>
          </Grid>
        </Grid>
      </Widget>
    </Grid>
  );
}

export default RightTopCard;
