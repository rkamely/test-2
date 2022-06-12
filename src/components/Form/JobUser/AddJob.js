import React, { useEffect, useState } from "react";
import moment from "moment";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import {
  DatePicker,
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from "@material-ui/pickers";
import { date } from "yup/lib/locale";
import axios from "axios";

const AddJob = ({handleClose,onEventAdded}) => {

  const classes = useStyles();
  // const [selectedDate, handleDateChange] = useState(moment());
  jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

  const validationSchema = yup.object().shape({
    user: yup.string().required("لطفا نام کاربر را وارد کنید"),
    apiary: yup.string().required("لطفا نام زنبورستان را وارد کنید"),
    // Hive: yup.string().required("لطفا نام کندو را وارد کنید"),
    priority: yup.string().required("لطفا الویت را مشخص کنید"),
    // Reminder:yup.string().required("لطفا الویت را مشخص کنید"),
    title: yup.string().required("لطفا عنوان کار خود را وارد کنید"),
    fromDate: yup.date().nullable(),
    toDate: yup.date().nullable(),
    fromTime: yup.date().nullable(),
    toTime: yup.date().nullable(),
    // Checkbox:yup.boolean()
    // .oneOf([true], "این ")
  });

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
     getValues, setValue
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [start, setStart] = useState(new Date(2022, 4, 19));
  const [selectedDate, handleDateChange] = useState(new Date());



  const [fromDate, setFromDate] = useState(null);
  const [ toDate,setToDate] =useState(null);
  const [ fromTime,setFromTime] =useState(null);
  const [ toTime,setTotime] =useState(null);
  const value = getValues('fromDate') ;
  const valueToDate = getValues('toDate') ;
  const valueFromTime=getValues('fromTime') ;
  const valueTotime=getValues('toTime') ;

  useEffect(() => {
    register('fromDate');
    register('toDate');
  }, [register]);

  useEffect(() => {
    register('fromTime');
    register('toTime');
  }, [register]);

  useEffect(() => {
    setFromDate(value || null);
    setToDate(valueToDate || null);
    setFromTime(valueFromTime || null);
    setTotime(valueTotime || null); 
  }, [setFromDate, value,setToDate,valueToDate,setFromTime, valueFromTime,setTotime,valueTotime])
  
  // useEffect(() => {
  
  //   setTotime(valueTotime || null); 
  // }, [setFromTime, valueFromTime,setTotime,valueTotime])

      /////////////////////////////////////////////////////////////////////////////////////////
  
      const token = localStorage.getItem("id_token")
   console.log(token);
      useEffect(() => {
        const fetchData = async () =>{
          // setLoading(true);
          try {
            const {data: response} = await axios.post("http://188.121.121.225/api/event/GetForMonth",{ "date":"1401/03/01"},{
              headers: {
                'token': `${token}` 
              },
            },);
            console.log( "show response" , response.data);
            // setApiariesList(response.data )
            // setLoading(false)
          } catch (error) {
          //  if (error.response?.status === 401) {
          //    localStorage.clear("id_token")
          //  }
           console.error("سرور دچار مشکل شده است"+"ApiaryList");
          //  setErrMessage("  با عرض پوزش سرور دچار مشکل شده است")
          //  setIserror(true)
          //  history.push("/app/Error")
          //  window.location.reload()
          }
          // setLoading(false);
        }
        fetchData();
      }, []);
   
  
      /////////////////////////////////////////////////////////////////////////////////////////

  const onSubmit =async (data) => {
    // console.log(JSON.stringify(data, null, 2));
    // alert(JSON.stringify(data, null, 2));
    // const response = await axios.post("http://185.202.113.165:3000/api/event", data ,{
    //   headers: {
    //     'token': `${token}` 
    //   },
    // },).then((response)=>{console.log("response1",response)})
    // event.preventDefault();
    const reza=data.fromTime
     const fromTime= moment(data.fromTime).format('LT');
     const toTime = moment(data.toTime).format('LT');
    onEventAdded({
      title: data.title,
      apiary:{
        _id: "62a3559f5cd336001211ee0e"
      },
      fromDate: new Date(data.fromDate),
      // endTime: toTime,
      toDate: new Date(data.toDate),
      fromTime: fromTime,
      toTime: toTime,
      category: "General",
      priority:"High",
      user:{
        _id: "62a33f81b621cf0012b6979f"
      }
    });

    console.log("data.fromTime");
    // props.onClose()
    // history.push("/login/step2")
  };

  let { path, url } = useRouteMatch();

  const options = [
    { label: "همه", value: "همه" },
    { label: "تغذیه زنبور", value: "تغذیه زنبور" },
    { label: "برداشت عسل", value: "برداشت عسل" },
    { label: "بیماری زنبور", value: "بیماری زنبور" },
  ];

  console.log("whatch", watch("fromDate"));

  return (
    <Paper>
      <Typography
        variant="h6"
        align="center"
        margin="dense"
        color="secondary"
        className={classes.Title}
      >
        کار جدید
      </Typography>
      <Divider className={classes.Divider1} />

      <Box px={3} py={2} className={classes.root}>
        <Grid container spacing={1} className={classes.container}>
          <Grid item xs={12}>
            <div className={classes.box}>
              <Grid item xs={12} sm={12} className={classes.Select}>
                <div className={classes.input}>
                  <label className={classes.label}>نام کاربر</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("user")}
                    error={errors.user ? true : false}

                    // onChange={(e) =>
                    //   setValue("select", e.target.value, { shouldValidate: true })
                    // } // Using setValue
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
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorMessage}
                >
                  {errors.user?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} className={classes.inputText}>
                <div className={classes.input}>
                  <label className={classes.label}> عنوان کار </label>
                  <TextField
                    className={classes.TextField}
                    required
                    id="title"
                    name="title"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    {...register("title")}
                    error={errors.title ? true : false}
                  />
                </div>
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorMessage}
                >
                  {errors.title?.message}
                </Typography>
              </Grid>
            </div>
            <Divider className={classes.Divider2} />
          </Grid>

          <Grid item xs={12}>
            <div className={classes.box2}>
              <div>
                <Typography
                  variant="h6"
                  align="center"
                  margin="dense"
                  color="primary"
                  className={classes.subTitle}
                >
                  دسته بندی
                </Typography>
              </div>
              <Grid item xs={6} sm={6} className={classes.TabHeader}>
                <Grid>
                  <NavLink
                    to={`${url}/netflix1`}
                    className={classes.item}
                    activeClassName={classes.activeItem}
                  >
                    عمومی
                  </NavLink>
                </Grid>
                <Grid>
                  <NavLink
                    to={`${url}/netflix2`}
                    className={classes.item}
                    activeClassName={classes.activeItem}
                  >
                    زنبورستان
                  </NavLink>
                </Grid>
                <Grid>
                  <NavLink
                    to={`${url}/netflix3`}
                    className={classes.item}
                    activeClassName={classes.activeItem}
                  >
                    کندو
                  </NavLink>
                </Grid>
              </Grid>
              <div className={classes.box}>
                <Grid item xs={12} sm={12} className={classes.Select}>
                  <div className={classes.input}>
                    <label className={classes.label}>زنبورستان</label>
                    <Select
                      className={classes.inputSelect}
                      required
                      variant="outlined"
                      {...register("apiary")}
                      error={errors.apiary ? true : false}

                      // onChange={(e) =>
                      //   setValue("select", e.target.value, { shouldValidate: true })
                      // } // Using setValue
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
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={classes.errorMessage}
                  >
                    {errors.apiary?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} className={classes.Select}>
                  <div className={classes.input}>
                    <label className={classes.label}>کندو</label>
                    <Select
                      className={classes.inputSelect}
                      required
                      variant="outlined"
                      {...register("Hive")}
                      error={errors.Hive ? true : false}

                      // onChange={(e) =>
                      //   setValue("select", e.target.value, { shouldValidate: true })
                      // } // Using setValue
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
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={classes.errorMessage}
                  >
                    {errors.Hive?.message}
                  </Typography>
                </Grid>
              </div>
            </div>
            <Divider className={classes.Divider2} />
          </Grid>

          <Grid item xs={12}>
            <div className={classes.box2}>
              <div>
                <Typography
                  variant="h6"
                  align="center"
                  margin="dense"
                  color="primary"
                  className={classes.subTitle}
                >
                  زمانبندی
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "100%" }}>
                  <Grid item xs={12} sm={12}>
                    <div className={classes.inputDate}>
                      <label className={classes.label}>از تاریخ</label>
                      <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
                        <Controller
                          control={control}
                          name="fromDate"
                       
                          render={({ field }) => (
                            <KeyboardDatePicker
                            className={classes.inputTimePicker}
                            inputVariant="outlined"
                            placeholderText="تاریخ را وارد نمایید"
                            value={fromDate}
                            onChange={(fromDate) => setValue('fromDate', fromDate, { shouldValidate: true, shouldDirty: true })}
                            />
                          )}
                        />
                      </MuiPickersUtilsProvider>
                    </div>
                    {/* {errors.select && <p>{errors.select.message}</p>} */}
                    <Typography
                      variant="inherit"
                      color="textSecondary"
                      className={classes.errorMessage}
                    >
                      {errors.fromDate?.message}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.Select}>
                    <div className={classes.input}>
                      <MuiPickersUtilsProvider
                        utils={JalaliUtils}
                        locale="fa"
                        className={classes.input}
                      >
                        <label className={classes.label}>از ساعت</label>
                        <Controller
                          control={control}
                          name="fromTime"
                          render={({ field }) => (
                            <KeyboardTimePicker
                            className={classes.inputTimePicker}
                            inputVariant="outlined"
                            placeholderText="ساعت را وارد نمایید"
                            value={fromTime}
                            onChange={(fromTime) => setValue('fromTime', fromTime, { shouldValidate: true, shouldDirty: true })}
                            />
                          )}
                        />
                      </MuiPickersUtilsProvider>
                    </div>
                    {/* {errors.select && <p>{errors.select.message}</p>} */}
                    <Typography
                      variant="inherit"
                      color="textSecondary"
                      className={classes.errorMessage}
                    >
                      {errors.fromTime?.message}
                    </Typography>
                  </Grid>
                </div>


                <div style={{ width: "100%" }}>
                  <Grid item xs={12} sm={12} className={classes.Select}>
                    <div className={classes.input}>
                      <label className={classes.label}>تا تاریخ</label>
                      <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
                        <Controller
                          control={control}
                          name="toDate"
                          render={({ field }) => (
                            <KeyboardDatePicker
                            className={classes.inputTimePicker}
                            inputVariant="outlined"
                            placeholderText="تاریخ را وارد نمایید"
                            value={toDate}
                            onChange={(toDate) => setValue('toDate', toDate, { shouldValidate: true, shouldDirty: true })}
                            />
                          )}
                        />
                      </MuiPickersUtilsProvider>
                    </div>
                    {/* {errors.select && <p>{errors.select.message}</p>} */}
                    <Typography
                      variant="inherit"
                      color="textSecondary"
                      className={classes.errorMessage}
                    >
                      {errors.toDate?.message}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.Select}>
                    <div className={classes.input}>
                      <MuiPickersUtilsProvider
                        utils={JalaliUtils}
                        locale="fa"
                        className={classes.input}
                      >
                        <label className={classes.label}>تا ساعت</label>
                        <Controller
                          control={control}
                          name="toTime"
                          render={({ field }) => (
                            <KeyboardTimePicker
                            className={classes.inputTimePicker}
                            inputVariant="outlined"
                            placeholderText="ساعت را وارد نمایید"
                            value={toTime}
                            onChange={(toTime) => setValue('toTime', toTime, { shouldValidate: true, shouldDirty: true })}
                            />
                          )}
                        />
                      </MuiPickersUtilsProvider>
                    </div>
                    {/* {errors.select && <p>{errors.select.message}</p>} */}
                    <Typography
                      variant="inherit"
                      color="textSecondary"
                      className={classes.errorMessage}
                    >
                      {errors.toTime?.message}
                    </Typography>
                  </Grid>
  
                </div>
              </div>
            </div>
            <Divider className={classes.Divider2} />
          </Grid>

          <Grid item xs={12}>
            <div className={classes.box2}>
              <div>
                <Typography
                  variant="h6"
                  align="center"
                  margin="dense"
                  color="primary"
                  className={classes.subTitle}
                >
                  فعالیت
                </Typography>
              </div>
              <div className={classes.box}>
                <Grid item xs={12} sm={12} className={classes.Select}>
                  <div>
                    <Grid className={classes.input}>
                      <label className={classes.label}>الویت</label>
                      <Select
                        className={classes.inputSelect}
                        required
                        variant="outlined"
                        {...register("apiary")}
                        error={errors.apiary ? true : false}

                        // onChange={(e) =>
                        //   setValue("select", e.target.value, { shouldValidate: true })
                        // } // Using setValue
                      >
                        {options?.map((option) => {
                          return (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label ?? option.value}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </Grid>
                  </div>
                  {/* {errors.select && <p>{errors.select.message}</p>} */}
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={classes.errorMessage}
                  >
                    {errors.apiary?.message}
                  </Typography>

                  <Grid item className={classes.checkBox}>
                    <FormControlLabel
                      {...register("Checkbox")}
                      control={<Checkbox />}
                      label="انجام شده"
                    />
                  </Grid>
                  {/* 
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorMessage}
                >
                  {errors.Checkbox?.message}
                </Typography>  */}
                </Grid>

                <Grid item xs={12} sm={12} className={classes.Select}>
                  <div className={classes.input}>
                    <label className={classes.label}>یادآوری</label>
                    <Select
                      className={classes.inputSelect}
                      required
                      variant="outlined"
                      {...register("priority")}
                      error={errors.priority ? true : false}

                      // onChange={(e) =>
                      //   setValue("select", e.target.value, { shouldValidate: true })
                      // } // Using setValue
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
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={classes.errorMessage}
                  >
                    {errors.priority?.message}
                  </Typography>
                </Grid>
              </div>
            </div>
            <Divider className={classes.Divider2} />
          </Grid>
        </Grid>

        <Box mt={8} style={{ width: "100%" }}>
          <div className={classes.buttonBox}>
            <Button
              variant="contained"
              className={classes.Button2}
              onClick={handleClose}
            >
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
  );
};
export default AddJob;
