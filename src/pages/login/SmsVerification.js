import React, { useContext, useRef, useState } from "react";
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
import axios from "../api/axios"
import  AuthContext from  "../context/AuthProvider"

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
  const { setAuth } = useContext(AuthContext)

  const classes = useStyles();
  const history = useHistory();
  const [loginValue, setLoginValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [errMsg, setErrMsg] = useState('');
  const errRef = useRef();


  // global
  const userDispatch = useUserDispatch();
  // const phoneRegExp = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
  const phoneRegExp = /9([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/;

  const validationSchema = yup.object().shape({
    verifyNumber: yup.string().required("لطفا کد تایید را وارد کنید"),
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




  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
    // history.push("/login/step2")
    const phone=localStorage.getItem("data")
    console.log("phoneNumber",phone)
    // removeAuthtoken()

//کد زیر اعمال شود
    // try{
    //      const response = axios.post("",JSON.stringify({phone:phone,verifyNumber:data.verifyNumber}),{
    //       headers: { 'Content-Type': 'application/json' },
    //       withCredentials: true
    //  })
    //       const accessToken = response?.data?.accessToken;   
    //       setAuth({phone:phone,verifyNumber:data.verifyNumber,accessToken})
    //       // if(accessToken){
    //       //   userDispatch({ type: 'LOGIN_SUCCESS' })
    //       // }
    //        userDispatch({ type: 'LOGIN_SUCCESS' })
    //        console.log(response.data);
    //        console.log(response?.accessToken);
    //        console.log(JSON.stringify(response))      
    // }catch (err) {
    //   if (!err?.response) {
    //       setErrMsg(' پاسخی از سرور دریافت نشد لطفا از وصل بودن اینترنت خود اطمینان حاصل نمایید و مجدد تلاش کنید');
    //   } else {
    //       setErrMsg('ارتباط با سرور برقرار نشد لطفا مجدد تلاش کنید')
    //   }
    //   errRef.current.focus();

    // };



        loginUser(userDispatch, loginValue, props.history, setIsLoading, setErrMsg);
};
  // local



  
  // const [verifyOtp, { loading }] = useMutation(VERIFY_OTP,{
    
  //   onCompleted:(data)=>{
  //     console.log("login",loginValue)
  //     console.log("data",data)
  //     console.log("iscorrectToken?",data.verifyOtp.token);
  //     // localStorage.setItem('id_token', data.verifyOtp.token)
  //     setAuthToken(data.verifyOtp.token);
  //     setError(null)
  //     setIsLoading(false)
  //     userDispatch({ type: 'LOGIN_SUCCESS' })
  //   },
  //   onError:(data)=>{
  //     console.log("data",data)
  //     userDispatch({ type: "LOGIN_FAILURE" });
  //     setError(true);
  //     setIsLoading(false);
  //   }   
  // });
  

  return (
    <div className="containerLogin">
      <div className="contact-form">
      {errMsg? <p ref={errRef} className="errmsg" aria-live="assertive">{errMsg}</p>:null}

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
          id="verifyNumber"
          name="verifyNumber"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          {...register("verifyNumber")}
          error={errors.verifyNumber ? true : false}
        />
        <Typography
          variant="inherit"
          color="textSecondary"
          style={{ color: "red" }}
        >
          {errors.verifyNumber?.message}
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
