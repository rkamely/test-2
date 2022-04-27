import {
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import MaterialTable from "material-table";
import React, { useState } from "react";
import {
  Area,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";
import Dot from "../../../components/Sidebar/components/Dot";
import Widget from "../../../components/Widget/Widget";
// import useStyles from "../../dashboard/styles";
import useStyles from "./Style";
import TableDiagram from "./tableDiagram";

function Diagram() {
  const data = [
    {
      day: "10:52",
      week: "شنبه",
      bardia: 200,
      total2: 200,
      total: {
        monthly: 423,
        weekly: 200,
        daily: 199,
        percent: { value: 3.7, profit: false },
      },
      color: "primary",

      registrations: {
        monthly: { value: 830, profit: false },
        weekly: { value: 215, profit: true },
        daily: { value: "به موقع", profit: true },
      },
      bounce: {
        monthly: { value: 4.5, profit: false },
        weekly: { value: 3, profit: true },
        daily: { value: 3.25, profit: true },
      },
    },
    {
      day: "12:52",
      week: "یک شنبه",
      bardia: 300,
      total2: 300,
      total: {
        monthly: 600,
        weekly: 800,
        daily: 280,
        percent: { value: 3.7, profit: false },
      },
      color: "primary",
      registrations: {
        monthly: { value: 830, profit: false },
        weekly: { value: 215, profit: true },
        daily: { value: "به موقع", profit: true },
      },
      bounce: {
        monthly: { value: 4.5, profit: false },
        weekly: { value: 3, profit: true },
        daily: { value: 3.25, profit: true },
      },
    },
    {
      day: "15:52",
      week: "دوشنبه",
      bardia: 800,
      total: {
        monthly: 500,
        weekly: 900,
        daily: 550,
        percent: { value: 3.7, profit: false },
      },
      color: "primary",
      registrations: {
        monthly: { value: 830, profit: false },
        weekly: { value: 215, profit: true },
        daily: { value: "به موقع", profit: true },
      },
      bounce: {
        monthly: { value: 4.5, profit: false },
        weekly: { value: 3, profit: true },
        daily: { value: 3.25, profit: true },
      },
    },
    // {
    //   name: 'شنبه',
    //   temperature: 400,
    //   humidity: 240,
    //   amt: 240,
    // },
    // {
    //   name: 'یکشنبه',
    //   temperature: 300,
    //   humidity: 139,
    //   amt: 221,
    // },
    // {
    //   name: 'دوشنبه',
    //   temperature: 200,
    //   humidity: 980,
    //   amt: 229,
    // },
    // {
    //   name: 'سه شنبه',
    //   temperature: 278,
    //   humidity: 390,
    //   amt: 200,
    // },
    // {
    //   name: 'چهارشنبه',
    //   temperature: 189,
    //   humidity: 480,
    //   amt: 218,
    // },
    // {
    //   name: 'پنجشنبه',
    //   temperature: 230,
    //   humidity: 380,
    //   amt: 250,
    // },
    // {
    //   name: 'جمعه',
    //   temperature: 349,
    //   humidity: 430,
    //   amt: 210,
    // },
  ];
  var classes = useStyles();
  var theme = useTheme();
  var [mainChartState, setMainChartState] = useState("monthly");
  // const mainChartData = getMainChartData();
  const [date, setDate] = useState(mainChartState);
  // function getMainChartData() {
  //   var resultArray = [];
  //   var tablet = getRandomData(31, 350, 650, 750, 100);
  //   var desktop = getRandomData(31, 150, 750, 750, 150);
  //   var mobile = getRandomData(31, 150, 750, 750, 150);

  //   for (let i = 0; i < tablet.length; i++) {
  //     resultArray.push({
  //       tablet: tablet[i].value,
  //       desktop: desktop[i].value,
  //       mobile: mobile[i].value,
  //     });
  //   }

  //   return resultArray;
  // }
  // function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  //   var array = new Array(length).fill();
  //   let lastValue;

  //   return array.map((item, index) => {
  //     let randomValue = Math.floor(Math.random() * multiplier + 1);

  //     while (
  //       randomValue <= min ||
  //       randomValue >= max ||
  //       (lastValue && randomValue - lastValue > maxDiff)
  //     ) {
  //       randomValue = Math.floor(Math.random() * multiplier + 1);
  //     }

  //     lastValue = randomValue;

  //     return { value: randomValue };
  //   });
  // }

  var tooltip;
  const CustomizedTooltip = ({ active, payload, label }) => {
    console.log("active", active);
    console.log("payload", payload);
    console.log("label", label);
    console.log("tooltip", tooltip);
    if (!active || !tooltip) return null;
    for (const bar of payload)
      if (bar.dataKey === tooltip)
        return (
          <div
            style={{
              background: bar.color,
              color: "#fff",
              padding: " 8px",
              borderRadius: "16px",
            }}
          >
            {bar.name}
            <br />
            {bar.value.toFixed(2)}
          </div>
        );
    return null;
  };
  const openDatepicker = () => {};
  return (
    <Grid item xs={12}>
      <Widget
        bodyClass={classes.mainChartBody}
        header={
          <Grid item xs={12} className={classes.mainChartHeader}>
            {/* <div className={classes.mainChartHeaderLabels}>
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
            </div> */}
            <Grid>
              <Select
                className={classes.select}
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
                <MenuItem value="daily">روزانه</MenuItem>
                <MenuItem value="weekly">هفتگی</MenuItem>
                <MenuItem value="monthly">ماهیانه</MenuItem>
              </Select>
            </Grid>

            <Grid className={classes.leftHeader}>
              <Grid>
                <Typography
                  variant="p"
                  color="text"
                  colorBrightness="secondary"
                  style={{ fontFamily: "Shabnam" }}
                >
                  تاریخ شروع
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  variant="p"
                  color="text"
                  colorBrightness="secondary"
                  style={{ fontFamily: "Shabnam" }}
                  className={classes.date}
                >
                  1400/03/20
                </Typography>
              </Grid>
              <Grid>
                <img
                  src="./assets/calender-svgrepo-com.svg"
                  onClick={openDatepicker}
                />
              </Grid>
            </Grid>
          </Grid>
        }
      >
        {/* Diagram */}
        <ResponsiveContainer width="100%" minWidth={450} height={350}>
          <ComposedChart
            margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
            data={data}
          >
            <YAxis
              allowDataOverflow
              domain={[0, 1000]}
              type="number"
              yAxisId="1"
            />
            <YAxis
              orientation="left"
              allowDataOverflow
              domain={[0, 1000]}
              type="number"
            />
            <YAxis
              orientation="right"
              allowDataOverflow
              domain={[0, 1000]}
              type="number"
              yAxisId="3"
            />
            {/* <Tooltip content={<CustomizedTooltip />} /> */}
            <Tooltip />
            <XAxis
              // type="number"
              // ticks={[10, 20, 30 ,100]}
              // domain={[10, 100]}
              dataKey="week"
              tickFormatter={[]}
              tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
              stroke={theme.palette.text.hint + "80"}
              tickLine={false}
            />
            {data.map((el) => {
              console.log(el.total["monthly"]);
              return (
                <Line
                  // label={{ fill: "red", marginTop: "16px" }}
                  dataKey="total[monthly]"
                  stroke={theme.palette.red.main}
                  strokeWidth={2}
                  name="رطوبت"
                  onMouseOver={() => (tooltip = "mobile")}
                  dot={{
                    stroke: theme.palette.primary.dark,
                    strokeWidth: 2,
                    fill: theme.palette.primary.main,
                  }}
                />
              );
            })}
            {console.log("data.total", data.total)}
            {console.log("date", date)}
            <Line
              type="natural"
              // dataKey={data.total(mainChartState)}
              stroke={theme.palette.secondary.main}
              dataKey="total[daily]"
              strokeWidth={2}
              name="وزن"
              onMouseOver={() => (tooltip = "desktop")}
              dot={{
                stroke: theme.palette.primary.dark,
                strokeWidth: 2,
                fill: theme.palette.primary.main,
              }}
            />
            <Line
              // label
              type="natural"
              dataKey="total[weekly]"
              stroke={theme.palette.warning.main}
              strokeWidth={2}
              name="دما"
              onMouseOver={() => (tooltip = "tablet")}
              dot={{
                stroke: theme.palette.primary.dark,
                strokeWidth: 2,
                fill: theme.palette.primary.main,
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>

        <Grid
          item
          xs={12}
          className={classes.mainChartHeaderLabels}
        >
          <div className={classes.mainChartHeaderLabel}>
            <Dot color="warning" className={classes.dot}/>
            
            <Typography className={classes.mainChartLegentElement}>
              رطوبت
            </Typography>
          </div>
          <div className={classes.mainChartHeaderLabel}>
            <Dot color="primary" className={classes.dot}/>
            <Typography className={classes.mainChartLegentElement}>
              وزن
            </Typography>
          </div>
          <div className={classes.mainChartHeaderLabel}>
            <Dot color="red" className={classes.dot}/>
            <Typography className={classes.mainChartLegentElement}>
              دما
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} style={{ borderRadius: "8px", marginTop: "16px" }}>
          <TableDiagram />
        </Grid>
      </Widget>
    </Grid>
  );
}

export default Diagram;
