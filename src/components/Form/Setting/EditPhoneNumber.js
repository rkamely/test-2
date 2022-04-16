import { Button, CircularProgress, Divider, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useUserDispatch } from '../../../context/UserContext';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useStyles from "./styles";

function EditPhoneNumber() {
  const steps = [
    {
      id:"1",
     
    },
    {
      id:"2",
    },

  ];
  const classes = useStyles();
  // const history=useHistory()
  const [loginValue, setLoginValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  // global
  const userDispatch = useUserDispatch();
  // const phoneRegExp = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
  const phoneRegExp = /9([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
    // history.push("/login/step2")

  };



  return (
    <div >
    <Typography variant="h6" align="center" margin="dense" color='secondary' style={{fontWeight:"bold"}}>
       ویرایش شماره تلفن      
    </Typography>
    <Divider style={{marginTop:"16px"}}/>
    <Typography variant="h6" align="center" margin="dense" color='primary' style={{fontWeight:"bold", margin:"24px 0px"}}>
       شماره تلفن جدید را وارد کنید    
    </Typography>
    
   <Grid style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
    <TextField
      onClick={steps[activeStep].id == steps.length - 1 ? handleNext : console.log("inja code daryaft mishe mire server baraye taeed")}  className={classes.buttonLogin}
      style={{direction:"ltr"}}
      className={classes.TextField}
      label={steps[activeStep].id == steps.length - 1 ? '    شماره تلفن   ' : '   کد تایید را وارد نمایید'  }
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

   

    <Button onClick={steps[activeStep].id == steps.length - 1 ? onSubmit : console.log("inja code daryaft mishe mire server baraye taeed")}  className={classes.buttonLogin} >{steps[activeStep].id == steps.length - 1 ? 'ثبت تمام پاسخ ها' : ' دریافت کد تایید'}</Button>

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