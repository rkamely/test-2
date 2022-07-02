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

function Calender() {
  const classes = useStyles();
  const [calender, setCalender] = useState([]);
  const [value, setValue] = useState(moment());
  console.log("value", value);

  useEffect(() => {
    setCalender(buildCalender(value));
  }, [value]);


  //   console.log("startDay", startDay);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <CalenderHeader value={value} setValue={setValue} />
      </div>
      <Divider />
      <div className={classes.body}>
      <Swiper
   
      spaceBetween={20}
      slidesPerView={7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      // scrollbar={{ draggable: true }}
    >
      {  console.log("calender",calender)}
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
      </div>
    </div>
  );
}

export default Calender;
