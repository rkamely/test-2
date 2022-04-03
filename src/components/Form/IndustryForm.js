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
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("نام را وارد کنید"),
});

const IndustryForm = () => {
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
  // const onUserNameChange = (event) => {
  //   // event.target.value is the text entered in the input box
  //   setIndustry(event.target.value);
  // };
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

  const onTextFieldChange = (event) => {
    setIndustry({
      ...Industry,
      [event.target.name]:event.target.value
    });
    console.log(Industry);
  };
  return (
    <div style={{ width: "50%", direction: "rtl" }}>
      {console.log(Industry.name)}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          required
          fullWidth
          variant="outlined"
          id="name"
          label="نام صنعت"
          value={formik.values.Industry.name}
          onChange={(e)=>onTextFieldChange(e)}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {/* <TextField
          fullWidth
          id="name"
          variant="outlined"
          name="name"
          label="نام صنعت"
          type="text"
          defaultValue={formik.values.Industry.name}
          onChange={onUserNameChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <hr style={{ margin: "8px 0px" }} />
        <TextField
          className={classes.form}
          variant="outlined"
          fullWidth
          id="Videos"
          type="file"
          name="Videos"
          label="عکس"
          placeholder="asdasdasd"
          onChange={onUserNameChange}
          // onChange={formik.handleChange}
          margin="dense"
          inputProps={{ style: { fontSize: 16 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: "1rem", fontFamily: "Shabnam" },
          }} //font size of input label
        /> */}

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

export default IndustryForm;
