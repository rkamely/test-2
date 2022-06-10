import React, { useState } from "react";
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
  MuiPickersUtilsProvider,
  TimePicker,
} from "@material-ui/pickers";
import { date } from "yup/lib/locale";

const AddJob = ({handleClose,onEventAdded}) => {

  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(moment());
  jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

  const validationSchema = yup.object().shape({
    Username: yup.string().required("لطفا نام کاربر را وارد کنید"),
    Beehive: yup.string().required("لطفا نام زنبورستان را وارد کنید"),
    Hive: yup.string().required("لطفا نام کندو را وارد کنید"),
    // Priority: yup.string().required("لطفا الویت را مشخص کنید"),
    // Reminder:yup.string().required("لطفا الویت را مشخص کنید"),
    jobTitle: yup.string().required("لطفا عنوان کار خود را وارد کنید"),
    email: yup.string().email("لطفا ایمیل معتبر وارد کنید"),
    startTime: yup.date().nullable(),
    // Checkbox:yup.boolean()
    // .oneOf([true], "این ")
  });

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [start, setStart] = useState(new Date(2022, 4, 19));
  const [end, setEnd] = useState(new Date());
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
    // event.preventDefault();
    onEventAdded({
      title: data.jobTitle,
      start: new Date(data.dateInput),
      time: data.startTime,
      end: new Date(data.endDate),
    });

    console.log("data.startTime");
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

  console.log("whatch", watch("dateInput"));

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
                    {...register("Username")}
                    error={errors.Username ? true : false}

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
                  {errors.Username?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} className={classes.inputText}>
                <div className={classes.input}>
                  <label className={classes.label}> عنوان کار </label>
                  <TextField
                    className={classes.TextField}
                    required
                    id="jobTitle"
                    name="jobTitle"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    {...register("jobTitle")}
                    error={errors.jobTitle ? true : false}
                  />
                </div>
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorMessage}
                >
                  {errors.jobTitle?.message}
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
                      {...register("Beehive")}
                      error={errors.Beehive ? true : false}

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
                    {errors.Beehive?.message}
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
                          name="dateInput"
                          render={({ field }) => (
                            <DatePicker
                              placeholderText="Select date"
                              onChange={(date) => field.onChange(date)}
                              selected={field.value}
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
                      {errors.Beehive?.message}
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
                          name="startTime"
                          render={({ field }) => (
                            <TimePicker
                              placeholderText="Select date"
                              onChange={(date) => field.onChange(date)}
                              selected={field.value}
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
                      {errors.startTime?.message}
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
                          name="endDate"
                          render={({ field }) => (
                            <DatePicker
                              placeholderText="Select date"
                              onChange={(date) => field.onChange(date)}
                              selected={field.value}
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
                      {errors.Hive?.message}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.Select}>
                    <div className={classes.input}>
                      <label className={classes.label}>تا ساعت</label>
                      <Select
                        className={classes.inputSelect}
                        required
                        variant="outlined"
                        {...register("endTime")}
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
                        {...register("Beehive")}
                        error={errors.Beehive ? true : false}

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
                    {errors.Beehive?.message}
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
