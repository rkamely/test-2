import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
  ButtonGroup,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Select,
  Slider,
  Box,
  DialogContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { ChangeHistory, Close } from "@material-ui/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import useStyles from "./Style";



const validationSchema = yup.object().shape({
  eggs: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
  Queen: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
  Spawning: yup.string().required("لطفا یک گزینه را انتخاب کنید."),

});



function getSteps() {
  return [
    "سوال اول",
    "سوال دوم",
    "سوال سوم",


  ];
}







const FirstQuestion = () => {
  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()

  return (
    <>
    <FormLabel component="legend" className={classes.FormLable}>میزان کیک گرده</FormLabel>
      <Controller
        control={control}
        {...register("Cake", {
          required: "پر کردن این قسمت الزامی است"
        })}
        name="Cake"
        
        render={({ field }) => (
          <TextField
            type="number"
            id="Cake"
            label="میزان کیک گرده"
            variant="outlined"
            placeholder="میزان کیک گرده"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name="Cake"
        render={({ message }) => <p>{message}</p>}
      />
    </>
  );
};


const SecondQuestion = () => {

  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()

  return (
    <>
    <FormLabel component="legend" className={classes.FormLable}>آب شکر</FormLabel>
      <Controller
        control={control}
        {...register("Sugar", {
          required: "پر کردن این قسمت الزامی است"
        })}
        name="Sugar"
        
        render={({ field }) => (
          <TextField
            type="number"
            id="Sugar"
            label="آب شکر"
            variant="outlined"
            placeholder="آب شکر"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name="Sugar"
        render={({ message }) => <p>{message}</p>}
      />
    </>
  );
};


const ThirdQuestion = () => {
  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()
    return (
        <>
        <FormLabel component="legend" className={classes.FormLable}>خمیر شیرین</FormLabel>
          <Controller
            control={control}
            {...register("Sweet", {
              required: "پر کردن این قسمت الزامی است"
            })}
            name="Sweet"
            
            render={({ field }) => (
              <TextField
                type="number"
                id="Sweet"
                label="خمیر شیرین"
                variant="outlined"
                placeholder="خمیر شیرین"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="Sweet"
            render={({ message }) => <p>{message}</p>}
          />
        </>
  );
};









function getStepContent(step) {
  switch (step) {
    case 0:
      return <FirstQuestion />;
    case 1:
      return <SecondQuestion />;
    case 2:
      return <ThirdQuestion />;
    default:
      return "unknown step";
  }
}


const NutritionStepper = (props) => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      Cake: "",
      Sugar: "",
      Sweet: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  // };
  return (
    <div style={{padding:"16px" }}>
      <Stepper alternativeLabel activeStep={activeStep} >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography
          //       variant="caption"
          //       align="center"
          //       style={{ display: "block" }}
          //     >
          //       optional
          //     </Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step   {...stepProps} key={index}>
              <StepLabel   {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <DialogContent>
      <Grid  container style={{display:"flex",alignItems:"flex-start" ,justifyContent:"space-between",boxShadow:"0px 3px 6px 0px rgba( 0, 0 ,0, 0.16)",padding:"16px 8px 32px"}} >
                <Grid item   style={{display:"flex",flexDirection:"column" }}>
                    <Typography variant='p'>""</Typography>
                    <Typography variant='p'>عملیات: باز کردن کندو و ریختن تعذیه در جای خودش</Typography>
                </Grid>
                <Grid item onClick={props.onClose} ><Close color='secondary'/></Grid>
      </Grid>
      </DialogContent >
   <Grid style={{marginTop:"16px"}}>
      {activeStep === steps.length ? (
        <Typography variant="h3" align="center" color="secondary">
          جواب سوالات با موفقیت ثبت شد!
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)} style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              {getStepContent(activeStep)}
              {/* <Grid style={{width:"100%", display:"flex",alignContent:"center",justifyContent:"center"}}>
               {isStepOptional(activeStep) && (
                 <>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  onClick={handleSkip}
                  type="submit"
                >
                  قیول
                </Button>
                <Button
                      className={classes.button}
                      variant="contained"      
                      onClick={handleSkip}
                  >
                                  رد کن    
                </Button></>
              )}
              </Grid> */}
            <Grid style={{width:"100%", display:"flex",alignContent:"center",justifyContent:"space-evenly",marginTop:"16px"}}>
              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
                color="secondary"
              >
                برگشت
              </Button>

              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "پایان" : "بعدی"}
             </Button> 
             </Grid> 
            </form>
          </FormProvider>
        </>
      )}
    </Grid>
    </div>
  );
};

export default NutritionStepper;