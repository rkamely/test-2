import { Avatar, Grid, Typography } from "@material-ui/core";
import React from "react";
import Widget from "../../../components/Widget/Widget";
import ApexLineChart from "../../charts/components/ApexLineChart";
import PieCharts from "../../charts/PieCharts";
import useStyles from "./Style";
function Audio() {
  const classes = useStyles();
  return (
    <Grid
      item
 
      xs={12}
      style={{
        fontWeight: 600,

        margin: "16px 0",
      }}
    >

      <Widget color="secondary" style={{ fontWeight: 600, width: "100%" }}>
        {/* toplevel */}
       <Grid item xs={12} > <ApexLineChart/> </Grid>
        {/* midlevel */}
      <Grid
        className={classes.midPartAudio}
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
            xs={6}
          
            alignItems="center"
            justifyContent="space-around"
            style={{ display: "flex" }}
          >
            <Grid
            
              item
              style={{ display: "flex" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="p" weight="Bold" noWrap>
                احتمال بچه‌دهی
              </Typography>
            </Grid>
            <Grid item alignItems="center" justifyContent="space-between">
              <PieCharts />
            </Grid>
          </Grid>

          <Grid
            item
            xs={6}
            alignItems="center"
            justifyContent="space-around"
            style={{ display: "flex" }}
          >
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                احتمال وجود ملکه
              </Typography>
            </Grid>
            <Grid item alignItems="center" justifyContent="space-between">
            <PieCharts />
            </Grid>
          </Grid>
        </Grid>

        {/* bottom */}
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            margin: "32px 0px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            item
            sm={2}
            xs={12}
            color="secondary"
            className={classes.Soundscards}
            style={{
              fontWeight: 600,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
              style={{ width: "30px" }}
            >
              <img src="/assets/microphone-svgrepo-com (2).svg" width="100%" />
            </Grid>
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                صدای کندو
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sm={2}
            xs={12}
            color="secondary"
            className={classes.Soundscards}
            style={{
              fontWeight: 600,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
              style={{ width: "50px" }}
            >
              <img src="/assets/note-svgrepo-com (3).svg" width="100%" />
            </Grid>
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                یادداشت متنی
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sm={2}
            xs={12}
            color="secondary"
            className={classes.Soundscards}
            style={{
              fontWeight: 600,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
              style={{ width: "60px" }}
            >
              <img src="/assets/camera-svgrepo-com (1).svg" width="100%" />
            </Grid>
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                عکس کندو
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sm={2}
            xs={12}
            color="secondary"
            className={classes.Soundscards}
            style={{
              fontWeight: 600,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
              style={{ width: "50px" }}
            >
              <img src="/assets/Group 11027.svg" width="100%" />
            </Grid>
            <Grid item alignItems="center" justifyContent="space-between">
              <Typography variant="p" weight="Bold" noWrap>
                یادداشت صوتی
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Widget>
    </Grid>
  );
}
export default Audio;
