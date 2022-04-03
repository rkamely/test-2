import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';



const useStyles = makeStyles({
  Button: {
    marginTop: "8px",
    fontFamily: "Shabnam",
    cursor: "pointer",
  },
});
const FILE_SIZE = 10000*10000;
    const SUPPORTED_FORMATS = [
      "image/jpg",
      "image/jpeg",
      "image/gif",
      "image/png"
    ];
    const validationSchema = yup.object({
  name:yup
  .string('Enter your name')
  .min(2, 'name should be of minimum 2 characters length')
  .required('name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  videoFile: yup
    .mixed()
    .required("لطفا یک فایل انتخاب کنید")
    .test(
      "fileFormat",
      "این فرمت از فایل پشتیبانی نمیشود",
      value => value && SUPPORTED_FORMATS.includes(value?.type)
    )

    .test(
      "fileSize",
      "قایل انتخابی حجم زیادی دارد",
      (value) => {
        console.log("vlaue",value?.size)
        return value && value?.size <= FILE_SIZE
      }
    )
    
});

const Bardia = () => {
  const[upload,setUpload]=useState()

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      // id:"",
      name:"",
      email: 'foobar@example.com',
      password: 'foobar',
      videoFile:null,
    },
    validationSchema: validationSchema,
    onSubmit:async (values) => {
      let formData=new FormData();
      formData.append("name",values.name)
      formData.append("email",values.email)
      formData.append("password",values.password)
      formData.append("videoFile",values.videoFile.name)
      formData.append("formData",formData)
      // const res=await axios.post("url",{body:formData})
      console.log("1",formData.get("name"))
      console.log("2",formData.get("email"))
      console.log("3",formData.get("password"))
      console.log("4",formData.get("videoFile"))
      console.log("5",...formData)
      console.log("submit",values)
         alert(JSON.stringify(values, null, 2));   alert("from submitted!")
    },
  });
  const fileSelectedHandler=(e)=>{
    setUpload(e.target.files[0])
    formik.values.videoFile=upload
  }
  const fileUploadHandler=()=>{
    const fd=new FormData();

    // console.log(upload)
    fd.append("image",upload,upload.name)
    console.log(...fd)
    console.log(formik.values)
    formik.values.videoFile=upload

  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {console.log("formik",formik)}
     
      <TextField
          fullWidth
          id="name"
          variant="outlined"
          name="name"
          label="نام زیر صنعت"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
         <TextField
       
          variant="outlined"
          fullWidth
          id="videoFile"
          type="file"
          name="videoFile"
          label="عکس"
          placeholder="asdasdasd"
          // onChange={fileSelectedHandler}
     
          onChange={(e)=>fileSelectedHandler(e)}
          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
          }} 
          error={formik.touched.videoFile && Boolean(formik.errors.videoFile)}
          helperText={formik.touched.videoFile && formik.errors.videoFile}
        />
         <Button
          className={classes.Button}
          color="primary"
          variant="contained"
          type="button"
          onClick={fileUploadHandler}
          disabled={formik.values.videoFile===null}
        >
          upload
        </Button>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Bardia;