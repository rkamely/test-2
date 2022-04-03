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
//   const FILE_SIZE = 1000*1000;
//       const SUPPORTED_FORMATS = [
//         "image/jpg",
//         "image/jpeg",
//         "image/gif",
//         "image/png"
//       ];
//       const validationSchema = yup.object({
//     name:yup
//     .string('Enter your name')
//     .min(2, 'name should be of minimum 2 characters length')
//     .required('name is required'),
//     desc: yup
//       .string('Enter your email')
//       .email('Enter a valid email')
//       .required('Email is required'),
//       price_aff: yup
//       .string('Enter your password')
//       .min(8, 'Password should be of minimum 8 characters length')
//       .required('Password is required'),
//       price_irt: yup
//       .string('Enter your password')
//       .min(8, 'Password should be of minimum 8 characters length')
//       .required('Password is required'),
//       rating: yup
//       .string('Enter your password')
//       .min(8, 'Password should be of minimum 8 characters length')
//       .required('Password is required'),
//     place_holder_image: yup
//       .mixed()
//       .required("لطفا یک فایل انتخاب کنید")
//       // .test(
//       //   "type",
//       //   "We only support jpeg",
//       //   (value) => !value || (value && value[0].type === "image/png")
        
//       // )
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
//       ) 
//   });
  





const ProductUpdateList= () => {
  const [Company, setCompany] = useState({
      name:"",
      place_holder_image:"",
      desc:"",
      price_aff:"",
      price_irt:"",
      rating:"",
    });
    const[uploadThumbnail,setUploadThumbnail]=useState()
  const params = useParams();
  console.log(params)
  const history = useHistory();
// const[upload,setUpload]=useState()
const [ change,setChange]=useState(true)


useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get("http://nahoor.af:8080/nahoor/product/"+params.id);
      setCompany(response.data);
    }

    fetchMyAPI();
  }, []);
console.log(Company)

  const classes = useStyles();
//   const onUserNameChange = (event) => {
//     // event.target.value is the text entered in the input box
//     setCompany(event.target.value);
//   };




  const onTextFieldChange = (event) => {
    setCompany({
      ...Company,
      [event.target.name]:event.target.value
    });
    console.log(Company);
  };



//important
//   const onFormSubmit=async(e)=>{
//     e.preventDefault()
//       try{
//         console.log(Company);
//         await axios.put("http://nahoor.af:8080/nahoor/category/" + params.id,Company)
//            history.push("/app/categoryList")
//       }catch(error){
//           console.log("something went wrong")
//       }
//   }
const handleClick=()=>{
    history.push("/app/products")
}


const formik = useFormik({
    initialValues: {
        Company,
    },
    // validationSchema: validationSchema,
    onSubmit: async(values) => {
      alert(JSON.stringify(values, null, 2));
      try{
        console.log(Company);
        console.log(values);
        await axios.put("http://nahoor.af:8080/nahoor/category/" + params.id,values)
           history.push("/app/categoryList")
      }catch(error){
          console.log("something went wrong")
      }
    },
    
    enableReinitialize: true,
  });

  const fileSelectedHandlerImage=(e)=>{
    setUploadThumbnail(e.target.files[0])
    formik.values.Company.place_holder_image=uploadThumbnail
  }
  const fileUploadHandlerImage=()=>{
    const fd=new FormData();
    // fd.append("image",uploadThumbnail,uploadThumbnail.name)
    console.log(...fd)
    console.log(formik.values)
    formik.values.Company.place_holder_image=uploadThumbnail
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
          label="نام محصول"
          type="text"
          value={formik.values.Company.name}
          onChange={(e)=>onTextFieldChange(e)}
        // error={formik.touched.name && Boolean(formik.errors.name)}
        //   helperText={formik.touched.name && formik.errors.name}
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
          onChange={fileSelectedHandlerImage}

          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
          }} //font size of input label
          error={formik.touched.place_holder_image && Boolean(formik.errors.place_holder_image)}
          helperText={formik.touched.place_holder_image && formik.errors.place_holder_image}
        />
        <Button
          className={classes.Button}
          color="primary"
          variant="contained"
          type="button"
          onClick={fileUploadHandlerImage}
        //   disabled={formik.values.logo_image===null}

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
          value={formik.values.Company.desc}
          label="توضیحات بلند"
          // onChange={(e) => handleChange(e)}
          onChange={(e)=>onTextFieldChange(e)}
        // error={formik.touched.desc && Boolean(formik.errors.desc)}
        //   helperText={formik.touched.desc && formik.errors.desc}
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
          value={formik.values.Company.price_irt}
          onChange={(e)=>onTextFieldChange(e)}
        //   error={formik.touched.price_irt && Boolean(formik.errors.price_irt)}
        //   helperText={formik.touched.price_irt && formik.errors.price_irt}
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
          value={formik.values.Company.price_aff}
          onChange={(e)=>onTextFieldChange(e)}
        //   onChange={formik.handleChange}
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
          value={formik.values.Company.rating}
          onChange={(e)=>onTextFieldChange(e)}
          // onChange={formik.handleChange}
        //   error={formik.touched.rating && Boolean(formik.errors.rating)}
        //   helperText={formik.touched.rating && formik.errors.rating}
          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
          }} //font size of input label
         
        />
         <hr style={{ margin: "8px 0px" }} />
     
        
         {/* <Button
        className={classes.Button}
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        onClick={fileUploadHandler}
      >
        uploadImage
      </Button> */}
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

export default ProductUpdateList;
