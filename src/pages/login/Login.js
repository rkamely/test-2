import React, { useRef, useState ,useContext } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useParams ,useHistory} from "react-router";
import { useUserDispatch, loginUser } from "../../context/UserContext";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios, { axiosInstance } from "../api/axios"
import  AuthContext from  "../context/AuthProvider"
// styles
import useStyles from "./styles";
import "./styles.css";




function Login(props) {

  var classes = useStyles();
  const history = useHistory();
  const errRef = useRef();
  const[state,setState]=useState({mobile:""})
  const [errMsg, setErrMsg] = useState('');
  // global
  var userDispatch = useUserDispatch();
  // const phoneRegExp = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
  // const phoneRegExp = /9([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/;
  const phoneRegExp = '^(\\9)?9\\d{9}$';
  const validationSchema = yup.object().shape({
    mobile: yup
      .string()
      .matches(
        phoneRegExp,"شماره موبایل را با حروف انگلیسی و بدون صفر وارد کنید"
      )
  });
  


  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  

const handleChangenumber=(event)=>{
  // setState(e.target.value)
  const { name, value } = event.target;
  setState((prevState) => ({
    ...prevState,
    [name]: value
  }));

}


 console.log("state",state)


  const onSubmit = (data) => {
    // console.log(JSON.stringify(data, null, 2));
    // alert(JSON.stringify(data, null, 2));
    // data.preventDefault();
    const mobile="0"+data.mobile
    try{
           const response = axiosInstance.post("/auth/login",{mobile:mobile},{
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
           })
           console.log("response login",response);
           console.log(JSON.stringify(response))       

           history.push(
           { 
             pathname:  "./login/smsVerification",
             state
           }
           );
           localStorage.setItem("data",data.mobile.toString())
           console.log("phone", data.mobile.toString());

    }catch (err) {
      if (!err?.response) {
          setErrMsg(' پاسخی از سرور دریافت نشد لطفا از وصل بودن اینترنت خود اطمینان حاصل نمایید و مجدد تلاش کنید');
      }  else {
        setErrMsg('ارتباط با سرور برقرار نشد لطفا مجدد تلاش کنید')
      }

      errRef.current.focus();
  }
 
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
     {errMsg? <p ref={errRef} className="errmsg" aria-live="assertive">{errMsg}</p>:null}

        {/* <img alt="" className="avatar" src="/assets/Untitled-1.svg"/> */}
        <h2>ورود</h2>
        <p>
          برای ورود به کندووان پلاس شماره تلفن همراه خود را وارد کنید تا کد
          تائید برای شما پیامک شود
        </p>

        <TextField
                  // InputProps={{
                  //   color:"red",
                  //   startAdornment: <InputAdornment style={{color:"#000"}} position="start">kg</InputAdornment>,
                  // }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        
                      >
                        <div style={{color:"#000",fontFamily:"Shabnam"}}>| 98+</div>
                      </InputAdornment>
                    )
                  }}
          // style={{ direction: "ltr" }}
          onChange={handleChangenumber}
          
          className={classes.TextField}
          label="شماره موبایل"
          id="mobile"
          name="mobile"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          {...register("mobile")}
          error={errors.mobile ? true : false}
        />
        <Typography
          variant="inherit"
          color="textSecondary"
          style={{ color: "rgb( 227 156 0)" }}
        >
          {errors.mobile?.message}
        </Typography>





        {/* <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">شماره موبایل</InputLabel>
          <OutlinedInput
            style={{ direction: "ltr" }}
            className={classes.TextField}
            id="outlined-adornment-password"
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"

                  edge="end"
                >
                        <div style={{color:"#000",fontFamily:"Shabnam"}}>| 98+</div>
             </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> */}

        <Button
          variant="contained"
          className={classes.buttonLogin}
          onClick={handleSubmit(onSubmit)}
        >
          دریافت کد تائید
        </Button>

        {/* <input placeholder="Enter Email" type="email"/>
			            <input placeholder="Enter Password" type="password"/> <input type="submit" value="Sign in"/>
		            	<p><input type="checkbox"/>Remember Me</p> */}
      </div>
    </div>
  );
}

export default withRouter(Login);
