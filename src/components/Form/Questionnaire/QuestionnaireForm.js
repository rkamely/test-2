import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Step,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import useStyles from "./styles";
import { ErrorMessage } from "@hookform/error-message";
import { axiosInstance } from "../../../pages/api/axios";

const QuestionnaireForm = ({
  step,
  fields,
  remove,
  setActiveStep,
  activeStep,handleNext
}) => {
  const {
    control,
    getValues,
    register,
    formState: { errors },
  } = useFormContext();
  // const {
  //   fields,
  //   append,
  //   prepend,
  //   remove,
  //   swap,
  //   move,
  //   insert,
  //   replace
  // } = useFieldArray({
  //   control:control,
  //   name: "answers"
  // });
  const classes = useStyles();
  const token = localStorage.getItem("id_token");
  const [questions, setQuestions] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axiosInstance.get(
          `/questionnaire/get-by-id/62f399feab0bd10012549dd3/62e6786e4f91f400118432ff`,
          {
            headers: {
              token: `${token}`,
            },
          },
        );
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







  var array_data = ['HTML','CSS','JavaScript','jQuery','Bootstrap'];
  /* Holder array vairable  */
  var data_holder = [];
  for(var x = 0; x < array_data.length; x++){
     data_holder.push({
        "data" : array_data[x],
        "data_key" : x
     });
  }
  /* The output data in JSON format */





const [inputTextValue,setInputTextValue]=useState()
  const QuestinsofQuestionnaire = (i,index,item) => {
    switch (questions?.type) {
      case "InputText":
        return (
          <>
            <div className={classes.formContainer}>
              <FormLabel component="legend" className={classes.FormLable}>
                {questions?.title}
              </FormLabel>


                  <TextField
                    className={classes.TextField}
                    type="text"
                    id="input"
                    label="پاسخ"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={inputTextValue}
                    onChange={(e)=>setInputTextValue(e.target.value)}
                    
                  />
               
     
              <ErrorMessage
                errors={errors}
                // name="input"
                render={({ message }) => (
                  <p style={{ color: "red" }}>{message}</p>
                )}
              />
            </div>
            <div className={classes.formContainer} style={{visibility: "hidden"}}>
              <FormLabel component="legend" className={classes.FormLable}>
                {questions?.title}
              </FormLabel>
              <Controller
                control={control}
                {...register(`answers[${step}].questionId`, {})}
                // name="input"

                render={({ field }) => (
                  <>
                    <TextField
                      className={classes.TextField}
                      type="text"
                      id="input"
                      label="پاسخ"
                      defaultValue={questions?._id}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      {...field}
                    />
                  </>
                )}
              />
            </div>
            <FormControl
              error={!!errors.selected?.message}
              className={classes.formContainer}
            >
              <FormLabel component="legend" className={classes.FormLable}>
                {questions?.title}
              </FormLabel>
              <FormHelperText>{errors.selected?.message}</FormHelperText>
              <div className={classes.formContainerCheckbox}>
                <Controller
                  // {...register(`answers[${index}].selected`, {
                  //   required: "پر کردن این قسمت الزامی است"
                  // })}

                  name={`answers[${step}].selected`}
                  render={(props) =>
                    questions?.options?.map((option, index) => (
                      <FormControlLabel
                        style={{ whiteSpace: "noWrap" }}
                        control={
                          <Checkbox
                            onChange={() =>
                              props.field.onChange(handleCheck(option?.text))
                            }
                            // defaultChecked={defaultIds.includes(item.id)}
                          />
                        }
                        key={option?._id}
                        label={option?.text}
                      />
                    ))
                  }
                  control={control}
                />
              </div>
            </FormControl>
          </>
        );

      case "Yes_No":
        return (
          <FormControl component="fieldset" className={classes.formContainer}>
            <div className={classes.FormLable}>{questions?.title}</div>
            <Controller
              rules={{ required: true }}
              control={control}
              {...register(`answers[${step}].selected`, {
                required: "پر کردن این قسمت الزامی است",
              })}
              // name="selected"
              render={({ field }) => {
                return (
                  <RadioGroup {...field} row>
                    <FormControlLabel
                      value="بله"
                      control={<Radio />}
                      label="بله"
                    />
                    <FormControlLabel
                      value="خیر"
                      control={<Radio />}
                      label="خیر"
                    />
                  </RadioGroup>
                );
              }}
            />
          </FormControl>
        );

      case "MultipleChoice":
        const handleCheck = (checkedId) => {
          const { selected: ids } = getValues();
          const newIds = ids?.includes(checkedId)
            ? ids?.filter((id) => id !== checkedId)
            : [...(ids ?? []), checkedId];
          return newIds;
        };
        return (
          <FormControl
            error={!!errors.selected?.message}
            className={classes.formContainer}
          >
            <FormLabel component="legend" className={classes.FormLable}>
              {questions?.title}
            </FormLabel>
            <FormHelperText>{errors.selected?.message}</FormHelperText>
            <div className={classes.formContainerCheckbox}>
              <Controller
                // {...register(`answers[${index}].selected`, {
                //   required: "پر کردن این قسمت الزامی است"
                // })}

                name={`answers[${step}].selected`}
                render={(props) =>
                  questions?.options?.map((option, index) => (
                    <FormControlLabel
                      style={{ whiteSpace: "noWrap" }}
                      control={
                        <Checkbox
                          onChange={() =>
                            props.field.onChange(handleCheck(option?.text))
                          }
                          // defaultChecked={defaultIds.includes(item.id)}
                        />
                      }
                      key={option?._id}
                      label={option?.text}
                    />
                  ))
                }
                control={control}
              />
            </div>
          </FormControl>
        );

      case "SingleChoice":
        return (
          <FormControl component="fieldset" className={classes.formContainer}>
            <div className={classes.FormLable}>{questions?.title}</div>
            <Controller
              rules={{ required: true }}
              control={control}
              name="selected"
              render={({ field }) => {
                return (
                  <RadioGroup {...field} row>
                    {questions?.options?.map((option) => {
                      return (
                        <FormControlLabel
                          // value={option?.text}
                          control={<Radio />}
                          label={option?.text}
                          value={inputTextValue}
                          onChange={(e)=>setInputTextValue(e.target.value)}
                        />
                      );
                    })}
                  </RadioGroup>
                );
              }}
            />
          </FormControl>
        );

      case "InputRange":
        const marks = [
          {
            value: 0,
            label: "خیلی ضعیف",
          },
          {
            value: 25,
            label: "ضعیف",
          },
          {
            value: 50,
            label: "متوسط",
          },
          {
            value: 75,
            label: "قوی",
          },
          {
            value: 100,
            label: "خیلی قوی",
          },
        ];
        function valuetext(value) {
          return value;
        }

        function valueLabelFormat(value) {
          return marks.findIndex((mark) => mark.value === value) + 1;
        }

        return (
          <FormControl component="fieldset" className={classes.formContainer}>
            <div className={classes.FormLable}>{questions?.title}</div>
            <Controller
              name={`answers[${step}].input`}
              control={control}
              value={inputTextValue}
              onChange={(e)=>setInputTextValue(e.target.value)}
              // defaultValue={[0, 10]}
              marks={marks}
              render={(props) => (
                <Slider
                  {...props}
                  onChange={(_, value) => {
                    props.field.onChange(value);
                  }}
                  valueLabelDisplay="auto"
                  // max={10}

                  step={1}
                />
              )}
            />
          </FormControl>
        );

      default:
        return <div>لطفا منتظر بمانید</div>;
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
   
  };

  return (
    <>
      {/* <FormLabel component="legend" className={classes.FormLable}>{questions?.title}</FormLabel>
        <Controller
          control={control}
          {...register("Frame", {
            required: "پر کردن این قسمت الزامی است"
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
        {
        <ErrorMessage
          errors={errors}
          name="Frame"
          render={({ message }) => <p style={{color:"red"}}>{message}</p>}
        /> */}

      {fields?.map((field, item, index) => {

        
          return (
            <>
              <div>{QuestinsofQuestionnaire(index, item)}</div>
              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
                // onClick={() => remove(fields.length-1)}
                color="secondary"
              >
                برگشت
              </Button>
            </>
          );
        
      })}
    </>
  );
};

export default QuestionnaireForm;
