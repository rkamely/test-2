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
    console.log("Question_id",Question_id);
    const Hive_id = localStorage.getItem("Hive_id")
    console.log("Hive_id",Hive_id);
      ///////////////////////////////////////////////////////////////////////////////////////////
  
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://185.202.113.165:3000/api/question/get-by-id/${Question_id}`, {
            headers: {
              token: `${token}`,
            },
          },
        )
        console.log("show response Question", response.data);
        setQuestionForm(response.data)
        setLoading(false)
      } catch (error) {
       console.log(error);
      }
    };
    fetchData();
  }, []);
//////////////////////////////////////////////////////////////////////////////////////////////
    const onSubmit = async (data) => {
      alert(data)
      console.log("asdasdasd",data);
      const response = await axios
        .post(
          `http://185.202.113.165:3000/api/answer`,
          { input:data.Input ,question:{_id:`${Question_id}`}, hive:{_id:`${Hive_id}`}},
          {
            headers: {
              token: `${token}`,
            },
          },
        )
        .then((response) => {
          console.log("response1", response);
          // setApiariesList([...ApiariesList , response.data.data])
        });
      // setApiariesList([...ApiariesList , data])
      // console.log(ApiariesList, "ApiariesList");
      console.log();
     
    
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
              {...register("Input", {
                required: "پر کردن این قسمت الزامی است"
              })}
              name="Input"
              
              render={({ field }) => (
                <TextField
                className={classes.TextField}
                  type="number"
                  id="Input"
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
              name="Input"
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

            name="promoting2"
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
          const { item_ids: ids } = getValues();
          const newIds = ids?.includes(checkedId)
            ? ids?.filter(id => id !== checkedId)
            : [...(ids ?? []), checkedId];
          return newIds;
        };
        return(
          <FormControl error={!!errors.item_ids?.message}  className={classes.formContainer}>
          <FormLabel component="legend" className={classes.FormLable}>{QuestionForm.title}</FormLabel>
          <FormHelperText>{errors.item_ids?.message}</FormHelperText>
          <div  className={classes.formContainerCheckbox}>
          <Controller
  
            name="item_ids"
            render={props =>
              QuestionForm?.options?.map((option, index) => (
                <FormControlLabel  style={{whiteSpace:"noWrap"}}      
                  control={
                    <Checkbox
                      
                      onChange={() => props.field.onChange(handleCheck(option?._id))}
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

            name="promoting2"
            render={({ field }) => {
              console.log(field)
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
      name="MUI_Slider"
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
        break;
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
  