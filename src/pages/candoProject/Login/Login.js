import { Button, TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./Style";

function LoginWithPhone() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.box}>
        <h1>ورود</h1>
        <p>
          برای وردو به کنووان پلاس شماره تلفن همراه خود را وارد کنید تا کد تایید
          برای شما پیامک شود
        </p>
        <TextField>شماره موبایل</TextField>
        <Button>دریافت کد تایید</Button>
      </div>
    </div>
  );
}

export default LoginWithPhone;
