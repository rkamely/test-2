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
import React, { useState } from "react";
import useStyles from "./Style";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function AddTicket(props) {
  {
    console.log(props.input);
  }
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("لطفا تعداد QRCODE درخواستی را وارد نمایید."),

    select: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    request: yup
      .string()
      .required("لطفا درخواست خود را وارد نمایید."),
      });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const options = [
    { label: "درمان"       ,           value: "درمان"          },
    { label: "تغذیه"       ,           value: "تغذیه"          },
    { label: "بازدید"       ,          value: "بازدید"         },
    { label: "برداشت عسل"       ,      value: "برداشت عسل"     },
    { label: "زنبورستان"       ,       value: "زنبورستان"      },
    { label: "کندو"         ,          value: "کندو"           },
    { label: "محصولات"         ,        value: "محصولات"         },
    { label: "ملکه"       ,            value: "ملکه"           },
    { label: "رفتار زنبورعسل"       ,  value: "رفتار زنبورعسل" },
    { label: "ارتباط با برد"       ,   value: "ارتباط با برد"  },
    { label: "دسترسی ها"       ,       value: "دسترسی ها"      },
    { label: "حساب کاربری"       ,     value: "حساب کاربری"    },
    { label: "انتقال"       ,          value: "انتقال"         },
    { label: "QRCODE"       ,          value: "QRCODE"         },
    { label: "سایر"       ,            value: "سایر"           },



  ];
  
  const onSubmit = async(data) => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
    // const response = await axios.post("https://reqres.in/api/users", data);
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
        style={{
          textAlign: "center",
          color: "rgb( 227 ,156, 0)",
          fontSize: "1.2rem",
          fontWeight: 600,
          fontFamily: "Shabnam",
        }}
      >
        {props.title}{" "}
      </div>
      <Divider
        style={{ backgroundColor: "rgb( 244 ,244 ,244)", marginTop: "32px" }}
      />
      <div
        style={{
          width: "50vw",
          padding: "0 48px",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {props.input ? (
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "32px" }}
          >
            <h2
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "Shabnam",
              }}
            >
              {props.title}
            </h2>
            <Grid item xs={12} sm={12} className={classes.Select}>
                <div className={classes.input}>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("select")}
                    error={errors.select ? true : false}
                  >
                    {options?.map((option) => {
                      return (
                        <MenuItem  key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                <Typography
                  variant="inherit"
                  className={classes.errorTitle}
                >
                  {errors.select?.message}
                </Typography>
              </Grid>
          </div>
        ) : (
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "16px" }}
          >
            <h2
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "Shabnam",
              }}
            >
              تعداد QR Code درخواستی
            </h2>
            <div style={{display:"flex",flexDirection:"column",     marginRight: "32px",}}>
            <TextField
             
              id="outlined-basic"
              variant="outlined"
              style={{
                backgroundColor: "rgb( 244, 244, 244)",
                width: "200px",
                borderRadius: "8px",
                border: "none",
              }}
              {...register("name")}
              error={errors.name ? true : false}
            />
              <Typography
                  variant="inherit"
                  className={classes.errorTitle}
                >
                  {errors.name?.message}
              </Typography>
          </div></div>
        )}

        <DialogContent style={{ overflow: "hidden", padding: "0" }}>
          <div style={{ marginTop: "32px" }}>شرح درخواست</div>
          <TextareaAutosize
              id="outlined-basic"
              variant="outlined"
              style={{
                backgroundColor: "rgb( 244, 244, 244)",
                width: "100%",
                borderRadius: "8px",
                border: "none",
                height:"130px",
                marginTop:"16px"
              }}
              {...register("request")}
              error={errors.request ? true : false}
            />
              <Typography
                  variant="inherit"
                  className={classes.errorTitle}
                >
                  {errors.request?.message}
              </Typography>
          {/* <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            style={{
              backgroundColor: "rgb( 244, 244, 244)",
              border: "none",
              width: "100%",
              marginTop: "8px",
              height: "150px",
              borderRadius: "12px",
              marginTop: "20px",
            }}
          >

          </textarea> */}
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
  );
}

export default AddTicket;
