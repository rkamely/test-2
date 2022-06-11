import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Widget from "../../../components/Widget/Widget";
import useStyles from "./Style";

function RightTopCard() {
  const classes = useStyles();
  const [cards,setCards]=useState([
    {
    title:"تاریخ بازدید",
    icon:""
  },
  

 ]
  )




  
  return (
<>

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






<>
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
                فعالیت کندو
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/web-app.svg" />
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
                قدرت کندو
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/power-svgrepo-com.svg" />
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
                تعداد قاب
              </Typography>
            </Grid>

            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/production.svg" />
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
                سن کندو
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/arrow-growth-svgrepo-com.svg" />
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
                نوع کندو
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/hive-svgrepo-com (2).svg" />
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
                تغذیه
              </Typography>
            </Grid>

            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/opening-aperture-svgrepo-com.svg" />
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
                بیماری
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/sickness-svgrepo-com.svg" />
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
                درمان فعلی
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/medicine-svgrepo-com.svg" />
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
                نوع ملکه
              </Typography>
            </Grid>

            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/Component 24 – 53.svg" />
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
                سلامت کندو
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifyContent="space-between"
              //   className={classes}
            >
              <img src="/assets/Group 11026.svg" />
            </Grid>
          </Grid>
        </Grid>

        
</>


      </Widget>
      
    </Grid>

</>
  );
}

export default RightTopCard;
