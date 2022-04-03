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
  const FILE_SIZE = 1000*1000;
      const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png"
      ];
      const validationSchema = yup.object({
    name:yup
    .string('Enter name')
    .min(2, 'name should be of minimum 2 characters length')
    .required('name is required'),
    desc: yup
      .string('Enter your desc')
      .required('desc is required'),
    price_aff: yup
      .string('Enter price')
      .required('price is required'),
    price_irt: yup
      .string('Enter your price')
      .required('price is required'),
    rating: yup
      .string('Enter rating')
      .required('rating is required'),
    place_holder_image: yup
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
  






const ProductAddList= () => {

    const[uploadPriductImage,setUploadPriductImage]=useState()
  const params = useParams();
  console.log(params)
  const history = useHistory();
// const[upload,setUpload]=useState()
const [ change,setChange]=useState(true)




  const classes = useStyles();
//   const onUserNameChange = (event) => {
//     // event.target.value is the text entered in the input box
//     setCompany(event.target.value);
//   };
//   const fileSelectedHandler=(e)=>{
//     // setUpload(e.target.files[0])
//     setChange(false)
//     const fd=new FormData();
//    fd.append("image",e.target.files[0],e.target.files[0].name)
//    console.log(...fd)
//    //post axios see maximillians for that 3min last time
//   }
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
  


//   const onTextFieldChange = (event) => {
//     setCompany({
//       ...Company,
//       [event.target.name]:event.target.value
//     });
//     console.log(Company);
//   };

//   const onFormSubmit=async(e)=>{
//     e.preventDefault()
//       try{
//         console.log(Company);
//         await axios.post("http://nahoor.af:8080/nahoor/category/" + params.id,Company)
//            history.push("/app/categoryList")
//       }catch(error){
//           console.log("something went wrong")
//       }
//   }
const handleClick=()=>{
    history.push("/app/products")
}

const fileSelectedHandler=(e)=>{
    setUploadPriductImage(e.target.files[0])
    formik.values.place_holder_image=uploadPriductImage
  }
  const fileUploadHandler=()=>{
    const fd=new FormData();
    // fd.append("image",uploadIcon,uploadIcon.name)
    console.log(...fd)
    console.log(formik.values)
    formik.values.place_holder_image=uploadPriductImage
  }
const formik = useFormik({
    initialValues: {
        name:"",
        place_holder_image:null,
        desc:"",
        price_aff:"",
        price_irt:"",
        rating:"",
    },
    validationSchema: validationSchema,
    onSubmit: async(values) => {
        let formData=new FormData();
        formData.append("name",values.name)
        formData.append("place_holder_image",values.place_holder_image)
        formData.append("desc",values.desc)
        formData.append("price_aff",values.price_aff)
        formData.append("price_irt",values.price_irt)
        formData.append("rating",values.rating)
        formData.append("formData",formData)
        
      try{
        console.log(values);
        await axios.post("http://nahoor.af:8080/nahoor/category/" + params.id,values)
           history.push("/app/categoryList")
      }catch(error){
          console.log("something went wrong")
      }
        console.log("1",formData.get("name"))
        console.log("2",formData.get("place_holder_image"))
        console.log("3",formData.get("desc"))
        console.log("4",formData.get("price_aff"))
        console.log("5",formData.get("price_irt"))
        console.log("6",formData.get("rating"))
        console.log("7",formData.get("formData"))
        console.log("8",...formData)
        console.log("submit",values)
           alert(JSON.stringify(values, null, 2));
            alert("from submitted!")
            history.push("/app/products")
    },
    enableReinitialize: true,
  });
  
  return (
    <div style={{ width: "50%", direction: "rtl" }}>
      {console.log(formik.values)}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          variant="outlined"
          name="name"
          label="نام محصول"
          type="text"
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <hr style={{ margin: "8px 0px" }} />
        <TextField
          className={classes.form}
          variant="outlined"
          fullWidth
          id="place_holder_image"
          type="file"
          name="iconImage"
          label="عکس"
          placeholder="asdasdasd"
          onChange={fileSelectedHandler}
          error={formik.touched.place_holder_image && Boolean(formik.errors.place_holder_image)}
          helperText={formik.touched.place_holder_image && formik.errors.place_holder_image}
          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
            
          }} //font size of input label
        />
        <Button
          className={classes.Button}
          color="primary"
          variant="contained"
          type="button"
          onClick={fileUploadHandler}
          disabled={formik.values.place_holder_image===null}
        >
          upload
        </Button>
         <hr style={{ margin: "8px 0px" }} />
    

         <TextField
          className={classes.form}
          variant="outlined"
          fullWidth
          id="desc"
          name="desc"
          label="توضیحات بلند"
          onChange={formik.handleChange}
          error={formik.touched.desc && Boolean(formik.errors.desc)}
          helperText={formik.touched.desc && formik.errors.desc}
          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
          }} //font size of input label
        />

         <hr style={{ margin: "8px 0px" }} />
         
         <TextField
          variant="outlined"
          className={classes.form}
          fullWidth
          id="price_irt"
          name="price_irt"
          label="قیمت ریالی"
          type="text"
          // onChange={(e) => handleChange(e)}
          onChange={formik.handleChange}
          error={formik.touched.price_irt && Boolean(formik.errors.price_irt)}
          helperText={formik.touched.price_irt && formik.errors.price_irt}
          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
          }} //font size of input label
        />
         <hr style={{ margin: "8px 0px" }} />
         <TextField
          variant="outlined"
          className={classes.form}
          fullWidth
          id="price_aff"
          name="price_aff"
          label="قیمت افغانی"
          // onChange={(e) => handleChange(e)}
          onChange={formik.handleChange}
          error={formik.touched.price_aff && Boolean(formik.errors.price_aff)}
          helperText={formik.touched.price_aff && formik.errors.price_aff}
          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
          }} //font size of input label
        />
         <hr style={{ margin: "8px 0px" }} />
         <TextField
          className={classes.form}
          variant="outlined"
          fullWidth
          type="text"
          id="rating"
          name="rating"
          label="امتیاز"
          onChange={formik.handleChange}
          // onChange={formik.handleChange}
          error={formik.touched.rating && Boolean(formik.errors.rating)}
          helperText={formik.touched.rating && formik.errors.rating}
          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
          }} //font size of input label
        />
         <hr style={{ margin: "8px 0px" }} />

        <Button
          className={classes.Button}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
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

export default ProductAddList;
