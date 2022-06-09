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

function AddTicket(props) {
  {
    console.log(props.input);
  }
  const validationSchema = yup.object().shape({
    // name: yup
    //   .string()
    //   .required("لطفا تعداد QRCODE درخواستی را وارد نمایید."),

    category: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    text: yup
      .string()
      .required("لطفا درخواست خود را وارد نمایید."),
    title:yup
    .string()
    .required("لطفا عنوان را وارد نمایید."),
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

  const options = [
    { label: "درمان"       ,           value: "cure"          },
    { label: "تغذیه"       ,           value: "nurture"          },
    { label: "بازدید"       ,          value: "visit"         },
    { label: "برداشت عسل"       ,      value: "pickHoney"     },
    { label: "زنبورستان"       ,       value: "apiary"      },
    { label: "کندو"         ,          value: "hive"           },
    { label: "محصولات"         ,        value: "products"         },
    { label: "ملکه"       ,            value: "queen"           },
    { label: "رفتار زنبورعسل"       ,  value: "honeyBehaviour" },
    { label: "ارتباط با برد"       ,   value: "boardConnection"  },
    { label: "دسترسی ها"       ,       value: "accesses"      },
    { label: "حساب کاربری"       ,     value: "profile"    },
    { label: "انتقال"       ,          value: "moveHive"         },
    { label: "QRCODE"       ,          value: "qrCode"         },
    { label: "سایر"       ,            value: "other"           },



  ];
  
  const onSubmit = async(data) => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));

    const response = await axios.post("http://188.121.121.225/api/ticket", data , {
      headers: {
        'token': `${bardia}` 
      }
    })
    console.log("response ro see kon to addticket",response);
    // setData({ data: [...data, data] });
    localStorage.setItem("AddTicket",response.data.data)
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
             className={classes.topMain}    >
    
            {/* <h2
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "Shabnam",
              }}
            >
              {props.title}
            </h2> */}
            <div>
                 <Grid item xs={12} sm={12} className={classes.Select} >

                <div className={classes.inputTitle}>
                <label className={classes.label}>موضوع تیکت</label>

                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("category")}
                    error={errors.category ? true : false}
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
                {/* {errors.category && <p>{errors.category.message}</p>} */}
                <Typography
                  variant="inherit"
                  className={classes.errorTitle}
                >
                  {errors.category?.message}
                </Typography>
                 </Grid>
                 <Grid item xs={12} sm={12} className={classes.inputText} >
            <div className={classes.inputTitle} >
              <label className={classes.label}>عنوان</label>
              <TextField
                className={classes.TextField}
                required
                id="title"
                name="title"
                variant="outlined"
                fullWidth
                margin="dense"
                {...register("title")}
                error={errors.title ? true : false}
              />
            </div>
            <Typography
              variant="inherit"
              color="textSecondary"
              className={classes.errorTitle}
            >
              {errors.title?.message}
            </Typography>
                 </Grid>
            </div>
          </div>
        

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
              {...register("text")}
              error={errors.text ? true : false}
            />
              <Typography
                  variant="inherit"
                  className={classes.errorTitle}
                >
                  {errors.text?.message}
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
