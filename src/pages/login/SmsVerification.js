import React, { useContext, useEffect, useRef, useState } from "react";
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
import axios, { axiosInstance } from "../api/axios";
import AuthContext from "../context/AuthProvider";

// styles
import useStyles from "./styles";
import "./styles.css";

import { useParams, useHistory } from "react-router";

import { useUserDispatch, loginUser } from "../../context/UserContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { gql, useMutation } from "@apollo/client";
import { useAuthToken } from "../../components/config/auth";

function SmsVerification(props) {
  const {auth, setAuth } = useContext(AuthContext);

  const classes = useStyles();
  const history = useHistory();
  const [loginValue, setLoginValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();
  // global
  const userDispatch = useUserDispatch();
  // const mobileRegExp = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
  const mobileRegExp = /09([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/;

  const validationSchema = yup.object().shape({
    code: yup.string().required("لطفا کد تائید را وارد کنید"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [_, setAuthToken, removeAuthtoken] = useAuthToken();

  




  const onSubmit = async (data) => {
    const mobile = localStorage.getItem("data");



    //کد زیر اعمال شود
    try {
      const response = await axiosInstance
        .post(
          "/auth/verify",
          { code: data.code, mobile: "0"+mobile },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          },
        )
        .then((respons) => respons.data);
        localStorage.setItem("profileName",response.data.firstname)
        localStorage.setItem("email",response.data.email)
        localStorage.setItem("lastname",response.data.lastname)
        const token = response?.token;
        const idUser =response.data._id
        const newPerson = response.data.username
        const isStaff = response.data.isStaff
        localStorage.setItem("isStaff",isStaff);
      // setAuth({mobile:mobile,code:data.code,token})

      if (token) {
        if(newPerson && newPerson !== ""){
          setAuth({ mobile: mobile, code: data.code, token  , newUser:newPerson, idUser:idUser});
          localStorage.setItem("id_token", token);
          userDispatch({ type: 'LOGIN_SUCCESS' })


        } else {
          localStorage.setItem("id_token", token);
          setAuth({ mobile: mobile, code: data.code, token  , newUser:newPerson, idUser:idUser});
          history.push("/login/CompleteInformation")
        }

      }
      //  userDispatch({ type: 'LOGIN_SUCCESS' })

    } catch (err) {

      if (!err?.response) {
        setErrMsg(
          " پاسخی از سرور دریافت نشد لطفا از وصل بودن اینترنت خود اطمینان حاصل نمایید و مجدد تلاش کنید",
        );
      } else if (err.response?.status === 400) {
        setErrMsg("لطفا کد تائید را درست وارد نمایید");
        setTimeout(() => {
          setErrMsg("");
        }, 3000);
      } else {
        setErrMsg("لطفا کد تائید را درست وارد نمایید");
      }
      errRef.current.focus();
    }

    


    // loginUser(userDispatch, loginValue, props.history, setIsLoading, setErrMsg);
  };



  return (
    <div className="containerLogin">
       <div className={classes.candoTopItem} > 
          <div className={classes.candoLogo} >
          <img src="/assets/Kandoo1+-Black.svg" alt="عکس زنبور" width="100px" />
          </div>
          <div >
            <h1 className={classes.candoTopTitle}>کندووان پلاس</h1>
            <h2 className={classes.candoTopsubTitle}>مدیریت هوشمند زنبورستان</h2>
          </div>
        </div>
      <div className="contact-form">
        {errMsg ? (
          <p ref={errRef} className="errmsg" aria-live="assertive">
            {errMsg}
          </p>
        ) : null}

        {/* <img alt="" className="avatar" src="/assets/Untitled-1.svg"/> */}
        <h2 >کد تائید</h2>
        <p>
          کد تائید ارسال گردید.
          <br />
          برای ادامه کد تائید ارسال شده را وارد کنید.
        </p>

        <TextField
          // style={{ direction: "ltr" }}
          className={classes.TextField}
          label="کد تائید"
          onChange={(e) => setLoginValue(e.target.value)}
          id="code"
          type="number"
          name="code"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          {...register("code")}
          error={errors.code ? true : false}
        />
        <Typography
          variant="inherit"
          color="textSecondary"
          style={{ color: "red" }}
        >
          {errors.code?.message}
        </Typography>
        <br />
        <Typography
          variant="p"
          color="textSecondary"
          style={{ color: "white", fontFamily: "Shabnam", fontSize: "0.8rem" }}
        >
          شماره تلفن اشتباه است؟
          <span
            style={{
              color: "rgb( 227 156 0  )",
              fontWeight: "bold",
              cursor: "pointer",
              marginRight:"4px"
            }}
            onClick={() => history.push("/login")}
          >
             ویرایش 
          </span>
        </Typography>

        {isLoading ? (
          <CircularProgress size={26} className={classes.loginLoader} />
        ) : (
          <Button
            // disabled={
            //   loginValue.length === 0

            // }
            variant="contained"
            className={classes.buttonLogin}
            onClick={handleSubmit(onSubmit)}
          >
            ثبت کد تائید
          </Button>
        )}

        {/* <input placeholder="Enter Email" type="email"/>
        <input placeholder="Enter Password" type="password"/> <input type="submit" value="Sign in"/>
        <p><input type="checkbox"/>Remember Me</p> */}
      </div>
    </div>
  );
}

export default withRouter(SmsVerification);