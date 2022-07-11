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
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";

import React, { Fragment, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MapBox from "../../../components/MapBox/MapBox";
import axios from "axios";
import { useParams,useHistory } from "react-router-dom";
import Loading from "../../Loading/Loading";

const ApiaryUpdateList = ({ApiariesList,setApiariesList,onClose,setStatus}) => {
  console.log("editApiariesList",ApiariesList);
  const params = useParams();
  const history = useHistory()
  console.log("params", params.id)
  console.log("props.Apiary",ApiariesList);
  const classes = useStyles();
  const [errorMessage,setErrMessage] = useState()
  const [error,setIserror] = useState()
  const [ loading , setLoading]=useState(true)

  const edit_id = localStorage.getItem("edit_id")
  console.log("edit_id",edit_id);
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("لطفا نام زنبورستان وارد کنید")
      .min(2, "برای وارد کردن نام حداقل ۲ کاراکتر لازم است")
      .max(20, "Username must not exceed 20 characters"),
    hivesWithGoodCondition:yup.string().required(" پر کردن این فیلد الزامی است "),
    hivesWithBadCondition:yup.string().required(" پر کردن این فیلد الزامی است "),
    hivesWithVisitRequired:yup.string().required(" پر کردن این فیلد الزامی است "),
    regionVegetation: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    regionType: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    // select3: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    // select4: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
    apiaryUsage: yup.string().required("لطفا یک گزینه را انتخاب کنید."),
  });

  const preLoadValues = {
    firstname:"زنبورستان ۱۲",
    select:"تغذیه زنبور"
  }

  const {
    register,
    control,
    handleSubmit,reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues:preLoadValues
  });
   /////////////////////////////////////////////////////////////////////////////////////////
  
   const token = localStorage.getItem("id_token")
   console.log("token",token);
   useEffect(() => {
     const fetchData = async () =>{
       // setLoading(true);
       try {
         const {data: response} = await axios.get(`http://185.202.113.165:3000/api/apiary/get-for-user/${edit_id}`,{
           headers: {
             'token': `${token}` 
           },
         },);
         console.log( "show response" , response.data);
         const responseData = response.data;
         reset({ 
          name: responseData.name ,
          hivesWithGoodCondition: responseData.hivesWithGoodCondition,
          hivesWithBadCondition: responseData. hivesWithBadCondition,
          hivesWithVisitRequired: responseData.hivesWithVisitRequired,
          regionVegetation: responseData.regionVegetation,
          regionType: responseData.regionType,
          apiaryUsage: responseData.apiaryUsage,
          users:responseData.users.map((el)=>{return {_id:el}})
        });
        //  setApiariesList(response.data)
         setLoading(false)
         
       } catch (error) {
         console.error(error.message);
         
        //  history.push("/app/Error")
        //  window.location.reload()
       }
       // setLoading(false);
     }
     fetchData();
   }, [reset]);


 
   /////////////////////////////////////////////////////////////////////////////////////////

  const onSubmit = async (data) => {

    const response = await axios.put(`http://185.202.113.165:3000/api/apiary/update-for-user/${edit_id}`,{...data ,"locationLangitude": 8,
    "locationLatitude": 10},{
      headers: {
        'token': `${token}` 
      },
    })
    // setApiariesList([...ApiariesList , data])
    const {id}=response.data
    console.log("log response",response);
    setApiariesList(ApiariesList.map((apiary) => apiary.id === edit_id ? apiary : data))
    setStatus(true)
    // const updatedApiary=ApiariesList
    // console.log("updatedApiary",updatedApiary);
  

    // const Index=updatedApiary.findIndex((edit)=>{
    //        return edit._id===edit_id
                       
    // })
    // console.log("copy",Index);
    // // const index=updatedApiary.indexOf([copy]);
    // // console.log("indexxxxxx",index);
    // // console.log("data ro bede to dast man",response.data.data._id);
    // const index = updatedApiary.indexOf(data._id);
    // // console.log("datashow",data);
    // // console.log("dataIndex",index);
    // updatedApiary[Index]={...data};
    // // console.log("updatedApiary2",updatedApiary);

    // // console.log("data ro bede to dast man 2", updatedApiary[1]);
    // setApiariesList(updatedApiary)
    onClose();
    // console.log("ApiariesListedit",ApiariesList);
    // history.push("/app/apiaryList")
    // setApiariesList([...ApiariesList , {ApiariesList:updatedApiary}])
    // window.location.reload()
    // const updatedApiary=[Apiary]
    // const index = updatedApiary.indexOf(data);
    // updatedApiary[index]={...data};
    // setApiary({Apiary:updatedApiary})
    // history.push("/app/apiaryList")
    // setApiariesList([...ApiariesList , {ApiariesList:updatedApiary}])
    // window.location.reload()
  };

  // useEffect(() => {
  //   axios.get(`https://sdfsdfsdf/${params.id}`)
  //     .then(res => {
  //       setApiary(res.data.data)
  //     })
  //     .catch(error=>{
  //       setErrMessage(["Cannot load user data"])
  //       setIserror(true)
  //     })
  // }, [])


  const option = [  
    { label: "باغ", value: "Garden" },
    { label: "مزرعه", value: "Farm" },
    { label: "مرتع کوهستانی", value: "Mountain" },
    { label: "دشت", value: "Plain" },
    { label: "سایر", value: "Other" },
  ]
  const option2 = [  
    { label: "شهری", value: "Urban" },
    { label: "روستایی" , value: "Village" },
  ]
  const option3 = [  
    { label: "پرورش ملکه", value: "Queen" },
    { label: "ژل رویال" , value: "Royal" },
    { label: "تولید عسل", value: "Honey" },
    { label: "سایر", value: "Other" },
  ]


  
  const style = {
    borderRadius: "12px",
    overflow: "hidden",
    marginTop: "16px",
  };
  const isStaff = localStorage.getItem("isStaff")
  return (
    <Fragment>
     {loading?
          <div className={classes.Loading}> <Loading color="orange" /></div>: 
      <Paper>
{   isStaff? <Box px={3} py={2} className={classes.root}>
          <Typography
            variant="h6"
            align="center"
            margin="dense"
            color="secondary"
            className={classes.Title}
            color="secondary"
          >
            ویرایش زنبورستان
          </Typography>
          <Divider className={classes.Divider}/>

          <Grid container spacing={1} className={classes.container}>
            <div >
              <Grid item xs={12} sm={12} className={classes.inputText}>
                <div className={classes.input}>
                  <label className={classes.label}>نام زنبورستان</label>
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
                  {errors.firstname?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} className={classes.inputText} >
                <div className={classes.input} >
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
              <Grid item xs={12} sm={12} className={classes.inputText} >
                <div className={classes.input} >
                  <label className={classes.label}> وضعیت نامناسب </label>
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
              <Grid item xs={12} sm={12} className={classes.inputText} >
                <div className={classes.input} >
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
              </Grid>


              <Grid item xs={12} sm={12} className={classes.Select}>
                <div className={classes.input}>
                  <label className={classes.label}>پوشش گیاهی منطقه</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    name = "regionVegetation"
                    // defaultValue={option[1].value}
                    {...register("regionVegetation")}
                    error={errors.regionVegetation ? true : false}
                    // value={}
                  >
                    {option?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
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
                    // defaultValue={option2[1].value}
                    {...register("regionType")}
                    error={errors.regionType ? true : false}
                    // value={}
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

              {/* <Grid item xs={12} sm={12}>
                <div className={classes.input}>
                  <label className={classes.label}>استان</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    defaultValue={options[2].value}
                    {...register("select3")}
                    error={errors.select3 ? true : false}
                    // value={}
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
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                {/* <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.select3?.message}
                </Typography>
              </Grid> */} 

              {/* <Grid item xs={12} sm={12}>
                <div className={classes.input}>
                  <label className={classes.label}>شهر </label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    defaultValue={options[3].value}

                    {...register("select4")}
                    error={errors.select4 ? true : false}
                    // value={}
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
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                {/* <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={classes.errorTitle}
                >
                  {errors.select4?.message}
                </Typography>
              </Grid>  */}

              <Grid item xs={12} sm={12}>
                <div className={classes.input}>
                  <label className={classes.label}  > کاربرد </label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    // defaultValue={option3[1].value}
                    {...register("apiaryUsage")}
                    error={errors.apiaryUsage ? true : false}
                    // value={}
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
            <Grid
              item
              xs={12}
              lg={5}
              className={classes.Map}

            >
              <div className={classes.mapTitle}>
                انتخاب مکان از روی نقشه
              </div>
              <MapBox style={style} />
            </Grid>
          </Grid>

          <Divider className={classes.Divider2}/>
          <Box  className={classes.ButtonBox}>
            <div className={classes.button}>
              <Button variant="contained" className={classes.Button2} onClick={onClose}>
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
        </Box>:<Box px={2} py={2} className={classes.notAccess}>اجازه دسترسی به این صفحه را ندارید!</Box>}
      </Paper>}
    </Fragment>
  );
};
export default ApiaryUpdateList;
