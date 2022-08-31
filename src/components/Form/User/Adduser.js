import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Avatar,
  Box,
  Button,
  Divider,
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
  useHistory,
} from "react-router-dom";
import PreviewImage from "./PreviewImage";
import { axiosInstance } from "../../../pages/api/axios";

function Adduser({ setUserList, userList, onClose }) {
  const classes = useStyles();
  const phoneRegExp = /9([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/;
  const FILE_SIZE = 10000 * 10000;

  const validationSchema = yup.object().shape({
    mobile: yup
      .string()
      .matches(
        phoneRegExp,
        " لطفا شماره موبایل با حروف انگلیسی و ۱۱رقم وارد کنید",
      ),
    username: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
    firstname: yup.string().required("لطفا نام خود را وارد کنید"),
    lastname: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
    email: yup.string().email("لطفا ایمیل معتبر وارد کنید"),

    // Img:yup
    // .mixed()
    // .required("لطفا یک فایل انتخاب کنید")
    // .test(
    //   "fileSize",
    //   "قایل انتخابی حجم زیادی دارد",
    //   (value) => {
    //     return value && value?.size <= FILE_SIZE
    //   }
    // ),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState();
  const [errorMessage, setErrMessage] = useState("");
  const [error, setIserror] = useState(false);

  const fileRef = useRef(null);
  const token = localStorage.getItem("id_token");

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance
        .post("/user", data, {
          headers: {
            token: `${token}`,
          },
        })
        .then((response) => {
        });
      setUserList({ userList: [...userList, data] });
      setStatus(true);
      window.location.reload();
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.clear("id_token");
      } else if (error.response?.status === 500) {
        setErrMessage("این  شماره موبایل قبلا در سیستم ثبت شده است");
      }

      setIserror(true);
    }
  };

  const fileSelectHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const fileUploadHandler = () => {};

  let { path, url } = useRouteMatch();
  const option = [
    { label: "مدیر", value: "true" },
    { label: "کارگر", value: "false" },
  ];
  return (
    <Paper>
      <Box px={8} py={2} className={classes.root}>
        <Typography
          variant="h6"
          align="center"
          margin="dense"
          color="secondary"
          className={classes.Title}
        >
          کاربر جدید
        </Typography>
        <Divider className={classes.Divider1} />

        <Grid item xs={12} sm={12} md={5} className={classes.TabHeader}>
          <Grid>
            <NavLink
              exact
              to={`${url}`}
              className={classes.item}
              activeClassName={classes.activeItem}
            >
              اطلاعات عمومی
            </NavLink>
          </Grid>
          <Grid>
            <NavLink
              to={`${url}/sound`}
              className={classes.item}
              activeClassName={classes.activeItem}
            >
              دسترسی
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
                  id="firstname"
                  name="firstname"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("firstname")}
                  error={errors.firstname ? true : false}
                />
              </div>
              <Typography
                variant="inherit"
                color="textSecondary"
                className={classes.errorTitle}
              >
                {errors.firstname?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} className={classes.inputText}>
              <div className={classes.input}>
                <label className={classes.label}>نام خانوادگی </label>
                <TextField
                  className={classes.TextField}
                  required
                  id="lastname"
                  name="lastname"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("lastname")}
                  error={errors.lastname ? true : false}
                />
              </div>
              <Typography
                variant="inherit"
                color="textSecondary"
                className={classes.errorTitle}
              >
                {errors.lastname?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} className={classes.inputText}>
              <div className={classes.input}>
                <label className={classes.label}>نام کاربری </label>
                <TextField
                  className={classes.TextField}
                  required
                  id="username"
                  name="username"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("username")}
                  error={errors.username ? true : false}
                />
              </div>
              <Typography
                variant="inherit"
                color="textSecondary"
                className={classes.errorTitle}
              >
                {errors.username?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} className={classes.inputText}>
              <div className={classes.input}>
                <label className={classes.label}>شماره موبایل</label>
                <TextField
                  className={classes.TextField}
                  required
                  id="mobile"
                  name="mobile"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("mobile")}
                  error={errors.mobile ? true : false}
                />
              </div>
              <Typography
                variant="inherit"
                color="textSecondary"
                className={classes.errorTitle}
              >
                {errors.mobile?.message}
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
                className={classes.errorTitle}
              >
                {errors.email?.message}
              </Typography>
            </Grid>
          </div>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className={classes.uploaderImageBox}
          >
            <Typography variant="p">آپلود عکس</Typography>

            {/* <input type="file"  onChange={fileSelectHandler}  accept="image/png, image/jpeg"   /> */}
            <div
              className={classes.uploaderImage}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}
            >
              {selectedFile ? (
                <PreviewImage file={selectedFile} />
              ) : (
                <Avatar
                  src="./assets/Mask Group 3.svg"
                  alt=""
                  className={classes.PreviewImage}
                />
              )}

              <div
                variant="contained"
                component="label"
                onChange={fileSelectHandler}
                style={{ fontFamily: "Shabnam" }}
              >
                <Button type="file" style={{ transform: "translate(0px,-45px)" }}>
                  {" "}
                  <img src="./assets/Subtraction 4.png" width="75%" />
                </Button>
                <div className={classes.content}>
                  <div>
                    
                    <img src="./assets/edit-svgrepo-com.svg" />
                  </div>

                  {selectedFile ? (
                    <div>ویرایش</div>
                  ) : (
                    <div style={{ fontFamily: "Shabnam" }}>انتخاب عکس</div>
                  )}
                </div>
                <input
                  type="file"
                  hidden
                  accept="image/jpg, image/jpeg , image/gif , image/png "
                  //  {...register("Img")}
                />
              </div>
            </div>
            {/* <button onClick={()=>{
              // fileRef.current.onClick()
            }}>آپلود
            </button> */}
          </Grid>
        </Grid>
        {error ? (
          <div
            style={{
              color: "#000",
              background: "red",
              padding: "8px",
              borderRadius: "8px",
              textAlign: "center",
              marginBottom: "16px",
              transform: "translateY(32px)",
            }}
          >
            {errorMessage}
          </div>
        ) : null}

        <Divider className={classes.Divider2} />
        <Box className={classes.ButtonBox} style={{ width: "100%" }}>
          <div className={classes.button}>
            <Button
              variant="contained"
              className={classes.Button2}
              onClick={onClose}
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
}

export default Adduser;
