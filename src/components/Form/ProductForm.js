import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./Form.css";
import axios from "axios";
import { useParams } from "react-router";

const useStyles = makeStyles({
  Button: {
    marginTop: "8px",
    fontFamily: "Shabnam",
    cursor: "pointer",
  },
});

const validationSchema = yup.object({
  email: yup
    .string("لطفا ایمیل خود را وارد کنید")
    .email("ایمیل نامعتبر است")
    .required("ایمیل شرکت خود را وارد کنید"),
  // address: yup
  //   .string("Enter your address")
  //   .min(8, "Password should be of minimum 8 characters length")
  //   .required("Password is required"),
  name: yup
    .string("نام خود را وارد کنید")
    .min(2, "حداقل 8 کلمه نیاز است")
    .required("نام شرکت خود را وارد کنید"),
});

const ProductForm = () => {
  const [Industry, setIndustry] = useState("");
  const params = useParams();

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get(
        "http://nahoor.af:8080/nahoor/industry/" + params.id,
      );
      setIndustry(response.data);
    }

    fetchMyAPI();
  }, []);

  const classes = useStyles();
  const onUserNameChange = (event) => {
    // event.target.value is the text entered in the input box
    setIndustry(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      Industry,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    enableReinitialize: true,
  });

  return (
    <div style={{ width: "50%", direction: "rtl" }}>
      {console.log(Industry)}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          variant="outlined"
          name="name"
          label="نام صنعت"
          type="text"
          value={formik.values.Industry.name} 
          onChange = {(e)=>formik.setFieldValue(Industry,e.target.value)}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <hr style={{ margin: "8px 0px" }} />
        <TextField
          className={classes.form}
          variant="outlined"
          fullWidth
          id="Videos"
          dir="rtl"
          type="file"
          name="Videos"
          label="عکس"
          placeholder="asdasdasd"
          onChange = {(e)=>formik.setFieldValue(Industry,e.target.value)}
          // onChange={formik.handleChange}
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
          fullWidth
          type="submit"
        >
          ثبت
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
