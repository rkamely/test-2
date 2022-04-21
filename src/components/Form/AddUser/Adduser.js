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
import PreviewImage from "./PreviewImage";

function Adduser() {
  const classes = useStyles();
  const phoneRegExp = /9([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/;
  const FILE_SIZE = 10000*10000;

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
    // Img:yup
    // .mixed()
    // .required("لطفا یک فایل انتخاب کنید")
    // .test(
    //   "fileSize",
    //   "قایل انتخابی حجم زیادی دارد",
    //   (value) => {
    //     console.log("vlaue",value?.size)
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
  const[selectedFile,setSelectedFile]=useState(null)
const fileRef=useRef(null)
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
    // history.push("/login/step2")
  };

  const fileSelectHandler = (e) => {
    console.log("salam",e.target.files[0]);
    setSelectedFile(e.target.files[0]);
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
          className={classes.Title}
        >
          کاربر جدید
        </Typography>
        <Divider className={classes.Divider1} />

        <Grid item xs={6} sm={6} className={classes.TabHeader}>
          <Grid>
            <NavLink
             exact to={`${url}`}
              className={classes.item}
              activeClassName={classes.activeItem}
            >
              وضعیت
            </NavLink>
          </Grid>
          <Grid>
            <NavLink
              to={`${url}/sound`}
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
                className={classes.errorTitle}
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
                className={classes.errorTitle}
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
                className={classes.errorTitle}
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
                className={classes.errorTitle}
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
                className={classes.errorTitle}
         
              >
                {errors.email?.message}
              </Typography>
            </Grid>
          </div>
          <Grid
            item
            xs={6}
            sm={6}
            className={classes.uploaderImageBox}
 
          >
            <Typography variant="p">آپلود عکس</Typography>
        
          {/* <input type="file"  onChange={fileSelectHandler}  accept="image/png, image/jpeg"   /> */}
        <div className={classes.uploaderImage}>

            { console.log("selectedFile",selectedFile)}
{  selectedFile ? <PreviewImage file={selectedFile} />:<Avatar src="./assets/Mask Group 3.svg" alt=""   className={classes.PreviewImage}/>
}            <Button
                 variant="contained"
                 component="label"
                 onChange={fileSelectHandler} 
                 style={{fontFamily:"Shabnam"}}
                 className={classes.EditPhoto}
 
             >
               <img src="./assets/edit-svgrepo-com.svg" style={{marginLeft:"8px"}}/>
                ویرایش
                
               <input
                  type="file"
                   hidden
                   accept= "image/jpg, image/jpeg , image/gif , image/png "
                   {...register("Img")}
               />
           </Button>



          </div>
            {/* <button onClick={()=>{
              // fileRef.current.onClick()
            }}>آپلود
            </button> */}
          </Grid>
        </Grid>

        <Box mt={8} style={{ width: "100%" }}>
          <div  className={classes.button}>
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
