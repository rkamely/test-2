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
import axios from "../api/axios";
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
    code: yup.string().required("لطفا کد تایید را وارد کنید"),
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
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify({ code: data.code, mobile: mobile }, null, 2));
    // history.push("/login/step2")
    console.log("mobileNumber", mobile);
    // removeAuthtoken()

    //کد زیر اعمال شود
    try {
      const response = await axios
        .post(
          "http://188.121.121.225/api/auth/verify",
          { code: data.code, mobile: mobile },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          },
        )
        .then((respons) => respons.data);
        console.log("response smsVerify",response);
        const token = response?.token;
        const idUser =response.data._id
        console.log("idUser",idUser);
        const newPerson = response.data.username
        const isStaff = response.data.isStaff
        localStorage.setItem("isStaff",isStaff);
        console.log("isStaff",isStaff);
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
      console.log("token", token);
      console.log("response", response.data.newUser);
      console.log(response?.token);
      console.log(response?.message);
    } catch (err) {
      console.log("err.response", err.response);
      if (!err?.response) {
        setErrMsg(
          " پاسخی از سرور دریافت نشد لطفا از وصل بودن اینترنت خود اطمینان حاصل نمایید و مجدد تلاش کنید",
        );
      } else if (err.response?.status === 400) {
        setErrMsg("لطفا کد تایید را درست وارد نمایید");
        setTimeout(() => {
          setErrMsg("");
        }, 3000);
      } else {
        setErrMsg("لطفا کد تایید را درست وارد نمایید");
      }
      errRef.current.focus();
    }

    


    // loginUser(userDispatch, loginValue, props.history, setIsLoading, setErrMsg);
  };


  console.log("auuuuuuutttttthhhhhh",auth);

  return (
    <div className="containerLogin">
      <div className="contact-form">
        {errMsg ? (
          <p ref={errRef} className="errmsg" aria-live="assertive">
            {errMsg}
          </p>
        ) : null}

        {/* <img alt="" className="avatar" src="/assets/Untitled-1.svg"/> */}
        <h2>کد تایید</h2>
        <p>
          کد تایید ارسال گردید
          <br />
          برای ادامه کد تایید ارسال شده را وارد کنید.
        </p>

        <TextField
          style={{ direction: "ltr" }}
          className={classes.TextField}
          label="کد تایید"
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
              fontWeight: "600",
              cursor: "pointer",
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
            ثبت کد تایید
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