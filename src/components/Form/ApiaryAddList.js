





























// import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import "../Form.css";
// import axios from "axios";
// import { useParams, useHistory } from "react-router";
// import {
//   Box,
//   FormControl,
//   FormHelperText,
//   InputLabel,
//   ListSubheader,
//   MenuItem,
//   Select,
// } from "@material-ui/core";
// import useStyles from "./styles";
// import { LabelImportantOutlined } from "@material-ui/icons";
// import { styled } from "@material-ui/styles";

// const ApiaryAddList = () => {
//   const validationSchema = yup.object({
//     name: yup
//       .string("لطفا نام را انتخاب کنید")
//       .min(2, "name should be of minimum 2 characters length")
//       .required("لطفا نام را انتخاب کنید"),
//     VegetationOfTheArea: yup.string().required("Please select a product"),
//     // Area: yup.string().required("Please select a product").oneOf(formik.values.Area),
//     State: yup
//       .string("لطفا ادرس را وارد کنید")
//       .min(2, "name should be of minimum 2 characters length")
//       .required("name is required"),
//     City: yup
//       .string("لطفا ادرس را وارد کنید")
//       .min(2, "name should be of minimum 2 characters length")
//       .required("City is required"),
//     Application: yup
//       .string("Enter  Application")
//       .email("Enter a valid email")
//       .required("Application is required"),
//   });
//   const [age, setAge] = useState("");
//   const [VegetationOfTheArea, setVegetationOfTheArea] = useState("");
//   const classes = useStyles();

//   // const [Company, setCompany] = useState({
//   //   name: "",
//   //   VegetationOfTheArea: "",
//   //   Area: "",
//   //   State: "",
//   //   City: "",
//   //   Application: "",
//   // });

//   const handleSelectChange = (event) => {
//     console.log("salam", event.target.value);
//     setAge(event.target.value);
//     setVegetationOfTheArea(event.target.value);
//   };
//   console.log("age", age);
//   console.log("VegetationOfTheArea", VegetationOfTheArea);
//   const CssTextField = styled(TextField)({
//     "& label.Mui-focused": {
//       color: "green",
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: "green",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "red",
//       },
//       "&:hover fieldset": {
//         borderColor: "yellow",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "green",
//       },
//     },
//   });

//   const params = useParams();
//   console.log(params);
//   const history = useHistory();

//   const handleClick = () => {
//     history.push("/app/companiesList");
//   };

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       VegetationOfTheArea: "",
//       Area: "",
//       State: "",
//       City: "",
//       Application: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       let formData = new FormData();
//       formData.append("name", values.name);
//       formData.append("VegetationOfTheArea", values.VegetationOfTheArea);
//       formData.append("Area", values.Area);
//       formData.append("State", values.State);
//       formData.append("City", values.City);
//       formData.append("Application", values.Application);
//       formData.append("formData", formData);
//       // const res=await axios.post("url",{body:formData})
//       // setStatus(true)
//       console.log("1", formData.get("name"));
//       console.log("2", formData.get("VegetationOfTheArea"));
//       console.log("3", formData.get("Area"));
//       console.log("4", formData.get("State"));
//       console.log("5", formData.get("City"));
//       console.log("6", formData.get("Application"));
//       console.log("7", formData.get("formData"));
//       console.log("8", ...formData);
//       console.log("submit", values);
//       alert(JSON.stringify(values, null, 2));
//       alert("from submitted!");
//       history.push("/app/companiesList");
//     },
//   });

//   return (
//     <Box className={classes.root}>
//       <h2 style={{ textAlign: "center" }}>افزودن زنبورستان جدید</h2>
//       <div
//         style={{
//           direction: "rtl",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-start",
//           padding: "0 32px",
//         }}
//       >
//         {console.log(formik.values)}

//         <form onSubmit={formik.handleSubmit} style={{ width: "50%" }}>
//           <div className={classes.input}>
//             <lable className={classes.lable}>نام زنبورستان</lable>
//             <TextField
//               className={classes.inputSelect}
//               style={{ width: "250px" }}
//               id="name"
//               variant="outlined"
//               name="name"
//               type="text"
//               onChange={formik.handleChange}
//               error={formik.touched.name && Boolean(formik.errors.name)}
//               helperText={formik.touched.name && formik.errors.name}
//             />
//           </div>

//           {/* <div className={classes.input}>
//             <lable className={classes.lable}>پوشش گیاهی منطقه</lable>
//             <Select
//               defaultValue=""
//               className={classes.select}
//               inputProps={{
//                 classes: {
//                   icon: classes.icon,
//                   text: classes.text,
//                 },
//               }}
//               label="Grouping"
//               style={{ width: "250px" }}
//               fullWidth
//               labelId="VegetationOfTheArea-label"
//               id="grouped-select"
//               name="VegetationOfTheArea"
//               // value={VegetationOfTheArea}
//               onChange={handleSelectChange}
//               variant="outlined"
//             >
//               <MenuItem value={1}>one</MenuItem>
//               <MenuItem value={2}>two</MenuItem>
//               <MenuItem value={3}>three</MenuItem>
//             </Select>
//           </div> */}

//           <div className={classes.input}>
//             <lable className={classes.lable}>پوشش گیاهی منطقه</lable>
//             <FormControl
//               sx={{ m: 1, minWidth: 120 }}
//               className={classes.inputSelect}
//             >
//               {/* <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel> */}
//               <Select
//                 className={classes.inputSelect}
//                 variant="outlined"
//                 native
//                 onChange={handleSelectChange}
//                 id="VegetationOfTheArea"
//                 name="VegetationOfTheArea"
//                 error={formik.touched.name && Boolean(formik.errors.name)}
//                 helperText={formik.touched.name && formik.errors.name}
//               >
//                 <option aria-label="VegetationOfTheArea" value="" />
//                 <optgroup label="Category 1">
//                   <option value={1}>Optijjjkjon 1</option>
//                   <option value={2}>fgffghnion 2</option>
//                 </optgroup>
//                 <optgroup label="Category 2">
//                   <option value={3}>jhjjjhhg</option>
//                   <option value={4}>;;;jk</option>
//                 </optgroup>
//               </Select>
//             </FormControl>
//           </div>

//           <div className={classes.input}>
//             <lable className={classes.lable}>نوع منطقه</lable>
//             <FormControl
//               sx={{ m: 1, minWidth: 120 }}
//               className={classes.inputSelect}
//             >
//               {/* <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel> */}
//               <Select
//                 className={classes.inputSelect}
//                 variant="outlined"
//                 native
//                 onChange={handleSelectChange}
//                 id="Area"
//                 name="Area"
//                 error={formik.touched.name && Boolean(formik.errors.name)}
//                 helperText={formik.touched.name && formik.errors.name}
//               >
//                 <option aria-label="Area" value="" />
//                 <optgroup label="Category 1">
//                   <option value={1}>Optijjjkjon 1</option>
//                   <option value={2}>fgffghnion 2</option>
//                 </optgroup>
//                 <optgroup label="Category 2">
//                   <option value={3}>jhjjjhhg</option>
//                   <option value={4}>;;;jk</option>
//                 </optgroup>
//               </Select>
//             </FormControl>
//           </div>

//           <div className={classes.input}>
//             <lable className={classes.lable}>استان</lable>
//             <FormControl
//               sx={{ m: 1, minWidth: 120 }}
//               className={classes.inputSelect}
//             >
//               {/* <InputLabel htmlFor="grouped-select">Grouping</InputLabel> */}
//               <Select
//                 // className={classes.inputSelect}
//                 defaultValue=""
//                 id="State"
//                 variant="outlined"
//                 name="State"
//               >
//                 <MenuItem value={10}>تهران</MenuItem>
//                 <MenuItem value={11}>اصفهان</MenuItem>
//                 <MenuItem value={12}>تبریز</MenuItem>
//                 <MenuItem value={13}>کاشان</MenuItem>
//               </Select>
//             </FormControl>
//           </div>

//           <div className={classes.input}>
//             <lable className={classes.lable}>شهر</lable>
//             <FormControl
//               sx={{ m: 1, minWidth: 120 }}
//               className={classes.inputSelect}
//             >
//               {/* <InputLabel htmlFor="grouped-select">Grouping</InputLabel> */}
//               <Select
//                 // className={classes.inputSelect}
//                 defaultValue=""
//                 id="City"
//                 variant="outlined"
//                 name="City"
//               >
//                 <MenuItem value={10}>تهران</MenuItem>
//                 <MenuItem value={11}>اصفهان</MenuItem>
//                 <MenuItem value={12}>تبریز</MenuItem>
//                 <MenuItem value={13}>کاشان</MenuItem>
//               </Select>
//             </FormControl>
//           </div>

//           <div className={classes.input}>
//             <lable className={classes.lable}>کاربرد</lable>
//             <FormControl
//               sx={{ m: 1, minWidth: 120 }}
//               className={classes.inputSelect}
//             >
//               {/* <InputLabel htmlFor="grouped-select">Grouping</InputLabel> */}
//               <Select
//                 // className={classes.inputSelect}
//                 defaultValue=""
//                 id="Application"
//                 variant="outlined"
//                 name="Application"
//               >
//                 <MenuItem value={10}>تولید عسل</MenuItem>
//                 <MenuItem value={11}>گرده افشانی</MenuItem>
//                 <MenuItem value={12}>انبار</MenuItem>
//               </Select>
//             </FormControl>
//           </div>
//           {/* <div className={classes.input}>
//             <lable className={classes.lable}>استان</lable>
//             <Select
//               className={classes.inputSelect}
//               style={{ width: "250px" }}
//               fullWidth
//               labelId="State-label"
//               id="State"
//               name="State"
//               value={age}
//               onChange={handleSelectChange}
//               variant="outlined"
//             >
//               <MenuItem value={7}>Ten</MenuItem>
//               <MenuItem value={8}>Twenty</MenuItem>
//               <MenuItem value={9}>Thirty</MenuItem>
//             </Select>
//           </div>

//           <div className={classes.input}>
//             <lable className={classes.lable}>شهر </lable>
//             <Select
//               className={classes.inputSelect}
//               style={{ width: "250px" }}
//               fullWidth
//               labelId="City-label"
//               id="City"
//               name="City"
//               value={age}
//               onChange={handleSelectChange}
//               variant="outlined"
//             >
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={11}>Twenty</MenuItem>
//               <MenuItem value={12}>Thirty</MenuItem>
//             </Select>
//           </div>

//           <div className={classes.input}>
//             <lable className={classes.lable}>کاربرد</lable>
//             <Select
//               className={classes.inputSelect}
//               style={{ width: "250px" }}
//               fullWidth
//               labelId="Application-label"
//               id="Application"
//               name="Application"
//               value={age}
//               onChange={handleSelectChange}
//               variant="outlined"
//             >
//               <MenuItem value={10}>تولید عسل</MenuItem>
//               <hr
//                 style={{
//                   borderTop: "1px solid rgb( 240, 240, 240)",
//                   height: "2px",
//                 }}
//               />
//               <MenuItem value={20}>گرده افشانی</MenuItem>
//               <hr
//                 style={{
//                   borderTop: "1px solid rgb( 240, 240, 240)",
//                   height: "2px",
//                 }}
//               />
//               <MenuItem value={30}>انبار</MenuItem>
//             </Select>
//           </div> */}

//           <div
//             style={{
//               display: "flex",
//               width: "200%",
//               justifyContent: "space-between",
//             }}
//           >
//             <Button
//               className={classes.Button1}
//               color="primary"
//               variant="contained"
//               fullWidth
//               type="submit"
//             >
//               افزودن
//             </Button>
//             <Button
//               className={classes.Button2}
//               color="primary"
//               variant="contained"
//               fullWidth
//               type="submit"
//               onClick={handleClick}
//             >
//               انصراف
//             </Button>
//           </div>
//         </form>

//         <div>انتخاب از روی نقشه</div>
//       </div>
//     </Box>
//   );
// };

// export default ApiaryAddList;



































// inja
// import {
//   Paper,
//   Box,
//   Grid,
//   TextField,
//   Typography,
//   FormControlLabel,
//   Checkbox,
//   Button,
//   Select,
//   MenuItem
// } from '@material-ui/core';
// import useStyles from "./styles";
// import MapBox from "../../../components/MapBox/MapBox";

// import React, { Fragment } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const ApiaryAddList = () => {
//   const classes = useStyles();
//   const validationSchema = yup.object().shape({
//     name: yup.string().required('لطفا نام زنبورستان وارد کنید')    
//     .min(2, 'برای وارد کردن نام حداقل ۲ کاراکتر لازم است')
//     .max(20, 'Username must not exceed 20 characters'),
//     select: yup.string().required('لطفا یک گزینه را انتخاب کنید.'),
//     select2: yup.string().required('لطفا یک گزینه را انتخاب کنید.'),
//     select3: yup.string().required('لطفا یک گزینه را انتخاب کنید.'),
//     select4: yup.string().required('لطفا یک گزینه را انتخاب کنید.'),
//     select5: yup.string().required('لطفا یک گزینه را انتخاب کنید.')

//   });
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({
//     resolver: yupResolver(validationSchema)
//   });
//   const onSubmit = data => {
//     console.log(JSON.stringify(data, null, 2));
//     alert(JSON.stringify(data, null, 2));
//   };
  

//   const options = [
//     { label: "همه", value: "همه" },
//     { label: "تغذیه زنبور", value: "تغذیه زنبور" },
//     { label: "برداشت عسل", value: "برداشت عسل" },
//     { label: "بیماری زنبور", value: "بیماری زنبور" },
//   ];
//   return (
//     <Fragment>
//       <Paper>
//         <Box px={3} py={2} className={classes.root}>
//           <Typography variant="h6" align="center" margin="dense" color='secondary' style={{fontWeight:"bold"}}>
//             افزودن زنبورستان
//           </Typography>



//           <Grid container spacing={1} className={classes.container}>
//          <div>
//           <Grid item xs={12} sm={12} className={classes.inputText}>
//              <div className={classes.input}> 
//              <label className={classes.label}>نام زنبورستان</label>
//               <TextField
//                 className={classes.TextField}
//                 required
//                 id="name"
//                 name="name"
//                 variant="outlined"
//                 fullWidth
//                 margin="dense"
//                 {...register('name')}
//                 error={errors.name ? true : false}
//               /></div>
//               <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
//                 {errors.name?.message}
//               </Typography>
//             </Grid>

//           <Grid item xs={12} sm={12} className={classes.Select}>
//             <div  className={classes.input}>
//             <label className={classes.label}>پوشش گیاهی منطقه</label>
//           <Select
//           className={classes.inputSelect}
//           required
//           variant="outlined"
//           {...register('select')}
//           error={errors.select ? true : false}
  


//           // onChange={(e) =>
//           //   setValue("select", e.target.value, { shouldValidate: true })
//           // } // Using setValue
//         >
//            {options?.map((option) => {
//               return (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label ?? option.value}
//                 </MenuItem>
//               );
//             })}
//               </Select></div>
//         {/* {errors.select && <p>{errors.select.message}</p>} */}    
//               <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
//                 {errors.select?.message}
//               </Typography>
//           </Grid>


//           <Grid item xs={12} sm={12} >
//             <div className={classes.input}>
//             <label className={classes.label}>نوع منطقه</label>
//               <Select
//         className={classes.inputSelect}
//           required
//           variant="outlined"
//           {...register('select2')}
//           error={errors.select2 ? true : false}
  


//           // onChange={(e) =>
//           //   setValue("select", e.target.value, { shouldValidate: true })
//           // } // Using setValue
//         >
//            {options?.map((option) => {
//               return (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label ?? option.value}
//                 </MenuItem>
//               );
//             })}
//               </Select></div>
//         {/* {errors.select && <p>{errors.select.message}</p>} */}    
//               <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
//                 {errors.select2?.message}
//               </Typography>
//           </Grid>

//           <Grid item xs={12} sm={12} >
//             <div className={classes.input}>
//             <label className={classes.label}>استان</label>
//               <Select
//         className={classes.inputSelect}
//           required
//           variant="outlined"
//           {...register('select3')}
//           error={errors.select3 ? true : false}
  


//           // onChange={(e) =>
//           //   setValue("select", e.target.value, { shouldValidate: true })
//           // } // Using setValue
//         >
//            {options?.map((option) => {
//               return (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label ?? option.value}
//                 </MenuItem>
//               );
//             })}
//               </Select></div>
//         {/* {errors.select && <p>{errors.select.message}</p>} */}    
//               <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
//                 {errors.select3?.message}
//               </Typography>
//           </Grid>


//           <Grid item xs={12} sm={12} >
//             <div className={classes.input}>
//             <label className={classes.label}>شهر </label>
//               <Select
//         className={classes.inputSelect}
//           required
//           variant="outlined"
//           {...register('select4')}
//           error={errors.select4 ? true : false}
  


//           // onChange={(e) =>
//           //   setValue("select", e.target.value, { shouldValidate: true })
//           // } // Using setValue
//         >
//            {options?.map((option) => {
//               return (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label ?? option.value}
//                 </MenuItem>
//               );
//             })}
//               </Select></div>
//         {/* {errors.select && <p>{errors.select.message}</p>} */}    
//               <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
//                 {errors.select4?.message}
//               </Typography>
//           </Grid>


//           <Grid item xs={12} sm={12} >
//             <div className={classes.input}>
//             <label className={classes.label}>کاربرد </label>
//               <Select
//         className={classes.inputSelect}
//           required
//           variant="outlined"
//           {...register('select5')}
//           error={errors.select5 ? true : false}
  


//           // onChange={(e) =>
//           //   setValue("select", e.target.value, { shouldValidate: true })
//           // } // Using setValue
//         >
//            {options?.map((option) => {
//               return (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label ?? option.value}
//                 </MenuItem>
//               );
//             })}
//               </Select></div>
//         {/* {errors.select && <p>{errors.select.message}</p>} */}    
//               <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
//                 {errors.select5?.message}
//               </Typography>
//           </Grid>
// </div>
// <Grid
//         item
//         xs={12}
//         style={{
//           backgroundColor: " white",
//           padding: "16px",
//           overflow: "hidden",
//           borderRadius: "8px",
//           height: "300px",
//           marginTop: "16px",
//         }}
//       >
//         <MapBox />
//       </Grid>
//           </Grid>

          


//           <Box mt={8} style={{width:"100%"}}>
//             <div style={{display:"flex",justifyContent:"space-between"}}>
//             <Button
//               variant="contained"
//               className={classes.Button2}
           
//             >
//               انصراف
//             </Button>

//             <Button
//               variant="contained"
//               className={classes.Button1}
//               onClick={handleSubmit(onSubmit)}
//             >
//              افزودن            
//           </Button>
//           </div>
//           </Box>
//         </Box>
//       </Paper>
//     </Fragment>
//   );
// };
// export default ApiaryAddList;