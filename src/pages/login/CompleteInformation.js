import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";
import "./styles.css";
// logo
import logo from "./logo.svg";
import google from "../../images/google.svg";
import { useParams, useHistory } from "react-router";

import { useUserDispatch, loginUser } from "../../context/UserContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthContext from "../context/AuthProvider";
import axios from "axios";

function CompleteInformation(props) {
  var classes = useStyles();
  const history = useHistory();
  const { auth , setAuth } = useContext(AuthContext);

console.log("Auth",auth);
console.log("setAuth",setAuth);
  // global
  var userDispatch = useUserDispatch();
  // const phoneRegExp = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
  const phoneRegExp = /9([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/;

  const validationSchema = yup.object().shape({
    username: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
    firstname: yup.string().required("لطفا نام خود را وارد کنید"),
    lastname: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
    email: yup.string().required("لطفا ایمیل خود را وارد کنید").email("لطفا ایمیل معتبر وارد کنید"),
  });
  const [isLoading, setIsLoading] = useState(false);




  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (data) => {
    const token = localStorage.getItem("id_token")
    const profileName = localStorage.setItem("profileName",data.firstname)
    console.log("firstname",data.firstname);
    console.log("token",token);
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
    try {
      setIsLoading(true);
      const response = await axios
        .post( 
          `http://188.121.121.225/api/auth/profile/${auth.idUser}`,
          data,{
          headers: {
            'token': `${token}` ,
            // withCredentials: true,

          },}
        )
        .then((respons) => respons.data);
       
      userDispatch({ type: "LOGIN_SUCCESS" });

    
    } catch (err) {
      console.log("err.response", err.response);
    }
  };
  // local

  return (
    <div className="containerLogin">
      <div className="contact-form">
        {/* <img alt="" className="avatar" src="/assets/Untitled-1.svg"/> */}
        <h2>اطلاعات</h2>
        <p>اطلاعات شخصی خود را وارد کنید</p>

        <TextField
          style={{ direction: "ltr" }}
          className={classes.TextField}
          label="نام کاربری"
          id="username"
          name="username"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          {...register("username")}
          error={errors.username ? true : false}
        />
        <Typography
          variant="inherit"
          color="secondary"
      
        >
          {errors.username?.message}
        </Typography>

        <TextField
          style={{ direction: "ltr" }}
          className={classes.TextField}
          label="نام"
          id="firstname"
          name="firstname"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          {...register("firstname")}
          error={errors.firstname ? true : false}
        />
        <Typography
          variant="inherit"
          color="textSecondary"
          color="secondary"

        >
          {errors.firstname?.message}
        </Typography>

        <TextField
          style={{ direction: "ltr" }}
          className={classes.TextField}
          label="نام خانوادگی"
          id="lastname"
          name="lastname"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          {...register("lastname")}
          error={errors.lastname ? true : false}
        />
        <Typography
          variant="inherit"
          color="textSecondary"
          color="secondary"

        >
          {errors.lastname?.message}
        </Typography>

        <TextField
          style={{ direction: "ltr" }}
          className={classes.TextField}
          label="ایمیل"
          id="email"
          name="email"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          {...register("email")}
          error={errors.phoneNumber ? true : false}
        />
        <Typography
          variant="inherit"
          color="textSecondary"
          color="secondary"

        >
          {errors.email?.message}
        </Typography>
        <div className={classes.ButtonAndLoading}>
          {isLoading ? (
            <CircularProgress size={40} className={classes.loginLoader} />
          ) : (
            <Button
              // disabled={
              //   loginValue.length === 0

              // }
              variant="contained"
              className={classes.buttonLogin}
              onClick={handleSubmit(onSubmit)}
            >
              ثبت اطلاعات
            </Button>
          )}
        </div>

        {/* <input placeholder="Enter Email" type="email"/>
			            <input placeholder="Enter Password" type="password"/> <input type="submit" value="Sign in"/>
		            	<p><input type="checkbox"/>Remember Me</p> */}
      </div>
    </div>
  );
}

export default withRouter(CompleteInformation);
