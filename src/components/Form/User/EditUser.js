import React, { useEffect, useRef, useState } from "react";
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
  useRouteMatch,useParams
} from "react-router-dom";
import PreviewImage from "./PreviewImage";
import { date } from "yup/lib/locale";
import { axiosInstance } from "../../../pages/api/axios";

function EditUser({setUserList,userList,onClose}) {
  const classes = useStyles();
  const {id} = useParams()

  // const phoneRegExp = /09([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/;
  const phoneRegExp = '^0(\\9)?9\\d{9}$';
  const FILE_SIZE = 10000*10000;
  const [ loading , setLoading]=useState(true)

  const validationSchema = yup.object().shape({
    mobile: yup
      .string()
      .matches(
        phoneRegExp
      ),
    
    firstname: yup.string().required("لطفا نام خود را وارد کنید"),
    lastname: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
    // email: yup.string().required("لطفا ایمیل خود را وارد کنید").email("لطفا ایمیل معتبر وارد کنید"),
    // isStaff:yup.string().required(" پر کردن این فیلد الزامی است "),

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
const [data,setData]=useState()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },reset
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues:data
  });
  const[selectedFile,setSelectedFile]=useState(null)
const fileRef=useRef(null)





   /////////////////////////////////////////////////////////////////////////////////////////
   const editUser_id = localStorage.getItem("editUser_id")

   const token = localStorage.getItem("id_token")
   useEffect(() => {
     const fetchData = async () =>{
       // setLoading(true);
       try {
         const {data: response} = await axiosInstance.get(`/user/${editUser_id}`,{
           headers: {
             'token': `${token}` 
           },
         },);
         const information=response.data
        //  setData({apiaryUsage:information.apiaryUsage})
        const responseData = response.data
         reset({ firstname: responseData.firstname ,lastname: responseData.lastname,email: responseData.email,mobile: responseData.mobile ,employees:responseData.employees.map((el)=>{return {_id:el._id}}),apiary:responseData.apiary.map((el)=>{return {_id:el._id}})});
         setData(response.data)
         setLoading(false)
       } catch (error) {
         console.error(error.message);
       }
       // setLoading(false);
     }
     fetchData();
   }, [reset]);



   /////////////////////////////////////////////////////////////////////////////////////////



  const onSubmit = async(data) => {
    // alert(JSON.stringify(data, null, 2));
    const response = await axiosInstance.put(`/user/${editUser_id}`,data,{
      headers: {
        'token': `${token}` 
      },
    })
    reset(data);

    const updatedUser=[userList]

    const index = updatedUser.indexOf(data);

    // updatedUser[index]={...data};
    // setUserList({userList:updatedUser})

    window.location.reload()  
  
  };




  const fileSelectHandler = (e) => {
     setSelectedFile(e.target.files[0]);
  };
  const fileUploadHandler = () => {};

  let { path, url } = useRouteMatch();
  const option = [  
    { label: "مدیر", value: "true" },
    { label: "کارگر" , value: "false" },
  ]
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
ویرایش کاربر
        </Typography>
        <Divider className={classes.Divider1} />

        <Grid item xs={12} sm={12}  md={5}  className={classes.TabHeader}>
          <Grid>
            <NavLink
             exact to={`${url}`}
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

            {/* <Grid item xs={12} sm={12} className={classes.inputText}>
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
            </Grid> */}
{/* 
            <Grid item xs={12} sm={12} className={classes.inputText}>
              <div className={classes.input}>
                <label className={classes.label}>رمز عبور</label>
                <TextField
                  className={classes.TextField}
                  required
                  type="password"
                  id="password"
                  name="password"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("password")}
                  error={errors.password ? true : false}
                />
              </div>
              <Typography
                variant="inherit"
                color="textSecondary"
                className={classes.errorTitle}
              >
                {errors.password?.message}
              </Typography>
            </Grid> */}
            {/* <Grid item xs={12} sm={12} className={classes.inputText}>
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
            </Grid> */}

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

            {/* <Grid item xs={12} sm={12}  >
                <div className={classes.input}>
                  <label className={classes.label}>سمت شغلی</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    value={data?.isStaff}
                    variant="outlined"
                    {...register("isStaff")}

                  >
                    {option?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value} >
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
                {errors.isStaff?.message}
              </Typography>
              </Grid> */}
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


{  selectedFile ? <PreviewImage file={selectedFile} />:<Avatar src="./assets/Mask Group 3.svg" alt=""   className={classes.PreviewImage}/>
}            <Button
                 variant="contained"
                 component="label"
                 onChange={fileSelectHandler} 
                 style={{fontFamily:"Shabnam"}}
                 className={classes.EditPhoto}
 
             >
               <img src="./assets/edit-svgrepo-com.svg" className={classes.Edit}/>
               {selectedFile?<div>ویرایش</div>:<div style={{fontFamily:"Shabnam"}}>انتخاب عکس</div>}  
                
               <input
                  type="file"
                   hidden
                   accept= "image/jpg, image/jpeg , image/gif , image/png "
                  //  {...register("Img")}
               />
           </Button>



          </div>
            {/* <button onClick={()=>{
              // fileRef.current.onClick()
            }}>آپلود
            </button> */}
          </Grid>
        </Grid>
        <Divider className={classes.Divider2} />
        <Box  className={classes.ButtonBox} style={{ width: "100%" }}>
          <div  className={classes.button}>
            <Button variant="contained" className={classes.Button2} onClick={onClose}>
              انصراف
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
    </Paper>
  );
}

export default EditUser;
