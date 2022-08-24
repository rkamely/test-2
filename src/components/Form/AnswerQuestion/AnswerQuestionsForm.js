import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Button,
    Select,
    MenuItem,
    FormLabel,
    FormControl,
    Radio,
    RadioGroup,
    Chip,
    ListItemText,
    FormHelperText,
    Slider,
  } from "@material-ui/core";
  import useStyles from "./styles";
  import MapBox from "../../MapBox/MapBox";
  import React, { Fragment, useEffect, useState } from "react";
  import { useForm, Controller } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  import * as yup from "yup";
  import Divider from "@material-ui/core/Divider";
  import axios from "axios";
  import ApiaryList from "../../../pages/candoProject/ApiaryList/ApiaryList";
import { ContentHook } from "@fullcalendar/react";
import { useParams, useHistory } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import Loading from "../../Loading/Loading";
import { axiosInstance } from "../../../pages/api/axios";

  const AnswerQuestionsForm = ({ newQuestion, onClose, refresh,setStatus,status }) => {
    const classes = useStyles();
    const[QuestionForm,setQuestionForm]=useState([])
    const [checkboxVlaue, setCheckboxVlaue] = useState([]);
    const validationSchema = yup.object().shape({
    //   name: yup
    //     .string()
    //     .required("لطفا نام زنبورستان وارد کنید")
    //     .min(2, "برای وارد کردن نام حداقل ۲ کاراکتر لازم است")
    //     .max(20, "Username must not exceed 20 characters"),
    //   hivesWithGoodCondition: yup
    //     .string()
    //     .required(" پر کردن این فیلد الزامی است "),
    //   hivesWithBadCondition: yup
    //     .string()
    //     .required(" پر کردن این فیلد الزامی است "),
    //   hivesWithVisitRequired: yup
    //     .string()
    //     .required(" پر کردن این فیلد الزامی است "),
    //   regionVegetation: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    //   regionType: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    //   state: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    //   city: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    //   apiaryUsage: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    });
    const {
      register,
      control,
      handleSubmit,
      getValues,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(validationSchema),
    });
    const token = localStorage.getItem("id_token");
    const Question_id = localStorage.getItem("Question_id")
    const Hive_id = localStorage.getItem("Hive_id")

////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axiosInstance.get(
          `/question/get-by-id/${Question_id}`, {
            headers: {
              token: `${token}`,
            },
          },
        )
        setQuestionForm(response.data)
        setLoading(false)
      } catch (error) {
      }
    };
    fetchData();
  }, []);
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//get all answer
useEffect(() => {
  const fetchData = async () => {
    // setLoading(true);
    try {
      const { data: response } = await axiosInstance.get(
        `/answer/get-by-id/${Question_id}`, {
          headers: {
            token: `${token}`,
          },
        },
      )
      setQuestionForm(response.data)
      setLoading(false)
    } catch (error) {
     console.log(error);
    }
  };
  fetchData();
}, []);
////////////////////////////////////////////////////////////////////////////////
    const onSubmit = async (data) => {
      alert(data)
    if(data.selected){
            const response = await axiosInstance
        .post(
          `/answer`,
          { selected:`${data.selected}` ,question:{_id:`${Question_id}`}, hive:{_id:`${Hive_id}`}},
          {
            headers: {
              token: `${token}`,
            },
          },
        )
        .then((response) => {
          // setApiariesList([...ApiariesList , response.data.data])
        });
    }else{
      const response = await axiosInstance
      .post(
        `/answer`,
        { input:`${data.input}` ,question:{_id:`${Question_id}`}, hive:{_id:`${Hive_id}`}},
        {
          headers: {
            token: `${token}`,
          },
        },
      )
      .then((response) => {
        // setApiariesList([...ApiariesList , response.data.data])
      });
    }

      // setApiariesList([...ApiariesList , data])
      // console.log(ApiariesList, "ApiariesList");
     
    
      onClose();
    };

  

const Content=()=>{


    switch (QuestionForm.type) {
      
      case "InputText":
        return(
          <div className={classes.formContainer}>
          <FormLabel component="legend" className={classes.FormLable}>{QuestionForm.title}</FormLabel>
            <Controller
              control={control}
              {...register("input", {
                required: "پر کردن این قسمت الزامی است"
              })}
              name="input"
              
              render={({ field }) => (
                <TextField
                className={classes.TextField}
                  type="number"
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
              name="input"
              render={({ message }) => <p style={{color:"red"}}>{message}</p>}
            />
          </div>
        )


      case "Yes_No":
        return(
          <FormControl component="fieldset" className={classes.formContainer}>
          <div  className={classes.FormLable}>{QuestionForm.title}</div>
          <Controller
            rules={{ required: true }}
            control={control}

            name="selected"
            render={({ field }) => {
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
          <FormLabel component="legend" className={classes.FormLable}>{QuestionForm.title}</FormLabel>
          <FormHelperText>{errors.selected?.message}</FormHelperText>
          <div  className={classes.formContainerCheckbox}>
          <Controller
  
            name="selected"
            render={props =>
              QuestionForm?.options?.map((option, index) => (
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
          <div  className={classes.FormLable}>{QuestionForm.title}</div>
          <Controller
            rules={{ required: true }}
            control={control}

            name="selected"
            render={({ field }) => {
              return (

                <RadioGroup {...field} row >
                {QuestionForm?.options?.map((option)=>{
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
     <div  className={classes.FormLable}>{QuestionForm.title}</div>
    <Controller
      name="input"
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





  
const [ loading , setLoading]=useState(true)

        return (
          <>
          {loading?
          <div className={classes.Loading}> <Loading color="orange" /></div>: 
          <Box px={3} py={2} className={classes.root}>
            <Typography
              variant="h6"
              align="center"
              margin="dense"
              className={classes.Title}
              color="secondary"
            >
              بازدید دستی
            </Typography>
  
            <Divider className={classes.Divider} />

  



              <div >{Content()}</div>

  
            <Divider className={classes.Divider2}/>
            <Box  className={classes.ButtonBox} >
                <Button variant="contained" className={classes.Button2} onClick={onClose}>
                  بستن
                </Button>
  
                <Button
                  variant="contained"
                  className={classes.Button1}
                  onClick={handleSubmit(onSubmit)}
                >
                  ثبت
                </Button>
            </Box>
          </Box>
          }
          </>
        );
    }
  
  export default AnswerQuestionsForm;
  