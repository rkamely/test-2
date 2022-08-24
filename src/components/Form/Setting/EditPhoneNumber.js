import { Button, CircularProgress, Divider, Grid, InputAdornment, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useUserDispatch } from '../../../context/UserContext';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useStyles from "./styles";

function EditPhoneNumber({onClose,setOpenCode}) {

  const classes = useStyles();
  // const history=useHistory()
  const [loginValue, setLoginValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  const [activeStep, setActiveStep] = React.useState(0);

  const[state,setState]=useState({mobile:""})

  // global
  const userDispatch = useUserDispatch();
  // const phoneRegExp = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
  const phoneRegExp = '^(\\9)?9\\d{9}$';

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const validationSchema = yup.object().shape({
 
    mobile: yup
      .string()
      .matches(
        phoneRegExp,"شماره موبایل را با حروف انگلیسی و بدون صفر وارد کنید"
      )  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = data => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
   
    setOpenCode(true)
    onClose()
    // history.push("/login/step2")

  };

  const handleChangenumber=(event)=>{
    // setState(e.target.value)
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  
  }

  return (
    <div >
    <Typography variant="h6" align="center" margin="dense" color='secondary' className={classes.Title}>
       ویرایش شماره تلفن      
    </Typography>
    <Divider className={classes.Divider}/>
    <Typography variant="h6" align="center" margin="dense" color='primary' className={classes.codeTitle}>
       شماره تلفن جدید را وارد کنید    
    </Typography>
    
   <Grid className={classes.main}>
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
          
          className={classes.TextField2}
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

   
    <Button   className={classes.buttonLogin}     onClick={handleSubmit(onSubmit)}>دریافت کد تائید
</Button>

    {/* <Button onClick={steps[activeStep].id == steps.length - 1 ? onSubmit : console.log("inja code daryaft mishe mire server baraye taeed")}  className={classes.buttonLogin} >{steps[activeStep].id == steps.length - 1 ? 'ثبت' : ' دریافت کد تایید'}</Button> */}

{/* 
<Button
    
    onClick={handleNext}
    variant="contained"
    className={classes.buttonLogin}
    
  >
  دریافت کد تایید         
</Button> */}
 </Grid>
    </div>
  )
}

export default EditPhoneNumber