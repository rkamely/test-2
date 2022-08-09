import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Slider, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import useStyles from "./styles";
import { ErrorMessage } from "@hookform/error-message";

const QuestionnaireForm = ({step,fields,remove,setActiveStep,activeStep}) => {
    const { control,getValues ,register, formState: { errors }} = useFormContext();
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
    const classes=useStyles()
    const token = localStorage.getItem("id_token");
    const[questions,setQuestions]=useState()
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data: response } = await axios.get(
            `http://185.202.113.165:3000/api/questionnaire/get-by-id/62ee0ef6daaf4100126a47e0/62e6786e4f91f400118432ff`,
            {
              headers: {
                token: `${token}`,
              },
            },
          );
          console.log("show response profile", response.data);
          console.log(`show response profile ${step}`, response.data.questions[step]);
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
  console.log("questions",questions?.type);
  // useEffect(()=>{
  //   if(questions?.type=="InputText"){
  //     append({input:"",questionId:""})
  //   }else if(questions?.type=="InputRange"){
  //     append({input:"",questionId:""})
  //   }else if(questions?.type=="Yes_No"){
  //     append({selected:"",questionId:""})
  //   }else if(questions?.type=="MultipleChoice"){
  //     append({selected:"",questionId:""})
  //   }
    
  // },[questions?.type])

  const QuestinsofQuestionnaire=(index)=>{


    switch (questions?.type) {
        case "InputText":
          
          return(                           
            <>
            <div className={classes.formContainer}>
            <FormLabel component="legend" className={classes.FormLable}>{questions?.title}</FormLabel>
              <Controller
                control={control}
                {...register(`answers[${fields.length-1}].input`, {
                  required: "پر کردن این قسمت الزامی است"
                })}
                // name="input"
                
                render={({ field }) => (
                  <TextField
                  className={classes.TextField}
                    type="text"
                    id="input"
                    label="پاسخ"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                // name="input"
                render={({ message }) => <p style={{color:"red"}}>{message}</p>}
              />
            </div>
                        <div className={classes.formContainer}>
                        <FormLabel component="legend" className={classes.FormLable}>{questions?.title}</FormLabel>
                          <Controller
                            control={control}
                            {...register(`answers[${fields.length-1}].questionId`, {
                              required: "پر کردن این قسمت الزامی است"
                            })}
                            // name="input"
                            
                            render={({ field }) => (
                              <>
                              {  console.log("fieldfield",questions?.title)}

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
                              /></>
                            )}
                          />

                        </div>
                        <FormControl error={!!errors.selected?.message}  className={classes.formContainer}>
            <FormLabel component="legend" className={classes.FormLable}>{questions?.title}</FormLabel>
            <FormHelperText>{errors.selected?.message}</FormHelperText>
            <div  className={classes.formContainerCheckbox}>
            <Controller
                  // {...register(`answers[${index}].selected`, {
                  //   required: "پر کردن این قسمت الزامی است"
                  // })}
                  
              name={`answers[${fields.length-1}].selected`}
              render={props =>
                questions?.options?.map((option, index) => (
                  <FormControlLabel  style={{whiteSpace:"noWrap"}}      
                    control={
                      <Checkbox
                        
                        onChange={() => props.field.onChange(handleCheck(option?.text))}
                        // defaultChecked={defaultIds.includes(item.id)}
                      />
                    }
                    key={option?._id}
                    label={option?.text}
                  />
                ))
              }
              control={control}
            /></div>
          </FormControl>
                        
            </>
          )
 
      
    
        case "Yes_No":
          return(
            <FormControl component="fieldset" className={classes.formContainer}>
            <div  className={classes.FormLable}>{questions?.title}</div>
            <Controller
              rules={{ required: true }}
              control={control}
              {...register(`answers[${fields.length-1}].selected`, {
                required: "پر کردن این قسمت الزامی است"
              })}
              // name="selected"
              render={({ field }) => {
                console.log(field)
                return (
    
                  <RadioGroup {...field} row >
                  
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
            )
      
    
        case "MultipleChoice":
          const handleCheck = checkedId => {
            const { selected: ids } = getValues();
            const newIds = ids?.includes(checkedId)
              ? ids?.filter(id => id !== checkedId)
              : [...(ids ?? []), checkedId];
            return newIds;
          };
          return(
            <FormControl error={!!errors.selected?.message}  className={classes.formContainer}>
            <FormLabel component="legend" className={classes.FormLable}>{questions?.title}</FormLabel>
            <FormHelperText>{errors.selected?.message}</FormHelperText>
            <div  className={classes.formContainerCheckbox}>
            <Controller
                  // {...register(`answers[${index}].selected`, {
                  //   required: "پر کردن این قسمت الزامی است"
                  // })}
                  
              name={`answers[${fields.length-1}].selected`}
              render={props =>
                questions?.options?.map((option, index) => (
                  <FormControlLabel  style={{whiteSpace:"noWrap"}}      
                    control={
                      <Checkbox
                        
                        onChange={() => props.field.onChange(handleCheck(option?.text))}
                        // defaultChecked={defaultIds.includes(item.id)}
                      />
                    }
                    key={option?._id}
                    label={option?.text}
                  />
                ))
              }
              control={control}
            /></div>
          </FormControl>
            )
    
    
        case "SingleChoice":
          return(
            <FormControl component="fieldset" className={classes.formContainer}>
            <div  className={classes.FormLable}>{questions?.title}</div>
            <Controller
              rules={{ required: true }}
              control={control}
    
              name="selected"
              render={({ field }) => {
                console.log(field)
                return (
    
                  <RadioGroup {...field} row >
                  {questions?.options?.map((option)=>{
                    return(
                    
                    <FormControlLabel
                    value={option?.text}
                    control={<Radio />}
                    label={option?.text}
                  />
                  )})}
                  </RadioGroup>
           
                );
              }}
            />
            </FormControl>
            )
    
    
    
    
        case "InputRange":
        
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
    

    return( 
      <FormControl component="fieldset" className={classes.formContainer}>
       <div  className={classes.FormLable}>{questions?.title}</div>
      <Controller
        name={`answers[${fields.length-1}].input`}
        control={control}
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
          return(
            <div>لطفا منتظر بمانید</div>
            )
      }

  }


  const handleBack=()=>{
    setActiveStep(activeStep - 1);
    remove(fields.length-1)
  }

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

        
    {fields.slice(-1).map((field,item, index) => {
      console.log("fields",field);
      console.log("item",item);
      console.log("index",index);

  return(
    <>
    <div>{QuestinsofQuestionnaire(index,item)}</div>
    <Button
    className={classes.button}
    disabled={activeStep === 0}
    onClick={handleBack}
    // onClick={() => remove(fields.length-1)}
    color="secondary"
  >
    برگشت
  </Button></>
  )
        

        })}
        
      </>
    );
  };

export default QuestionnaireForm