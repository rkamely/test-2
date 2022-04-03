import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, MobileStepper, Typography } from '@material-ui/core'
import { Close, KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';
import React, { useState } from 'react'
import Widget from '../../../components/Widget/Widget'
import useStyles from "./Style";
import { useForm, Controller } from 'react-hook-form';

function WebHiveSubmit(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] =useState(0);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
  };
  const steps = [
    {
      id:"0",
      label: 'مشاهده تخم روز',
      // description نیاز نیست
    },
    {
      id:"1",
      label: 'مشاهده ملکه',

    },
    {
      id:"2",
      label: 'مشاهده اب و هوا',

    },
    {
      id:"3",
      label: 'اتمام بازدید',
    }

  ]
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

    console.log("props",props)
    const classes = useStyles();
  return (
      <div className={classes.DialogBox}>
    <DialogTitle style={{textAlign:"center",fontWeight:600}}>{"بازدید فصلی بهار"}</DialogTitle>
    <DialogContent>
      <Grid  container style={{display:"flex",alignItems:"flex-start" ,justifyContent:"space-between",boxShadow:"0px 3px 6px 0px rgba( 0, 0 ,0, 0.16)",padding:"16px 8px 32px"}} >
                <Grid item   style={{display:"flex",flexDirection:"column" }}>
                    <Typography variant='p'>نکات: دقت به احتمال بچه دهی</Typography>
                    <Typography variant='p'>عملیات: بازکردن کندو قاب به قاب</Typography>
                </Grid>
                <Grid item onClick={props.onClose} ><Close color='secondary'/></Grid>
      </Grid>
    </DialogContent >
   <Grid item  xs={12} style={{display:"flex", alignItems:"center",justifyContent:"center",fontWeight:600,marginTop:"24px"}}> <Typography variant='p'> {steps[activeStep].label}</Typography></Grid>
    <DialogActions className={classes.DialogActions}>
      <Button onClick={steps[activeStep].id == steps.length - 1 ? props.onClose : handleNext}  className={steps[activeStep].id == steps.length - 1 ? classes.ButtonHiveSubmitFinish : classes.ButtonHiveSubmitYes} >{steps[activeStep].id == steps.length - 1 ? 'ثبت تمام پاسخ ها' : 'بله'}</Button>
      <Button onClick={handleNext} className={steps[activeStep].id == steps.length - 1 ? classes.ButtonHiveSubmitNoFinish : classes.ButtonHiveSubmitNo}>خیر</Button>
    </DialogActions>

    <MobileStepper
      variant="dots"
      style={{}}
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext}  disabled={activeStep === maxSteps - 1}>
      
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
   
        </Button>
      }
    />
    </div>
  )
}

export default WebHiveSubmit