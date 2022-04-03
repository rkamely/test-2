import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "../Form.css";
import axios from "axios";
import { useParams ,useHistory} from "react-router";

const useStyles = makeStyles({
  Button: {
    marginTop: "8px",
    fontFamily: "Shabnam",
    cursor: "pointer",
  },
});
// const FILE_SIZE = 1000*1000;
//     const SUPPORTED_FORMATS = [
//       "image/jpg",
//       "image/jpeg",
//       "image/gif",
//       "image/png"
//     ];
//     const validationSchema = yup.object({
//       name: yup
//       .string("نام خود را وارد کنید")
//       .min(2, "حداقل 8 کلمه نیاز است")
//       .required("نام شرکت خود را وارد کنید"),
  
  
//     icon_image: yup
//       .mixed()
//       .required("لطفا یک فایل انتخاب کنید")
//       .test(
//         "fileFormat",
//         "این فرمت از فایل پشتیبانی نمیشود",
//         value => value && SUPPORTED_FORMATS.includes(value?.type)
//       )
//       .test(
//         "fileSize",
//         "قایل انتخابی حجم زیادی دارد",
//         (value) => {
//           console.log("vlaue",value?.size)
//           return value && value?.size <= FILE_SIZE
//         }
//       ),
  
  
//       thumbnail_image:yup
//       .mixed()
//       .required("لطفا یک فایل انتخاب کنید")
//       .test(
//         "fileFormat",
//         "این فرمت از فایل پشتیبانی نمیشود",
//         value => value && SUPPORTED_FORMATS.includes(value?.type)
//       )
//       .test(
//         "fileSize",
//         "قایل انتخابی حجم زیادی دارد",
//         (value) => {
//           console.log("vlaue",value?.size)
//           return value && value?.size <= FILE_SIZE
//         }
//       ),
    
// });







const CategoryUpdateForm = () => {
  const [Industry, setIndustry] = useState({
      name:"",
      icon_image:"",
      thumbnail_image:""
    });

  const params = useParams();
  const history = useHistory();
// const[upload,setUpload]=useState()
const [ change,setChange]=useState(true)
const[uploadIcon,setUploadIcon]=useState()
const[uploadThumbnail,setUploadThumbnail]=useState()

 useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get(
        "http://nahoor.af:8080/nahoor/category/" + params.id,
      );
      setIndustry(response.data);
    }
    fetchMyAPI();
  }, []);

  const classes = useStyles();
//   const onUserNameChange = (event) => {
//     // event.target.value is the text entered in the input box
//     setIndustry(event.target.value);
//   };
  const fileSelectedHandler=(e)=>{
    // setUpload(e.target.files[0])
    setChange(false)
    const fd=new FormData();
   fd.append("image",e.target.files[0],e.target.files[0].name)
   console.log(...fd)
   //post axios see maximillians for that 3min last time
  }
//   const fileUploadHandler=()=>{
//    const fd=new FormData();
//    fd.append("image",upload,upload.name)
//   //  console.log(upload) ok
//   //  console.log(upload.name) ok
  
//   // for (var [key, value] of fd.entries()) { 
//   //   console.log(key, value);
//   // }
//   // or
//    console.log(...fd)
//    //post axios see maximillians for that 3min last time
//   }
  


  const onTextFieldChange = (event) => {
    setIndustry({
      ...Industry,
      [event.target.name]:event.target.value
    });
    console.log(Industry);
  };




const formik = useFormik({
    initialValues: {
      Industry,
    },
    // validationSchema: validationSchema,
    onSubmit:async (values) => {
      alert(JSON.stringify(values, null, 2));
        try{
          console.log(Industry);
          console.log(values);
          await axios.put("http://nahoor.af:8080/nahoor/category/" + params.id,values)
             history.push("/app/categoryList")
        }catch(error){
            console.log("something went wrong")
        }
    },
    enableReinitialize: true,
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
      formik.values.Industry.icon_image=uploadIcon
    }
    const fileUploadHandlerThumbnail=()=>{
      const fd=new FormData();
      // fd.append("image",uploadThumbnail,uploadIcon.name)
      console.log(...fd)
      console.log(formik.values)
      formik.values.Industry.thumbnail_image=uploadThumbnail
    }
    /////////
    // const onFormSubmit=async(e)=>{
    //   e.preventDefault()
    //     try{
    //       console.log(Industry);
    //       await axios.put("http://nahoor.af:8080/nahoor/category/" + params.id,Industry)
    //          history.push("/app/categoryList")
    //     }catch(error){
    //         console.log("something went wrong")
    //     }
    // }
  const handleClick=()=>{
      history.push("/app/categoryList")
  }
  return (
    <div style={{ width: "50%", direction: "rtl" }}>
      {console.log(Industry)}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          variant="outlined"
          name="name"
          label="نام زیر صنعت"
          type="text"
          value={formik.values.Industry.name}
          onChange={(e)=>onTextFieldChange(e)}
          // error={formik.touched.name && Boolean(formik.errors.name)}
          // helperText={formik.touched.name && formik.errors.name}
        />
        <hr style={{ margin: "8px 0px" }} />
        <TextField
          className={classes.form}
          variant="outlined"
          fullWidth
          id="iconImage"
          type="file"
          name="iconImage"
          label="عکس"
          placeholder="asdasdasd"
          onChange={fileSelectedHandlerIcon}
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
          id="thumbnailImage"
          type="file"
          name="thumbnailImage"
          label="عکس"
          placeholder="asdasdasd"
          onChange={fileSelectedHandlerThumbnail}
          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
          }}//font size of input label
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

export default CategoryUpdateForm;
