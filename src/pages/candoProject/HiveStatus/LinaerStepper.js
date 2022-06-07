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
    "سوال چهارم",
    "سوال پنجم",
    "سوال ششم",
    "سوال هفتم",
    "سوال هشتم",
    "سوال نهم",
    "سوال دهم",

  ];
}







const FirstQuestion = () => {
  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()

  return (
    <div >
 <FormLabel component="legend" className={classes.FormLable}> مشاهده تخم روز</FormLabel>
          <Controller
    
            rules={{ required: true }}
            control={control}
            name="eggs"
            {...register("eggs", { required: "لطفا یک گزینه را انتخاب کنید" })}  
            render={({ field }) => {
              return (
                <RadioGroup {...field}
            
          >
             <div className={classes.RadioGroup} >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="بله"
                    
              
                  />
                  <FormControlLabel
                    value="no"     
                    control={<Radio />}
                    label="خیر"

                  />
                  </div>
                {/* <input label="بله"   value="yes" {...register("eggs", { required: true })} type="radio" value="Yes" />
                <input label="خیر"  value="yes" {...register("eggs", { required: true })} type="radio" value="No" /> */}
                </RadioGroup>
              );
            }}
          />
        <ErrorMessage
        errors={errors}
        name="eggs"
        render={({ message }) => <p style={{color:"red"}}>{message}</p>}
      />
    </div>
  );
};


const SecondQuestion = () => {

  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()

  return (
    <>
       <FormLabel component="legend" className={classes.FormLable}>مشاهده ملکه</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
  
            name="Queen"
         
            render={({ field }) => {
              return (
                <RadioGroup {...field} 
            >
                   <div className={classes.RadioGroup} >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="بله"
                  />
                  <FormControlLabel
                    value="no"     
                    control={<Radio />}
                    label="خیر"
                  />
                 </div>
                </RadioGroup>
                
              );
            }}
          />
      <ErrorMessage
        errors={errors}
        name="Queen"
        render={({ message }) => <p style={{color:"red"}}>{message}</p>}
      />

    </>
  );
};


const ThirdQuestion = () => {
  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()
    return (
    <>
<FormLabel component="legend" className={classes.FormLable}>طرز تخم گذاری</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name="Spawning"
            
            render={({ field }) => {
              return (
                <RadioGroup {...field}
           
                >
                  <div className={classes.RadioGroup} >
                  <FormControlLabel
                    value="Regular"
                    control={<Radio />}
                    label="منظم"
                  />
                  <FormControlLabel
                    value="Irregular"     
                    control={<Radio />}
                    label="نامنظم"
                  />
                 </div>
                </RadioGroup>
              );
            }}
          />
      <ErrorMessage
        errors={errors}
        name="Spawning"
        render={({ message }) => <p style={{color:"red"}}>{message}</p>}
      />

    </>
  );
};


const FourthQuestion = () => {
  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()

  return (
    <>
<FormLabel component="legend" className={classes.FormLable}>مشاهده شاخون</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name="ViewHorn"
            {...register("ViewHorn", { required: "لطفا یک گزینه را انتخاب کنید" })}  
            render={({ field }) => {
              return (
                <RadioGroup {...field}
            
          >
             <div className={classes.RadioGroup} >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="بله"
              
                  />
                  <FormControlLabel
                    value="no"     
                    control={<Radio />}
                    label="خیر"

                  />
                  </div>
                {/* <input label="بله"   value="yes" {...register("eggs", { required: true })} type="radio" value="Yes" />
                <input label="خیر"  value="yes" {...register("eggs", { required: true })} type="radio" value="No" /> */}
                </RadioGroup>
              );
            }}
          />
        <ErrorMessage
        errors={errors}
        name="ViewHorn"
        render={({ message }) => <p style={{color:"red"}}>{message}</p>}
      />
    </>
  );
};


const FivethQuestion = () => {
  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()

  return (
    <>
    <FormLabel component="legend" className={classes.FormLable}>تعداد قاب زنبور</FormLabel>
      <Controller
        control={control}
        {...register("NumberbeFrames", {
          required: "پر کردن این قسمت الزامی است"
        })}
        name="NumberbeFrames"
        
        render={({ field }) => (
          <TextField
          type="number"
            id="NumberbeFrames"
            label="NumberbeFrames"
            variant="outlined"
            placeholder="تعداد قاب زنبور"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name="NumberbeFrames"
        render={({ message }) => <p>{message}</p>}
      />
    </>
  );
};


const SixthQuestion = () => {
  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()

  return (
    <>
    <FormLabel component="legend" className={classes.FormLable}>تعداد قاب و تخم شیره</FormLabel>
      <Controller
        control={control}
        {...register("FrameAndEggs", {
          required: "پر کردن این قسمت الزامی است"
        })}
        name="FrameAndEggs"
        
        render={({ field }) => (
          <TextField
          type="number"
            id="FrameAndEggs"
            label="FrameAndEggs"
            variant="outlined"
            placeholder="تعداد قاب و تخم شیره"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name="FrameAndEggs"
        render={({ message }) => <p>{message}</p>}
      />
    </>
  );
};


const SeventhQuestion = () => {
  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()

  return (
    <>
    <FormLabel component="legend" className={classes.FormLable}>تعداد قاب عسل</FormLabel>
      <Controller
        control={control}
        {...register("NumberHoneyFrames", {
          required: "پر کردن این قسمت الزامی است"
        })}
        name="NumberHoneyFrames"
        
        render={({ field }) => (
          <TextField
            type="number"
            id="NumberHoneyFrames"
            label="NumberHoneyFrames"
            variant="outlined"
            placeholder="تعداد قاب عسل"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name="NumberHoneyFrames"
        render={({ message }) => <p>{message}</p>}
      />
    </>
  );
};


const EighthQuestion = () => {
        const options = [
      {
        label: "آرام بدون دود",
        value: "آرام بدون دود",
      },
      {
        label: "آرام با دود",
        value: "آرام با دود",
      },
      {
        label: "خشن بدون دود",
        value: "خشن بدون دود",
      },
      {
        label: "خشن با دود",
        value: "خشن با دود",
      },
    ];
    const { control ,register, formState: { errors }} = useFormContext();
    const classes=useStyles()
    return( 
  <Grid item xs={12} sm={12} className={classes.Select} >
  <div className={classes.input}>
    <label className={classes.FormLable}>رفتار زنبور</label>
    <Select
      className={classes.inputSelect}
      required
      placeholder="رفتار زنبور"
      variant="outlined"
      {...register("BeeBehavior")}
      error={errors.regionVegetation ? true : false}
    >
      {options?.map((option) => {
        return (
          <MenuItem key={option.value} value={option.value}>
            {option.label ?? option.value}
          </MenuItem>
        );
      })}
    </Select>
  </div>
  {/* {errors.regionVegetation && <p>{errors.regionVegetation.message}</p>} */}
  <ErrorMessage
        errors={errors}
        name="BeeBehavior"
        render={({ message }) => <p>{message}</p>}
      />
</Grid>

)}


const NonethQuestion = () => {
  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()

  return (
    <>
    <FormLabel component="legend" className={classes.FormLable}>Suspected of disease</FormLabel>
    <Controller
            rules={{ required: true }}
            control={control}
            name="SuspectedDisease"
            
            render={({ field }) => {
              return (
                <RadioGroup {...field}
           
                >
                  <div className={classes.RadioGroup} >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="بله"
                  />
                  <FormControlLabel
                    value="No"     
                    control={<Radio />}
                    label="خیر"
                  />
                 </div>
                </RadioGroup>
              );
            }}
          />
      <ErrorMessage
        errors={errors}
        name="SuspectedDisease"
        render={({ message }) => <p>{message}</p>}
      />
    </>
  );
};


const TenthQuestion = () => {
  const marks = [
    {
      value: 0,
      label: 'خیلی ضعیف',
    },
    {
      value: 25,
      label: 'ضعیف',
    },
    {
      value: 50,
      label: 'متوسط',
    },
    {
      value: 75,
      label: 'قوی',
    },
    {
      value: 100,
      label: 'خیلی قوی',
    },
  ];
  function valuetext(value) {
    return value;
  }
  
  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  
  const { control ,register, formState: { errors }} = useFormContext();
  const classes=useStyles()
  return( 
<Grid item xs={12} sm={12} className={classes.Select} >
<Controller
          control={control}
          name="test"
          defaultValue={50}
          render={({ field: { value, onChange } }) => (
         <Box sx={{ width: 300 }}>
      <Slider
      axis={"x"}
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={({ x }) => onChange(x)}
        x={value}
      />
    </Box>
          )}
        />
        <input type="submit" />
{/* {errors.regionVegetation && <p>{errors.regionVegetation.message}</p>} */}

</Grid>
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
    case 3:
      return <FourthQuestion />;
    case 4:
      return <FivethQuestion />;
    case 5:
      return <SixthQuestion />;
    case 6:
      return <SeventhQuestion />;
    case 7:
      return <EighthQuestion />;
    case 8:
      return <NonethQuestion />;
    case 9:
      return <TenthQuestion />;
    default:
      return "unknown step";
  }
}


const LinaerStepper = (props) => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      eggs: "",
      Queen: "",
      Spawning: "",
      ViewHorn:"",
      NumberbeFrames: "",
      FrameAndEggs: "",
      NumberHoneyFrames: "",
      BeeBehavior: "",
      SuspectedDisease: "",
      test: "",
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
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
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
    console.log("methods",methods);
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
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
                    <Typography variant='p'>نکات: دقت به احتمال بچه دهی</Typography>
                    <Typography variant='p'>عملیات: باز کردن کندو , بازدید قاب به قاب</Typography>
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

export default LinaerStepper;