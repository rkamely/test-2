import React, { useState, useEffect } from "react";
import moment from "jalali-moment";
import useStyles from "./styles";
import buildCalender from "./buildCalender";
import "./Calender.css";
import CalenderHeader from "./CalenderHeader";
import dayStyles from "./dayStyle";
import { Divider } from "@material-ui/core";
import { ArrowForwardIosRounded } from "@material-ui/icons";
import Slider from "react-slick";
function Calender() {
  const classes = useStyles();
  const [calender, setCalender] = useState([]);
  const [value, setValue] = useState(moment());
  console.log("value", value);

  useEffect(() => {
    setCalender(buildCalender(value));
  }, [value]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  //   console.log("startDay", startDay);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <CalenderHeader value={value} setValue={setValue} />
      </div>
      <Divider />
      <div className={classes.body}>
        {calender.map((week) => (
          <div className={classes.day}>
            {week.map((day) => (
                <div
                  style={{ marginRight: "8px", border: "1px solid blue" }}
                  onClick={() => setValue(day)}
                >
                  {/* <div className={classes.day}>{day.format("MMMM").toString()}</div> */}

                  <div className={classes.day}>
                    {day.format("dddd").toString()}
                  </div>
                  <div
                    className={dayStyles(day, value)}
                    //   className={
                    //     value.isSame(day, "day") ? classes.daySelected : classes.day
                    //   }
                  >
                    {day.format("D").toString()}
                  </div>
                </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calender;
