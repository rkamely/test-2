import React, { useState, useEffect } from "react";
import moment from "jalali-moment";
import useStyles from "./styles";
import buildCalender from "./buildCalender";
import "./Calender.css";
import CalenderHeader from "./CalenderHeader";
import dayStyles from "./dayStyle";
import { Divider } from "@material-ui/core";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@material-ui/icons";

function Calender() {
  const classes = useStyles();
  const [calender, setCalender] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalender(buildCalender(value));
  }, [value]);
  function prevDay() {
    return value.clone().subtract(1, "days");
  }
  function nextDay() {
    return value.clone().add(1, "days");
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <CalenderHeader value={value} setValue={setValue} />
      </div>
      <Divider />
      <div className={classes.body} style={{display:"flex",alignItems:"center"}}>
      <div className={classes.arrow} onClick={() => setValue(prevDay())}>
        <ArrowForwardIosRounded/>
      </div>
      {/* <ArrowForwardIosRounded onClick={() => setValue(prevDay())}/> */}

      <Swiper
   
      spaceBetween={20}
      slidesPerView={7}
      // scrollbar={{ draggable: true }}
    >
      <div style={{border:"2px solid red"}}>
        {calender.map((week) => (
        
          <div className={classes.day} >
            {week.map((day) => (
                <SwiperSlide >
                <div
                className={classes.dayBox}

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
                </SwiperSlide>
            ))}
          </div>
        ))}
        </div>
      </Swiper>
      <div className={classes.arrow} onClick={() => setValue(nextDay())}>
      <ArrowBackIosRounded/>
      </div>
        {/* <ArrowBackIosRounded  onClick={() => setValue(nextDay())}/> */}

      </div>
      
    </div>
  );
}

export default Calender;
