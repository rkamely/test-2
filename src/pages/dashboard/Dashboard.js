import React, { Suspense, useEffect, useState } from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styled, useTheme } from "@material-ui/styles";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";
import ApexLineChart from "../charts/components/ApexLineChart";
import BigStat2 from "./components/BigStat/BigStat2";
// import MapBox from "../../components/MapBox/MapBox";
import Title from "../../components/Typography/Title/Title";

import { useQuery, gql } from "@apollo/client";
// import MapBox from "../../components/MapBox/MapBox";
import Calender from "../candoProject/Calender/Calender";
import axios from "axios";
const MapBox = React.lazy(() => import('../../components/MapBox/MapBox'));



export default function Dashboard(props) {
  const classes = useStyles();

  // const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //   }))
  const token = localStorage.getItem("id_token")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `http://185.202.113.165:3000/api/question`,
          {
            headers: {
              token: `${token}`,
            },
          },
        );
        console.log("show response profile", response);
      } catch (error) {
        console.log(error)
      }
      // setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Grid className={classes.container} >
      <Title title="نقشه" variant="h6" />

      {/* map */}

      <Grid item xs={12} className={classes.mapBox}>
      <Suspense fallback={<div>Loading...</div>}>
        <MapBox />
      </Suspense>
      </Grid>

      {/* second part */}

      <Grid container spacing={3} className={classes.secondPart}>



        <Grid item xs={12} className={classes.boxes}  >
          <Grid item lg={3}  xs={12} className={classes.CardItem}>
            <Widget
              color="secondary"
              Img="/assets/Group 11021.png"
              title="تعداد زنبورستان"
              upperTitle
              style={{ fontWeight: 600,   borderRadius:"32px"}}
              bodyClass={classes.fullHeightBody}
              className={classes.card}
            >
              <div style={{margin:"4px 0"}}>
              <Grid
                container
                item
                alignItems="center"
                justifyContent="space-between"
                className={classes.firstTitleBox}
              >
                <Grid item>
                  <Typography
                    variant="p"
                    weight="Bold"
                    noWrap
                    style={{ fontWeight: 600}}
                  >
                    اکانت خودم
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" weight="Bold" noWrap>
                    1
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                item
                alignItems="center"
                justifyContent="space-between"
                className={classes.firstTitleBox}
              >
                <Grid item>
                  <Typography
                    variant="p"
                    weight="Bold"
                    noWrap
                    style={{ fontWeight: 600 }}
                  >
                    اکانت
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" weight="Bold" noWrap>
                    1
                  </Typography>
                </Grid>
              </Grid>
              </div>
            </Widget>
          </Grid>
          <Grid item lg={3} xs={12} className={classes.CardItem}>
            <Widget
              color="secondary"
              Img="/assets/Group 408.svg"
              title="تعداد کندو"
              upperTitle
              style={{ fontWeight: 600}}
              bodyClass={classes.fullHeightBody}
              className={classes.card}
            >
              <Grid
                container
                item
                alignItems="center"
                justifyContent="space-between"
                className={classes.firstTitleBox}
              >
                <Grid item>
                  <Typography
                    variant="p"
                    weight="Bold"
                    noWrap
                    style={{ fontWeight: 600 }}
                  >
                    اکانت خودم
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" weight="Bold" noWrap>
                    1
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                alignItems="center"
                justifyContent="space-between"
                className={classes.firstTitleBox}
              >
                <Grid item>
                  <Typography
                    variant="p"
                    weight="Bold"
                    noWrap
                    style={{ fontWeight: 600 }}
                  >
                    اکانت
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" weight="Bold" noWrap>
                    1
                  </Typography>
                </Grid>
              </Grid>
            </Widget>
          </Grid>
          <Grid item lg={3}  xs={12} className={classes.CardItem}>
            <Widget
              color="secondary"
              Img="/assets/Group 409.svg"
              title="تعداد بازدید"
              upperTitle
              style={{ fontWeight: 600}}
              bodyClass={classes.fullHeightBody}
              className={classes.card}
            >
              <Grid
                container
                item
                alignItems="center"
                justifyContent="space-between"
                className={classes.firstTitleBox}
              >
                <Grid item>
                  <Typography
                    variant="p"
                    weight="Bold"
                    noWrap
                    style={{ fontWeight: 600 }}
                  >
                    اکانت خودم
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" weight="Bold" noWrap>
                    1
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                alignItems="center"
                justifyContent="space-between"
                className={classes.firstTitleBox}
              >
                <Grid item>
                  <Typography
                    variant="p"
                    weight="Bold"
                    noWrap
                    style={{ fontWeight: 600 }}
                  >
                    اکانت
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" weight="Bold" noWrap>
                    1
                  </Typography>
                </Grid>
              </Grid>
            </Widget>
          </Grid>
          <Grid item lg={3} xs={12} className={classes.CardItem}>
            <Widget
              color="secondary"
              Img="./assets/Group 410.svg"
              title="میانگین قدرت"
              upperTitle
              style={{ fontWeight: 600}}
              bodyClass={classes.fullHeightBody}
              className={classes.card}
            >
              <Grid
                container
                item
                alignItems="center"
                justifyContent="space-between"
                className={classes.firstTitleBox}
              >
                <Grid item>
                  <Typography
                    variant="p"
                    weight="Bold"
                    noWrap
                    style={{ fontWeight: 600 }}
                  >
                    اکانت خودم
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" weight="Bold" noWrap>
                    1
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                alignItems="center"
                justifyContent="space-between"
                className={classes.firstTitleBox}
              >
                <Grid item>
                  <Typography
                    variant="p"
                    weight="Bold"
                    noWrap
                    style={{ fontWeight: 600 }}
                  >
                    اکانت
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" weight="Bold" noWrap>
                    1
                  </Typography>
                </Grid>
              </Grid>
            </Widget>
          </Grid>
          <Grid item lg={3}  xs={12} className={classes.CardItem}>
            <Widget
              color="secondary"
              Img="/assets/Group 11021.svg"
              title="تعداد کارها"
              upperTitle
              style={{ fontWeight: 600}}
              bodyClass={classes.fullHeightBody}
              className={classes.card}
            >
              <Grid
                container
                item
                alignItems="center"
                justifyContent="space-between"
                className={classes.firstTitleBox}
              >
                <Grid item>
                  <Typography
                    variant="p"
                    weight="Bold"
                    noWrap
                    style={{ fontWeight: 600 }}
                  >
                    اکانت خودم
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" weight="Bold" noWrap>
                    1
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                alignItems="center"
                justifyContent="space-between"
                className={classes.firstTitleBox}
              >
                <Grid item>
                  <Typography
                    variant="p"
                    weight="Bold"
                    noWrap
                    style={{ fontWeight: 600 }}
                  >
                    اکانت
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" weight="Bold" noWrap>
                    1
                  </Typography>
                </Grid>
              </Grid>
            </Widget>
          </Grid>
        </Grid>








{/* 
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={8}>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box> */}

        {/* <Grid item lg={2} md={4} sm={6} xs={12}>
          <Widget
            color="secondary"
            Img="/assets/hive-svgrepo-com (-1.svg"
            title="تعداد کارها"
            upperTitle
            style={{ fontWeight: 600 }}
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <Grid
              container
              item
              alignItems="center"
              justifyContent="space-between"
              style={{ marginTop: "30px" }}
            >
              <Grid item>
                <Typography
                  variant="p"
                  weight="Bold"
                  noWrap
                  style={{ fontWeight: 600 }}
                >
                  اکانت خودم
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="p" weight="Bold" noWrap>
                  1
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              alignItems="center"
              justifyContent="space-between"
              style={{ marginTop: "30px" }}
            >
              <Grid item>
                <Typography
                  variant="p"
                  weight="Bold"
                  noWrap
                  style={{ fontWeight: 600 }}
                >
                  اکانت
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="p" weight="Bold" noWrap>
                  1
                </Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid> */}

        {/* calender */}
        <Grid item lg={12} xs={12}>
          <Title title="تقویم" variant="h6" />
          <Calender />
        </Grid>




        {/* last part */}
        <Grid
          className={classes.Programs}
          item
          lg={12}
          xs={12}
          style={{ display: "flex" ,gap:"32px"}}
        >
          <Grid className={classes.reminderJob} item lg={12} xs={12}>
            <Title title="يادآوری کارها" variant="h6" />
            {mock.bigState.map((stat, index) => (
              <Grid item lg={12} xs={12} style={{ display: "flex" }}>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  key={stat.product}
                  style={{ marginTop: "12px" }}
                >
                  <BigStat2 {...stat} />
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid className={classes.workDone} item lg={12} xs={12}>
            <Title title="کارهای انجام شده" variant="h6" />
        
            {mock.DoneJob.map((stat, index) => (
              <Grid item lg={12} xs={12} style={{ display: "flex" }}>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  key={index}
                  style={{ marginTop: "12px",gap:"32px"  }}
                >
                  <BigStat {...stat} />
                </Grid>
              </Grid>
            ))}
         
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
