import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
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

function Adduser() {
  const classes = useStyles();

  const phoneRegExp = /9([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/;

  const validationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(
        phoneRegExp,
        "شماره موبایل را بدون صفر و با حروف انگلیسی وارد کنید",
      ),
    Username: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
    name: yup.string().required("لطفا نام خود را وارد کنید"),
    family: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
    email: yup.string().email("لطفا ایمیل معتبر وارد کنید"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
    // history.push("/login/step2")
  };

  const fileSelectHandler = (e) => {
    console.log(e.target.files[0]);
  };
  const fileUploadHandler = () => {};

  let { path, url } = useRouteMatch();

  return (
    <Paper>
      <Box px={3} py={2} className={classes.root}>
        <Typography
          variant="h6"
          align="center"
          margin="dense"
          color="secondary"
          style={{ fontWeight: "bold" }}
        >
          کاربر جدید
        </Typography>
        <Divider style={{ marginTop: "8px" }} />

        <Grid item xs={6} sm={6} className={classes.TabHeader}>
          <Grid>
            <NavLink
              to={`${url}`}
              className={classes.item}
              activeClassName={classes.activeItem}
            >
              وضعیت
            </NavLink>
          </Grid>
          <Grid>
            <NavLink
              to={`${url}/netflix2`}
              className={classes.item}
              activeClassName={classes.activeItem}
            >
              صدا و تصویر
            </NavLink>
          </Grid>
        </Grid>

        <Grid container spacing={1} className={classes.container}>
          <div>
            <Grid item xs={12} sm={12} className={classes.inputText}>
              <div className={classes.input}>
                <label className={classes.label}>نام </label>
                <TextField
                  className={classes.TextField}
                  required
                  id="name"
                  name="name"
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
                style={{ color: "red" }}
              >
                {errors.name?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} className={classes.inputText}>
              <div className={classes.input}>
                <label className={classes.label}>نام خانوادگی </label>
                <TextField
                  className={classes.TextField}
                  required
                  id="family"
                  name="family"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("family")}
                  error={errors.family ? true : false}
                />
              </div>
              <Typography
                variant="inherit"
                color="textSecondary"
                style={{ color: "red" }}
              >
                {errors.family?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} className={classes.inputText}>
              <div className={classes.input}>
                <label className={classes.label}>نام کاربری </label>
                <TextField
                  className={classes.TextField}
                  required
                  id="Username"
                  name="Username"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("Username")}
                  error={errors.Username ? true : false}
                />
              </div>
              <Typography
                variant="inherit"
                color="textSecondary"
                style={{ color: "red" }}
              >
                {errors.Username?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} className={classes.inputText}>
              <div className={classes.input}>
                <label className={classes.label}>شماره موبایل</label>
                <TextField
                  className={classes.TextField}
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("phoneNumber")}
                  error={errors.phoneNumber ? true : false}
                />
              </div>
              <Typography
                variant="inherit"
                color="textSecondary"
                style={{ color: "red" }}
              >
                {errors.phoneNumber?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} className={classes.inputText}>
              <div className={classes.input}>
                <label className={classes.label}>ایمیل</label>
                <TextField
                  className={classes.TextField}
                  required
                  id="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("email")}
                  error={errors.email ? true : false}
                />
              </div>
              <Typography
                variant="inherit"
                color="textSecondary"
                style={{ color: "red" }}
              >
                {errors.email?.message}
              </Typography>
            </Grid>
          </div>
          <Grid
            item
            xs={6}
            sm={6}
            style={{ marginTop: "32px", border: "5px solid red" }}
          >
            آپلود عکس
            <input type="file" onChange={fileSelectHandler} />
            <button onClick={fileUploadHandler}>آپلود</button>
          </Grid>
        </Grid>

        <Box mt={8} style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
  );
}

export default Adduser;
