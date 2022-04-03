import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "../Form.css";
import axios from "axios";
import { useParams ,useHistory} from "react-router";
import CategoryList from "../../../pages/CategoriesList/CategoryList";

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
  name: yup
    .string("نام خود را وارد کنید")
    .min(2, "حداقل 8 کلمه نیاز است")
    .required("نام شرکت خود را وارد کنید"),


  icon_image: yup
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
    ),


    thumbnail_image:yup
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
    ),
});

const CategoryAddForm = () => {
  const [Industry, setIndustry] = useState({
    // id:"",
    name:"",
    icon_image:"",
    // thumbnail_image:""
  });
  const classes = useStyles();
  const [status,setStatus]=useState()
  const params = useParams();
  const history=useHistory()
const[uploadIcon,setUploadIcon]=useState()
const[uploadThumbnail,setUploadThumbnail]=useState()

const formik = useFormik({
    initialValues: {
        // id:"",
        name:"",
        icon_image:null,
        thumbnail_image:null
    },
  validationSchema: validationSchema,
    onSubmit:async (values) => {
      let formData=new FormData();
      formData.append("name",values.name)
      formData.append("icon_image",values.icon_image)
      formData.append("thumbnail_image",values.thumbnail_image)
      formData.append("formData",formData)
      
      // const res=await axios.post("url",{body:formData})
      // setStatus(true)
      console.log("1",formData.get("name"))
      console.log("2",formData.get("icon_image"))
      console.log("3",formData.get("thumbnail_image"))
      console.log("4",formData.get("formData"))
      console.log("5",...formData)
      console.log("submit",values)
         alert(JSON.stringify(values, null, 2));
            alert("from submitted!")
            history.push("/app/CategoryList")

    },
  });

  /////////
  const fileSelectedHandlerIcon=(e)=>{
    setUploadIcon(e.target.files[0])
    formik.values.icon_image=uploadIcon
  }
  const fileSelectedHandlerThumbnail=(e)=>{
    setUploadThumbnail(e.target.files[0])
    formik.values.thumbnail_image=uploadThumbnail
  }
  const fileUploadHandlerIcon=()=>{
    const fd=new FormData();
    // fd.append("image",uploadIcon,uploadIcon.name)
    console.log(...fd)
    console.log(formik.values)
    formik.values.icon_image=uploadIcon
  }
  const fileUploadHandlerThumbnail=()=>{
    const fd=new FormData();
    // fd.append("image",uploadThumbnail,uploadIcon.name)
    console.log(...fd)
    console.log(formik.values)
    formik.values.thumbnail_image=uploadThumbnail
  }
  /////////

  if(status){
    return <CategoryList/>
  }
  const handleClick=()=>{
    history.push("/app/categoryList")
}

  return (
    <div style={{ width: "50%", direction: "rtl" }}>
      {console.log(formik.values)}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          variant="outlined"
          name="name"
          label="نام زیر صنعت"
          type="text"
          value={formik.values.name}
          // onChange={(e)=>onUserNameChange(e)}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <hr style={{ margin: "8px 0px" }} />
        <TextField
          className={classes.form}
          variant="outlined"
          fullWidth
          id="icon_image"
          type="file"
          name="icon_image"
          label="عکس"
          placeholder="asdasdasd"
          onChange={(e)=>fileSelectedHandlerIcon(e)}        
            // onChange={formik.handleChange}
          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
          }} //font size of input label
          error={formik.touched.icon_image && Boolean(formik.errors.icon_image)}
          helperText={formik.touched.icon_image && formik.errors.icon_image}
        /> 
          <Button
          className={classes.Button}
          color="primary"
          variant="contained"
          type="button"
          onClick={fileUploadHandlerIcon}
          disabled={formik.values.icon_image===null}
        >
          upload
        </Button>
        <hr style={{ margin: "8px 0px" }} />
            <TextField
          className={classes.form}
          variant="outlined"
          fullWidth
          id="thumbnail_image"
          type="file"
          name="thumbnail_image"
          label="عکس"
          placeholder="asdasdasd"
          onChange={(e)=>fileSelectedHandlerThumbnail(e)}        
          // onChange={formik.handleChange}
          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
          }} //font size of input label
           error={formik.touched.thumbnail_image && Boolean(formik.errors.thumbnail_image)}
          helperText={formik.touched.thumbnail_image && formik.errors.thumbnail_image}
        />
      
        <Button
          className={classes.Button}
          color="primary"
          variant="contained"
          type="button"
          onClick={fileUploadHandlerThumbnail}
          disabled={formik.values.thumbnail_image===null}

        >
          upload
        </Button>
        <hr style={{ margin: "8px 0px" }} />

        <Button
          className={classes.Button}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          // onClick={(e)=>onFormSubmit(e)}
        >
          ثبت
        </Button>
        <Button
          className={classes.Button}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          onClick={handleClick}
        >
          برگشت
        </Button>
      </form>
    </div>
  );
};

export default CategoryAddForm;
