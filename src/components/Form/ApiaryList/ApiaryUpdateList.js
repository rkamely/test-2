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
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";

import React, { Fragment, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MapBox from "../../../components/MapBox/MapBox";
import axios from "axios";
import { useParams } from "react-router-dom";


const ApiaryUpdateList = ({Apiary,setApiary}) => {
  const params = useParams();
  console.log("params", params.id)
  console.log("props.Apiary",Apiary);
  const classes = useStyles();
  const [errorMessage,setErrMessage] = useState()
  const [error,setIserror] = useState()
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("لطفا نام زنبورستان وارد کنید")
      .min(2, "برای وارد کردن نام حداقل ۲ کاراکتر لازم است")
      .max(20, "Username must not exceed 20 characters"),
    select: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    select2: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    select3: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    select4: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    select5: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
  });

  const preLoadValues = {
    name:"زنبورستان ۱",
    select:"تغذیه زنبور"
  }

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues:preLoadValues
  });


  const onSubmit = async (data) => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
    const response = await axios.put(`https://sdfsdfsdf/${params.id}`, data)
    const updatedApiary=[Apiary]
    const index = updatedApiary.indexOf(data);
    updatedApiary[index]={...data};
    setApiary({Apiary:updatedApiary})
    // setApiary(updatedApiary)
  };

  // useEffect(() => {
  //   axios.get(`https://sdfsdfsdf/${params.id}`)
  //     .then(res => {
  //       setApiary(res.data.data)
  //     })
  //     .catch(error=>{
  //       setErrMessage(["Cannot load user data"])
  //       setIserror(true)
  //     })
  // }, [])


  const option = [  
    { label: "باغ", value: "باغ" },
    { label: "مزرعه", value: "مزرعه" },
    { label: "مرتع کوهستانی", value: "مرتع کوهستانی" },
    { label: "دشت", value: "دشت" },
    { label: "سایر", value: "سایر" },
  ]
  const option2 = [  
    { label: "شهری", value: "شهری" },
    { label: "روستایی" , value: "روستایی" },
  ]
  const option3 = [  
    { label: "پرورش ملکه", value: "پرورش ملکه" },
    { label: "ژل رویال" , value: "ژل رویال" },
    { label: "تولید عسل", value: "تولید عسل" },
    { label: "سایر", value: "سایر" },
  ]


  
  const style = {
    borderRadius: "12px",
    overflow: "hidden",
    marginTop: "16px",
  };

  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2} className={classes.root}>
          <Typography
            variant="h6"
            align="center"
            margin="dense"
            color="secondary"
            className={classes.Title}

          >
            افزودن زنبورستان
          </Typography>
          <Divider className={classes.Divider}/>

          <Grid container spacing={1} className={classes.container}>
            <div >
              <Grid item xs={12} sm={12} className={classes.inputText}>
                <div className={classes.input}>
                  <label className={classes.label}>نام زنبورستان</label>
                  <TextField
                    className={classes.TextField}
                    required
                    id="name"
                    name="firstname"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    {...register("name")}
                    error={errors.name ? true : false}
                  />
                </div>
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}

                >
                  {errors.name?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} className={classes.Select}>
                <div className={classes.input}>
                  <label className={classes.label}>پوشش گیاهی منطقه</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    name = "select"
                    defaultValue={option[1].value}
                    {...register("select")}
                    error={errors.select ? true : false}
                    // value={}
                  >
                    {option?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.select?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div className={classes.input}>
                  <label className={classes.label}>نوع منطقه</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    defaultValue={option2[1].value}
                    {...register("select2")}
                    error={errors.select2 ? true : false}
                    // value={}
                  >
                    {option2?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.select2?.message}
                </Typography>
              </Grid>

              {/* <Grid item xs={12} sm={12}>
                <div className={classes.input}>
                  <label className={classes.label}>استان</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    defaultValue={options[2].value}
                    {...register("select3")}
                    error={errors.select3 ? true : false}
                    // value={}
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
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                {/* <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.select3?.message}
                </Typography>
              </Grid> */} 

              {/* <Grid item xs={12} sm={12}>
                <div className={classes.input}>
                  <label className={classes.label}>شهر </label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    defaultValue={options[3].value}

                    {...register("select4")}
                    error={errors.select4 ? true : false}
                    // value={}
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
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                {/* <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.select4?.message}
                </Typography>
              </Grid>  */}

              <Grid item xs={12} sm={12}>
                <div className={classes.input}>
                  <label className={classes.label}> کاربرد </label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    defaultValue={option3[1].value}

                    {...register("select5")}
                    error={errors.select5 ? true : false}
                    // value={}
                  >
                    {option3?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.select5?.message}
                </Typography>
              </Grid>
            </div>
            <Grid
              item
              xs={6}
              className={classes.Map}

            >
              <div className={classes.mapTitle}>
                انتخاب مکان از روی نقشه
              </div>
              <MapBox style={style} />
            </Grid>
          </Grid>

          <Box mt={8} style={{ width: "100%" }}>
            <div className={classes.button}>
              <Button variant="contained" className={classes.Button2}>
                انصراف
              </Button>

              <Button
                variant="contained"
                className={classes.Button1}
                onClick={handleSubmit(onSubmit)}
              >
                افزودن
              </Button>
            </div>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};
export default ApiaryUpdateList;
