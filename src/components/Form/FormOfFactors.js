// import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import "./Form.css";
// import axios from "axios";
// import { useParams } from "react-router";

// const useStyles = makeStyles({
//   Button: {
//     marginTop: "8px",
//     fontFamily: "Shabnam",
//     cursor: "pointer",
//   },
// });

// const validationSchema = yup.object({
//   email: yup
//     .string("لطفا ایمیل خود را وارد کنید")
//     .email("ایمیل نامعتبر است")
//     .required("ایمیل شرکت خود را وارد کنید"),
//   // address: yup
//   //   .string("Enter your address")
//   //   .min(8, "Password should be of minimum 8 characters length")
//   //   .required("Password is required"),
//   name: yup
//     .string("نام خود را وارد کنید")
//     .min(2, "حداقل 8 کلمه نیاز است")
//     .required("نام شرکت خود را وارد کنید"),
// });

// const FormOfFactors = () => {
//   const [Industry, setIndustry] = useState("شسیشسیشس");
//   const params = useParams();

//   useEffect(() => {
//     async function fetchMyAPI() {
//       let response = await axios.get(
//         "http://nahoor.af:8080/nahoor/company/" + params.id,
//       );
//       setIndustry(response.data);
//     }

//     fetchMyAPI();
//   }, []);
// console.log("sdasd",Industry)
//   const classes = useStyles();
//   const onUserNameChange = (event) => {
//     // event.target.value is the text entered in the input box
//     setIndustry(event.target.value);
//   };
//   const formik = useFormik({
//     initialValues: {
//       Industry,
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//     enableReinitialize: true,
//   });

//   return (
//     <div style={{ width: "50%", direction: "rtl" }}>
//       {console.log(Industry)}
//       <form onSubmit={formik.handleSubmit}>
//         <TextField
//           fullWidth
//           id="name"
//           variant="outlined"
//           name="name"
//           label="نام کارخانه"
//           type="text"
//           value={formik.values.Industry.name}
//           onChange={onUserNameChange}
//           error={formik.touched.name && Boolean(formik.errors.name)}
//           helperText={formik.touched.name && formik.errors.name}
//         />
//         <hr style={{ margin: "8px 0px" }} />
//         <TextField
//           className={classes.form}
//           variant="outlined"
//           fullWidth
//           id="Videos"
//           type="file"
//           name="Videos"
//           label="عکس"
//           placeholder="asdasdasd"
//           onChange={onUserNameChange}
//           // onChange={formik.handleChange}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//         />
//         <hr style={{ margin: "8px 0px" }} />{" "}
//         <TextField
//           className={classes.form}
//           variant="outlined"
//           fullWidth
//           id="Videos"
//           type="file"
//           name="Videos"
//           label="عکس"
//           placeholder="asdasdasd"
//           onChange={formik.handleChange}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//         />
//         <hr style={{ margin: "8px 0px" }} />
//         <TextField
//           className={classes.form}
//           variant="outlined"
//           fullWidth
//           id="short-desc"
//           name="short-desc"
//           value={formik.values.Industry.short_desc}
//           label="توضیحات کوتاه"
//           onChange={formik.handleChange}
//           // error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//         />
//         <hr style={{ margin: "8px 0px" }} />
//         <TextField
//           className={classes.form}
//           variant="outlined"
//           fullWidth
//           id="long-desc"
//           name="long-desc"
//           value={Industry?.long_desc || undefined}
//           label="توضیحات بلند"
//           // onChange={(e) => handleChange(e)}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//         />
//         <hr style={{ margin: "8px 0px" }} />
//         <TextField
//           variant="outlined"
//           className={classes.form}
//           fullWidth
//           id="address"
//           name="address"
//           label="address"
//           type="text"
//           value={Industry?.address || undefined}
//           // onChange={(e) => handleChange(e)}
//           onChange={formik.handleChange}
//           error={formik.touched.address && Boolean(formik.errors.address)}
//           helperText={formik.touched.address && formik.errors.address}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//         />
//         <hr style={{ margin: "8px 0px" }} />
//         <TextField
//           variant="outlined"
//           className={classes.form}
//           fullWidth
//           id="tel"
//           name="tel"
//           label="tel"
//           value={Industry?.tel || undefined}
//           // onChange={(e) => handleChange(e)}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//         />
//         <hr style={{ margin: "8px 0px" }} />{" "}
//         <TextField
//           className={classes.form}
//           variant="outlined"
//           fullWidth
//           type="email"
//           id="email"
//           name="email"
//           label="ایمیل"
//           value={formik.values.Industry.email}
//           onChange={onUserNameChange}
//           // onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <hr style={{ margin: "8px 0px" }} />
//         <TextField
//           className={classes.form}
//           variant="outlined"
//           fullWidth
//           id="website"
//           type="link"
//           name="website"
//           label="وبسایت"
//           value={Industry?.website}
//           // onChange={(e) => handleChange(e)}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <hr style={{ margin: "8px 0px" }} />{" "}
//         <TextField
//           className={classes.form}
//           variant="outlined"
//           fullWidth
//           id="Instagram"
//           type="text"
//           name="Instagram"
//           label="اینستاگرام"
//           value={Industry?.instagram || undefined}
//           // value={Industry?.instagram}
//           // onChange={(e) => handleChange(e)}
//           onChange={formik.handleChange}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <hr style={{ margin: "8px 0px" }} />{" "}
//         <TextField
//           className={classes.form}
//           variant="outlined"
//           fullWidth
//           id="Linkedin"
//           type="text"
//           name="Linkedin"
//           label="لینکدین"
//           value={Industry?.linkedin || undefined}
//           // value={Industry?.linkedin}
//           placeholder="asdasdasd"
//           // onChange={(e) => handleChange(e)}
//           onChange={formik.handleChange}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <hr style={{ margin: "8px 0px" }} />{" "}
//         <TextField
//           className={classes.form}
//           variant="outlined"
//           fullWidth
//           id="Twitter"
//           type="text"
//           name="Twitter"
//           label="توییتر"
//           value={Industry?.twitter || undefined}
//           // value={Industry?.twitter}
//           placeholder="asdasdasd"
//           // onChange={(e) => handleChange(e)}
//           onChange={formik.handleChange}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <hr style={{ margin: "8px 0px" }} />{" "}
//         <TextField
//           className={classes.form}
//           variant="outlined"
//           fullWidth
//           id="Videos"
//           type="file"
//           name="Videos"
//           label="ویدیو"
//           value={Industry?.video || undefined}
//           // onChange={(e) => handleChange(e)}
//           onChange={formik.handleChange}
//           margin="dense"
//           inputProps={{ style: { fontSize: 16 } }} // font size of input text
//           InputLabelProps={{
//             style: { fontSize: "1rem", fontFamily: "Shabnam" },
//           }} //font size of input label
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <Button
//           className={classes.Button}
//           color="primary"
//           variant="contained"
//           fullWidth
//           type="submit"
//         >
//           ثبت
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default FormOfFactors;
