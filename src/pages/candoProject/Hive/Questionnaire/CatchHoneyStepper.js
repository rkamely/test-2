import React, { useEffect, useState } from "react";
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
  useFieldArray,
} from "react-hook-form";
import { ChangeHistory, Close } from "@material-ui/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import useStyles from "./Style";
import QuestionnaireForm from "../../../../components/Form/Questionnaire/QuestionnaireForm";
import { axiosInstance } from "../../../api/axios";

const validationSchema = yup.object().shape({
  eggs: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
  Queen: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
  Spawning: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
});

function getSteps(countQuestion) {
  console.log("console.log(countQuestion);", countQuestion);
  return countQuestion?.map((el) => {
    return [""];
  });
  // for (let index = 0; index < 10; index++) {

  // }
  // return [
  //   "سوال اول",
  //   "سوال دوم",
  //   "سوال سوم",

  // ];
}

const FirstQuestion = ({ step }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();
  const classes = useStyles();
  const token = localStorage.getItem("id_token");
  const [questions, setQuestions] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axiosInstance.get(
          "/questionnaire/get-by-id/62ee05429c5ee70012a14505/62e6786e4f91f400118432ff",
          {
            headers: {
              token: `${token}`,
            },
          },
        );
        console.log("show response profile", response.data);
        console.log(
          `show response profile ${step}`,
          response.data.questions[step],
        );
        setQuestions(response.data.questions[step]);
        // setNewQuestion(response.data);
        // setLoading(false);
      } catch (error) {
        if (error.response?.status === 401) {
          //   localStorage.clear("id_token");
          console.log(
            "سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" +
              "ApiaryList",
          );
          //   window.location.reload();
        } else {
          console.log(
            "سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" +
              "ApiaryList",
          );
          // history.push("/app/Error")
          // window.location.reload()
        }
      }
      // setLoading(false);
    };
    fetchData();
  }, [step]);
  console.log("questions", questions);
  return (
    <>
      <FormLabel component="legend" className={classes.FormLable}>
        {questions?.title}
      </FormLabel>
      <Controller
        control={control}
        {...register("Frame", {
          required: "پر کردن این قسمت الزامی است",
        })}
        name="Frame"
        render={({ field }) => (
          <TextField
            type="number"
            id="Frame"
            label="تعداد برداشت قاب عسل"
            variant="outlined"
            placeholder="تعداد برداشت قاب عسل"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name="Frame"
        render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
      />
    </>
  );
};

const SecondQuestion = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();
  const classes = useStyles();

  return (
    <>
      <FormLabel component="legend" className={classes.FormLable}>
        وزن برداشت عسل
      </FormLabel>
      <Controller
        control={control}
        {...register("Weight", {
          required: "پر کردن این قسمت الزامی است",
        })}
        name="Weight"
        render={({ field }) => (
          <TextField
            type="number"
            id="Weight"
            label="وزن برداشت عسل"
            variant="outlined"
            placeholder="وزن برداشت عسل"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name="Weight"
        render={({ message }) => <p>{message}</p>}
      />
    </>
  );
};

function getStepContent(
  step,
  statedynamic,
  setstatedynamic,
  countQuestion,
  fields,
  remove,
  activeStep,
  setActiveStep,
) {
  setstatedynamic = {
    ...statedynamic,
  };

  console.log("stepp", step);
  var elements = [];
  for (let i = 0; i < 10; i++) {
    elements.push(<li>{i}</li>);
  }
  console.log(
    "element",
    elements.map((el) => {
      return el.props.children;
    }),
  );
  // return elements;

  //   return countQuestion?.map((el)=>{
  //     return["0"]
  // })

  switch (step) {
    case 0:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 1:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 2:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 3:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 4:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 5:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 6:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 7:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 8:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 9:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 10:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 11:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 12:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 13:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 14:
      return (
        <QuestionnaireForm
          step={step}
          fields={fields}
          remove={remove}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
    case 15:
      return <QuestionnaireForm step={step} />;
    case 16:
      return <QuestionnaireForm step={step} />;
    case 17:
      return <QuestionnaireForm step={step} />;
    case 18:
      return <QuestionnaireForm step={step} />;
    case 19:
      return <QuestionnaireForm step={step} />;
    case 20:
      return <QuestionnaireForm step={step} />;
    case 21:
      return <QuestionnaireForm step={step} />;

    default:
      return "موردی جهت نمایش وجود ندارد!";
  }
}

const CatchHoneyStepper = (props) => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      answers: [{ input: "", questionId: "" }],
      // answers: []
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "answers",
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [statedynamic, setstatedynamic] = useState([]);
  const [countQuestion, setcountQuestion] = useState();
  const steps = getSteps(countQuestion);
  // console.log("fieldsfields",fields);

  const token = localStorage.getItem("id_token");

  ///////////////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axiosInstance.get(
          `/questionnaire/get-by-id/62ee05429c5ee70012a14505/62e6786e4f91f400118432ff`,
          {
            headers: {
              token: `${token}`,
            },
          },
        );
        console.log("show response profile", response.data);
        console.log("show response profile", response.data.questions);
        setcountQuestion(response.data.questions);
        // setNewQuestion(response.data);
        // setLoading(false);
      } catch (error) {
        if (error.response?.status === 401) {
          //   localStorage.clear("id_token");
          console.log(
            "سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" +
              "ApiaryList",
          );
          //   window.location.reload();
        } else {
          console.log(
            "سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" +
              "ApiaryList",
          );
          // history.push("/app/Error")
          // window.location.reload()
        }
      }
      // setLoading(false);
    };
    fetchData();
  }, []);
  /////////////////////////////////////////////////////

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log("dataofwhole", data);
    append({});
    if (activeStep == steps?.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep),
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
  //   console.log(data);
  // };
  console.log("methods", methods);
  return (
    <div style={{ padding: "16px" }}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps?.map((step, index) => {
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
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <DialogContent>
        <Grid
          container
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            boxShadow: "0px 3px 6px 0px rgba( 0, 0 ,0, 0.16)",
            padding: "16px 8px 32px",
          }}
        >
          <Grid item onClick={props.onClose}>
            <Close color="secondary" />
          </Grid>
          <Grid item style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="p">
              عملیات: باز کردن کندو، بازدید از روی قاب و بررسی چند قاب برداشتن
              طبق عسل و تکاندن زنبورها از روی قاب های عسل
            </Typography>
          </Grid>
          ا
        </Grid>
      </DialogContent>
      <Grid style={{ marginTop: "16px" }}>
        {activeStep === steps?.length ? (
          <Typography variant="h3" align="center" color="secondary">
            جواب سوالات با موفقیت ثبت شد!
          </Typography>
        ) : (
          <>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(handleNext)}
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {getStepContent(
                  activeStep,
                  statedynamic,
                  setstatedynamic,
                  countQuestion,
                  fields,
                  remove,
                  activeStep,
                  setActiveStep,
                )}

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
                <Grid
                  style={{
                    width: "100%",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-evenly",
                    marginTop: "16px",
                  }}
                >
                  {/* <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
                color="secondary"
              >
                برگشت
              </Button> */}

                  <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    // onClick={handleNext}

                    type="submit"
                  >
                    {activeStep === steps?.length - 1 ? "پایان" : "بعدی"}
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

export default CatchHoneyStepper;
