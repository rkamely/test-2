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

  const AnswerQuestionsForm = ({ newQuestion, onClose, refresh,setStatus,status }) => {
    const classes = useStyles();
    const[QuestionForm,setQuestionForm]=useState([])
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
      formState: { errors },
    } = useForm({
      resolver: yupResolver(validationSchema),
    });
    const token = localStorage.getItem("id_token");
    const Question_id = localStorage.getItem("Question_id")
    console.log("Question_id",Question_id);
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
      } catch (error) {
       console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log("salam iran");
//////////////////////////////////////////////////////////////////////////////////////////////
    const onSubmit = async (data) => {
      const response = await axios
        .post(
          `http://185.202.113.165:3000/api/question/get-by-id/${Question_id}`,
          { ...data, locationLangitude: 8, locationLatitude: 10  },
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
     
      // refresh("f")
      onClose();
    };

  

const Content=()=>{


    switch (QuestionForm.type) {
      case "InputText":
        return(
          <div className={classes.formContainer}>
          <FormLabel component="legend" className={classes.FormLable}>تعداد برداشت قاب عسل</FormLabel>
            <Controller
              control={control}
              {...register("Frame", {
                required: "پر کردن این قسمت الزامی است"
              })}
              name="Frame"
              
              render={({ field }) => (
                <TextField
                className={classes.TextField}
                  type="number"
                  id="Frame"
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
              name="Frame"
              render={({ message }) => <p style={{color:"red"}}>{message}</p>}
            />
          </div>
        )
      case "Yes_No":
        return(
          <div>Yes_No</div>
          )
    
      case "MultipleChoice":
        return(
          <div>MultipleChoice</div>
          )
      case "SingleChoice":
        return(
          <div>SingleChoice</div>
          )
      case "InputRange":
        return(
          <div>InputRange</div>
          )
      default:
        return(
          <div>نامشخص</div>
          )
        break;
    }
}





  

        return (
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
              <div className={classes.button}>
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
              </div>
            </Box>
          </Box>
        );
    }
  
  export default AnswerQuestionsForm;
  