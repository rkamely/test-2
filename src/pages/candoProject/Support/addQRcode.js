import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Grid,
    MenuItem,
    OutlinedInput,
    Select,
    TextareaAutosize,
    TextField,
    Typography,
  } from "@material-ui/core";
  import React, { useContext, useEffect, useState } from "react";
  import useStyles from "./Style";
  import { useForm, Controller } from "react-hook-form";
  import axios from "axios";
  import { yupResolver } from "@hookform/resolvers/yup";
  import * as yup from "yup";
  import AuthContext from "../../context/AuthProvider";

function AddQRcode(props) {

    const validationSchema = yup.object().shape({
        title: yup
          .string()
          .required("لطفا تعداد QRCODE درخواستی را وارد نمایید."),
        // title: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
        text: yup
          .string()
          .required("لطفا درخواست خود را وارد نمایید."),
          });
          const [newTicket , setNewTicket] = useState()
          const bardia = localStorage.getItem("id_token")
          console.log("bardia",bardia);

        const {
            register,
            control,
            handleSubmit,
            formState: { errors },
          } = useForm({
            resolver: yupResolver(validationSchema),
          });
        
          
          const onSubmit = async(data) => {
            console.log(JSON.stringify(data, null, 2));
            alert(JSON.stringify(data, null, 2));
        
            const response = await axios.post("http://185.202.113.165:3000/api/ticket", data , {
              headers: {
                'token': `${bardia}` 
              }
            });
            console.log("response ro see kon to addticket",response);
            // setData({ data: [...data, data] });
            props.handleClose()
          };
        
        
          const [data, setData] = useState();
          const classes = useStyles();

  return (
    <div
      style={{
        padding: "24px 0px",
      }}
    >
      <div
      className={classes.titleBox}

      >
        {props.title} 
      </div>
      <Divider
        style={{ backgroundColor: "rgb( 244 ,244 ,244)", marginTop: "32px" }}
      />
      <div
      className={classes.box}

      >
       
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "32px" }}
          >
            {/* <h2
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "Shabnam",
              }}
            >
              {props.title}
            </h2> */}
    <div
    className={classes.topMain}    >
      <h2
        style={{
          fontSize: "0.8rem",
          fontWeight: 600,
          fontFamily: "Shabnam",
        }}
      >
        تعداد QR Code درخواستی
      </h2>
      <div className={classes.input} >
      <TextField
       
        id="outlined-basic"
        variant="outlined"
        className={classes.inputQrCode}

        {...register("title")}
        error={errors.title ? true : false}
      />
        <Typography
            variant="inherit"
            className={classes.errorTitle}
          >
            {errors.title?.message}
        </Typography>
    </div>
    
      </div>
   </div>
        

        <DialogContent style={{ overflow: "hidden", padding: "0" }}>
          <div style={{ marginTop: "32px" }}>شرح درخواست</div>
          <TextareaAutosize
              id="outlined-basic"
              variant="outlined"
              className={classes.TextareaAutosize}
              style={{
                backgroundColor: "rgb( 244, 244, 244)",
                width: "100%",
                borderRadius: "8px",
                border: "none",
                height:"130px",
                marginTop:"16px"
              }}
              {...register("text")}
              error={errors.text ? true : false}
            />
              <Typography
                  variant="inherit"
                  className={classes.errorTitle}
                >
                  {errors.text?.message}
              </Typography>

        </DialogContent>
      </div>
      <Divider
        style={{ marginTop: "40px", backgroundColor: "rgb( 244 ,244 ,244)" }}
      />
      <DialogActions className={classes.actionButton}>
        <Button onClick={props.handleClose} className={classes.cancelButton}>
          انصراف
        </Button>
        <Button    onClick={handleSubmit(onSubmit)} className={classes.addButton}>
          افزودن
        </Button>
      </DialogActions>
    </div>
  )
}

export default AddQRcode