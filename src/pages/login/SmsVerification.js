
import React, { useState } from "react";
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
import "./styles.css"
// logo
import logo from "./logo.svg";
import google from "../../images/google.svg";
import { useParams ,useHistory} from "react-router";


import { useUserDispatch, loginUser } from "../../context/UserContext";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


function SmsVerification(props) {
  const classes = useStyles();
  const history=useHistory()
  const [loginValue, setLoginValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);

  // global
  const userDispatch = useUserDispatch();
  // const phoneRegExp = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
  const phoneRegExp = /9([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/

  const validationSchema = yup.object().shape({
 
    phoneNumber:yup.string().required("لطفا کد تایید را وارد کنید")
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2)); 
    let Permission=true
    if(Permission){
         loginUser(
    userDispatch,
    loginValue,
    props.history,
    setIsLoading,
    setError,
  )
    
    }
 

  };
  // local



  return (
    <div className="containerLogin">
    <div className="contact-form">
    {/* <img alt="" className="avatar" src="/assets/Untitled-1.svg"/> */}
    <h2 >کد تایید</h2>
    <p >کد تایید ارسال گردید<br/>
    برای ادامه کد تایید ارسال شده را وارد کنید.
    </p>

    <TextField

      style={{direction:"ltr"}}
      className={classes.TextField}
      label="کد تایید"
      onChange={e => setLoginValue(e.target.value)}

      id="phoneNumber"
      name="phoneNumber"
      variant="outlined"
      fullWidth
      margin="normal"
      size="small"
      {...register('phoneNumber')}
      error={errors.phoneNumber ? true : false}
    />
   <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
      {errors.phoneNumber?.message}
    </Typography><br/>
    <Typography variant="p" color="textSecondary" style={{color:"white",fontFamily:"Shabnam",fontSize:"0.8rem"}}>
      شماره تلفن اشتباه است؟<span style={{color:"rgb( 227 156 0  )",fontWeight:"600",cursor:"pointer"}} onClick={()=>history.push("/login")}> ویرایش</span>
    </Typography>



{isLoading ? (
        <CircularProgress size={26} className={classes.loginLoader} />
      ) : (


<Button
 onClick={
 handleSubmit(onSubmit)
}

// disabled={
//   loginValue.length === 0 


// }
    variant="contained"
    className={classes.buttonLogin}
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