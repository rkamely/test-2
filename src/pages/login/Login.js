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
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useParams ,useHistory} from "react-router";
import { useUserDispatch, loginUser } from "../../context/UserContext";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "../api/axios"
import  AuthContext from  "../context/AuthProvider"
// styles
import useStyles from "./styles";
import "./styles.css";




function Login(props) {

  const { setAuth } = useContext(AuthContext)


  var classes = useStyles();
  const history = useHistory();
  const errRef = useRef();
  const[state,setState]=useState({mobile:""})
  const [errMsg, setErrMsg] = useState('');
  // global
  var userDispatch = useUserDispatch();
  // const phoneRegExp = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
  const phoneRegExp = /09([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/;

  const validationSchema = yup.object().shape({
    mobile: yup
      .string()
      .matches(
        phoneRegExp,
        "شماره موبایل را با حروف انگلیسی وارد کنید",
      ),
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
    try{
           const response = axios.post("http://185.202.113.165:3000/api/auth/login",data,{
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
      <div className="contact-form">
     {errMsg? <p ref={errRef} className="errmsg" aria-live="assertive">{errMsg}</p>:null}

        {/* <img alt="" className="avatar" src="/assets/Untitled-1.svg"/> */}
        <h2>ورود</h2>
        <p>
          برای ورود به کندووان پلاس شماره تلفن همراه خود را وارد کنید تا کد
          تایید برای شما پیامک شود
        </p>

        <TextField
          style={{ direction: "ltr" }}
          onChange={handleChangenumber}
          className={classes.TextField}
          label="شماره موبایل"
          placeholder="+98 | "
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
        <Button
          variant="contained"
          className={classes.buttonLogin}
          onClick={handleSubmit(onSubmit)}
        >
          دریافت کد تایید
        </Button>

        {/* <input placeholder="Enter Email" type="email"/>
			            <input placeholder="Enter Password" type="password"/> <input type="submit" value="Sign in"/>
		            	<p><input type="checkbox"/>Remember Me</p> */}
      </div>
    </div>
  );
}

export default withRouter(Login);
