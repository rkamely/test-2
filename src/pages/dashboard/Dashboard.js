import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
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
import Maps from "../maps/Maps";
import MapComponent from "../maps/MapComponent";
import MapBox from "../../components/MapBox/MapBox";
import Title from "../../components/Typography/Title/Title";

const mainChartData = getMainChartData();
const PieChartData = [
  { name: "Group A", value: 400, color: "primary" },
  { name: "Group B", value: 300, color: "secondary" },
  { name: "Group C", value: 300, color: "warning" },
  { name: "Group D", value: 200, color: "success" },
];

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <>
    
      <Title title="خانه" variant="h5"/>

      <Grid container spacing={3} style={{marginTop:"8px"}}>
        {/* <Grid item  xs={12} style={{border:"1px solid red"}}>
          <MapBox/>
        </Grid> */}
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Widget
            color="secondary"
            Img="/assets/hive-svgrepo-com (-1.svg"
            title="تعداد زنبورستان"
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
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Widget
            color="secondary"
            Img="/assets/hive-svgrepo-com (3).svg"
            title="تعداد کندو"
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
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Widget
            color="secondary"
            Img="/assets/Group 11039.svg"
            title="تعداد بازدید"
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
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Widget
            color="secondary"
            Img="/assets/power-svgrepo-com-1.svg"
            title="میانگین قدرت"
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
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Widget
            color="secondary"
            Img="/assets/12425575071619191957.svg"
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
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
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
        </Grid>






        
        {/* <Grid item xs={12}>
          <Widget
            bodyClass={classes.mainChartBody}
            header={
              <div className={classes.mainChartHeader}>
                <Typography
                  variant="h5"
                  color="text"
                  colorBrightness="secondary"
                >
                  Daily Line Chart
                </Typography>
                <div className={classes.mainChartHeaderLabels}>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="warning" />
                    <Typography className={classes.mainChartLegentElement}>
                      Tablet
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="primary" />
                    <Typography className={classes.mainChartLegentElement}>
                      Mobile
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="secondary" />
                    <Typography className={classes.mainChartLegentElement}>
                      Desktop
                    </Typography>
                  </div>
                </div>
                <Select
                  value={mainChartState}
                  onChange={(e) => setMainChartState(e.target.value)}
                  input={
                    <OutlinedInput
                      labelWidth={0}
                      classes={{
                        notchedOutline: classes.mainChartSelectRoot,
                        input: classes.mainChartSelect,
                      }}
                    />
                  }
                  autoWidth
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                </Select>
              </div>
            }
          >
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
              <ComposedChart
                margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                data={mainChartData}
              >
                <YAxis
                  ticks={[0, 2500, 5000, 7500]}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <XAxis
                  tickFormatter={(i) => i + 1}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <Area
                  type="natural"
                  dataKey="desktop"
                  fill={theme.palette.background.light}
                  strokeWidth={0}
                  activeDot={false}
                />
                <Line
                  type="natural"
                  dataKey="mobile"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={false}
                  activeDot={false}
                />
                <Line
                  type="linear"
                  dataKey="tablet"
                  stroke={theme.palette.warning.main}
                  strokeWidth={2}
                  dot={{
                    stroke: theme.palette.warning.dark,
                    strokeWidth: 2,
                    fill: theme.palette.warning.main,
                  }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Widget>
        </Grid> */}

        <Grid
          className={classes.Programs}
          item
          lg={12}
          xs={12}
          style={{ display: "flex" }}
        >
          <Grid className={classes.reminderJob} item lg={12} xs={12}>
           <Title title="يادآوری کارها" variant="h6"/>
            {mock.bigState.map((stat, index) => (
              <Grid item lg={12} xs={12} style={{ display: "flex" }}>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  key={stat.product}
                  style={{ marginTop: "16px" }}
                >
                  <BigStat2 {...stat} />
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid className={classes.workDone} item lg={12} xs={12}>
          <Title title="کارهای انجام شده" variant="h6"/>
            {mock.DoneJob.map((stat, index) => (
              <Grid item lg={12} xs={12} style={{ display: "flex" }}>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  key={index}
                  style={{ marginTop: "16px" }}
                >
                  <BigStat {...stat} />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* <Grid item xs={12}>
          <Widget
            title="Support Requests"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>

        <Grid item xs={12} md={12}>
          <Widget title="Apex Line Chart" upperTitle noBodyPadding fullWidth>
            <ApexLineChart />
          </Widget>
        </Grid> */}
        {/* <Maps /> */}
    {/* <MapComponent/> */}
      </Grid>
    </>
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
