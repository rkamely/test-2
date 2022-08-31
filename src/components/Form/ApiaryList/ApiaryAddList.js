import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./styles";
import MapBox from "../../../components/MapBox/MapBox";
import React, { Fragment, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import ApiaryList from "../../../pages/candoProject/ApiaryList/ApiaryList";
import { axiosInstance } from "../../../pages/api/axios";

const ApiaryAddList = ({
  ApiariesList,
  setApiariesList,
  onClose,
  refresh,
  setStatus,
  status,
}) => {
  const classes = useStyles();
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("لطفا نام زنبورستان وارد کنید")
      .min(2, "برای وارد کردن نام حداقل ۲ کاراکتر لازم است")
      .max(20, "Username must not exceed 20 characters"),

    regionVegetation: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    regionType: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    province: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    city: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    apiaryUsage: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const token = localStorage.getItem("id_token");

  const onSubmit = async (data) => {
    const response = await axiosInstance
      .post(
        "/apiary/create-by-user",
        { ...data, locationLangitude: 8, locationLatitude: 10 },
        {
          headers: {
            token: `${token}`,
          },
        },
      )
      .then((response) => {
       
        setApiariesList([...ApiariesList , response.data.data])
      });
    // setApiariesList([...ApiariesList , data])


   
    // refresh("f")
    onClose();
  };

  const options = [
    { label: "باغ", value: "Garden" },
    { label: "مزرعه", value: "Farm" },
    { label: "مرتع کوهستانی", value: "Mountain" },
    { label: "دشت", value: "Plain" },
    { label: "سایر", value: "Other" },
  ];
  const option2 = [
    { label: "شهری", value: "Urban" },
    { label: "روستایی", value: "Village" },
  ];
  const option3 = [
    { label: "پرورش ملکه", value: "Queen" },
    { label: "ژل رویال", value: "Royal" },
    { label: "تولید عسل", value: "Honey" },
    { label: "سایر", value: "Other" },
  ];

  const style = {
    borderRadius: "12px",
    overflow: "hidden",
    marginTop: "10px",
  };
  const [states, setStates] = useState([]);

  ///////////////////////////////////////////////////////////////////////////////////////////
  //استان
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://iran-locations-api.vercel.app/api/v1/states"
        ).then((res)=>setStates(res.data))

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  //////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////
  //شهر
  const[city,setCities]=useState([])
  const changeState= async (state)=>{
   
    try {
      const { data: response } = await axios
        .get(
          `https://iran-locations-api.vercel.app/api/v1/cities?state=${state}`,
        )
        .then((res) => setCities(res.data.cities));
      // console.log("show response city12", response.data.data.cities);
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Box px={3} py={2} className={classes.root}>
      <Typography
        variant="h6"
        align="center"
        margin="dense"
        className={classes.Title}
        color="secondary"
      >
        افزودن زنبورستان جدید
      </Typography>

      <Divider className={classes.Divider} />
      <Grid container spacing={1} className={classes.container}>
        <div className={classes.main}>
          <Grid item xs={12} sm={12} className={classes.inputText}>
            <div className={classes.input}>
              <label className={classes.mainLabel}>نام زنبورستان</label>
              <TextField
                className={classes.TextField}
                required
                id="name"
                name="name"
                variant="outlined"
                fullWidth
                margin="dense"
                {...register("name")}
                error={errors.name ? true : false}
              />
            </div>
            <Typography
              variant="inherit"
              color="textSecondary"
              className={classes.errorTitle}
            >
              {errors.name?.message}
            </Typography>
          </Grid>

          {/* <Grid item xs={12} sm={12} className={classes.inputText}>
                <div className={classes.input}>
                  <label className={classes.label}>وضعیت مناسب</label>
                  <TextField
                    className={classes.TextField}
                    required
                    id="hivesWithGoodCondition"
                    name="hivesWithGoodCondition"
                    variant="outlined"
                    type="number"
                    fullWidth
                    margin="dense"
                    {...register("hivesWithGoodCondition")}
                    error={errors.hivesWithGoodCondition ? true : false}
                  />
                </div>
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.hivesWithGoodCondition?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} className={classes.inputText}>
                <div className={classes.input}>
                <label className={classes.label}>وضعیت نامناسب</label>
                  <TextField
                    className={classes.TextField}
                    required
                    id="hivesWithBadCondition"
                    name="hivesWithBadCondition"
                    variant="outlined"
                    fullWidth
                    type="number"
                    margin="dense"
                    {...register("hivesWithBadCondition")}
                    error={errors.hivesWithBadCondition ? true : false}
                  />
                </div>
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.hivesWithBadCondition?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} className={classes.inputText}>
                <div className={classes.input}>
                  <label className={classes.label}> نیازمند بازدید</label>
                  <TextField
                    className={classes.TextField}
                    required
                    id="hivesWithVisitRequired"
                    name="hivesWithVisitRequired"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    {...register("hivesWithVisitRequired")}
                    error={errors.hivesWithVisitRequired ? true : false}
                  />
                </div>
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.hivesWithVisitRequired?.message}
                </Typography>
              </Grid> */}

          <Grid item xs={12} sm={12} className={classes.Select}>
            <div className={classes.input}>
              <label className={classes.label}>پوشش گیاهی منطقه</label>
              <Select
                className={classes.inputSelect}
                required
                variant="outlined"
                {...register("regionVegetation")}
                error={errors.regionVegetation ? true : false}
                defaultValue="Garden"

              <Grid item xs={12} sm={12} className={classes.Select}>
                <div className={classes.input}>
                  <label className={classes.label}>پوشش گیاهی منطقه</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("regionVegetation")}
                    error={errors.regionVegetation ? true : false}
                    defaultValue="Garden"

                    // onChange={(e) =>
                    //   setValue("regionVegetation", e.target.value, { shouldValidate: true })
                    // } // Using setValue
                  >
                    {options?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.regionVegetation && <p>{errors.regionVegetation.message}</p>} */}
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.regionVegetation?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div className={classes.input}>
                  <label className={classes.label}>نوع منطقه</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("regionType")}
                    error={errors.regionType ? true : false}
                    defaultValue="Urban"

                    // onChange={(e) =>
                    //   setValue("select", e.target.value, { shouldValidate: true })
                    // } // Using setValue
                  >
                    {option2?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.regionType?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div className={classes.input}>
                  <label className={classes.label}>استان</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("province")}
                    error={errors.province ? true : false}
                    defaultValue="Honey"
                    // onChange={(e) =>
                    //   setValue("select", e.target.value, { shouldValidate: true })
                    // } // Using setValue
                  >
                    {states?.map((option) => {
                      return (
                        <MenuItem key={option.name} value={option.name} onClick={()=>changeState(option.name)}>
                          {option.label ?? option.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.province?.message}
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <div className={classes.input}>
                  <label className={classes.label}>شهر</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("city")}
                    error={errors.city ? true : false}
                    // onChange={(e) =>
                    //   setValue("select", e.target.value, { shouldValidate: true })
                    // } // Using setValue
                  >
                    {city?.map((option) => {
                      return (
                        <MenuItem key={option.name} value={option.name}>
                          {option.label ?? option.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.city?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div className={classes.input}>
                  <label className={classes.label}>کاربرد </label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("apiaryUsage")}
                    error={errors.apiaryUsage ? true : false}

                    // onChange={(e) =>
                    //   setValue("select", e.target.value, { shouldValidate: true })
                    // } // Using setValue
                  >
                    {option3?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.apiaryUsage?.message}
                </Typography>
              </Grid>
            </div>
            {/* {errors.regionVegetation && <p>{errors.regionVegetation.message}</p>} */}
            <Typography
              variant="inherit"
              color="textSecondary"
              className={classes.errorTitle}
            >
              {errors.regionVegetation?.message}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className={classes.input}>
              <label className={classes.label}>نوع منطقه</label>
              <Select
                className={classes.inputSelect}
                required
                variant="outlined"
                {...register("regionType")}
                error={errors.regionType ? true : false}
                defaultValue="Urban"

                // onChange={(e) =>
                //   setValue("select", e.target.value, { shouldValidate: true })
                // } // Using setValue
              >
                {option2?.map((option) => {
                  return (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label ?? option.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            {/* {errors.select && <p>{errors.select.message}</p>} */}
            <Typography
              variant="inherit"
              color="textSecondary"
              className={classes.errorTitle}
            >
              {errors.regionType?.message}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className={classes.input}>
              <label className={classes.label}>استان</label>
              <Select
                className={classes.inputSelect}
                required
                variant="outlined"
                {...register("province")}
                error={errors.province ? true : false}
                defaultValue="Honey"
                // onChange={(e) =>
                //   setValue("select", e.target.value, { shouldValidate: true })
                // } // Using setValue
              >
                {states?.map((option) => {
                  return (
                    <MenuItem
                      key={option.name}
                      value={option.name}
                      onClick={() => changeState(option.name)}
                    >
                      {option.label ?? option.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            {/* {errors.select && <p>{errors.select.message}</p>} */}
            <Typography
              variant="inherit"
              color="textSecondary"
              className={classes.errorTitle}
            >
              {errors.province?.message}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className={classes.input}>
              <label className={classes.label}>شهر</label>
              <Select
                className={classes.inputSelect}
                required
                variant="outlined"
                {...register("city")}
                error={errors.city ? true : false}
                // onChange={(e) =>
                //   setValue("select", e.target.value, { shouldValidate: true })
                // } // Using setValue
              >
                {city?.map((option) => {
                  console.log("option city state", option.name);
                  return (
                    <MenuItem key={option.name} value={option.name}>
                      {option.label ?? option.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            {/* {errors.select && <p>{errors.select.message}</p>} */}
            <Typography
              variant="inherit"
              color="textSecondary"
              className={classes.errorTitle}
            >
              {errors.city?.message}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className={classes.input}>
              <label className={classes.label}>کاربرد </label>
              <Select
                className={classes.inputSelect}
                required
                variant="outlined"
                {...register("apiaryUsage")}
                error={errors.apiaryUsage ? true : false}

                // onChange={(e) =>
                //   setValue("select", e.target.value, { shouldValidate: true })
                // } // Using setValue
              >
                {option3?.map((option) => {
                  return (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label ?? option.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            {/* {errors.select && <p>{errors.select.message}</p>} */}
            <Typography
              variant="inherit"
              color="textSecondary"
              className={classes.errorTitle}
            >
              {errors.apiaryUsage?.message}
            </Typography>
          </Grid>
        </div>

        <Grid item xs={12} lg={5} className={classes.Map}>
          <div className={classes.mapTitle}>انتخاب مکان از روی نقشه</div>
          <MapBox />
        </Grid>
      </Grid>

      <Divider className={classes.Divider2} />
      <Box className={classes.ButtonBox}>
        <div className={classes.button}>
          <Button
            variant="contained"
            className={classes.Button2}
            onClick={onClose}
          >
            انصراف
          </Button>

          <Button
            variant="contained"
            className={classes.Button1}
            onClick={handleSubmit(onSubmit)}
          >
            افزودن
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default ApiaryAddList;
