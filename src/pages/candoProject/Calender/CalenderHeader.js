import { ArrowBackIosRounded, ArrowForwardIosRounded, ArrowRightTwoTone } from "@material-ui/icons";
import React from "react";
import useStyles from "./styles";

function CalenderHeader({ value, setValue }) {
    function currMnthName() {
        return value.format("MMMM");
      }
      function currYear() {
        return value.format("YYYY");
      }
      function prevDay() {
        return value.clone().subtract(1, "day");
      }
      function nextDay() {
        return value.clone().add(1, "day");
      }
      const classes = useStyles();

  return (
    <div className={classes.Header}>
      <div className={classes.arrow} onClick={() => setValue(prevDay())}>
        <ArrowForwardIosRounded/>
      </div>
      <div style={{fontWeight:"600"}}>
        {currMnthName()}
        {currYear()}
      </div>
      <div className={classes.arrow} onClick={() => setValue(nextDay())}>
      <ArrowBackIosRounded/>
      </div>
    </div>
  );
}

export default CalenderHeader;
