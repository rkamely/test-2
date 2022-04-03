
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
  MenuItem
} from '@material-ui/core';
import useStyles from "./styles";

import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ApiaryUpdateList = () => {
  const classes = useStyles();
  const validationSchema = yup.object().shape({
    name: yup.string().required('لطفا نام زنبورستان وارد کنید')    
    .min(2, 'برای وارد کردن نام حداقل ۲ کاراکتر لازم است')
    .max(20, 'Username must not exceed 20 characters'),
    select: yup.string().required('لطفا یک گزینه را انتخاب کنید.'),
    select2: yup.string().required('لطفا یک گزینه را انتخاب کنید.'),
    select3: yup.string().required('لطفا یک گزینه را انتخاب کنید.'),
    select4: yup.string().required('لطفا یک گزینه را انتخاب کنید.'),
    select5: yup.string().required('لطفا یک گزینه را انتخاب کنید.')

  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
  };
  

  const options = [
    { label: "همه", value: "همه" },
    { label: "تغذیه زنبور", value: "تغذیه زنبور" },
    { label: "برداشت عسل", value: "برداشت عسل" },
    { label: "بیماری زنبور", value: "بیماری زنبور" },
  ];
  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2} className={classes.root}>
          <Typography variant="h6" align="center" margin="dense" color='secondary' style={{fontWeight:"bold"}}>
            افزودن زنبورستان
          </Typography>



          <Grid container spacing={1} className={classes.container}>
         <div>
          <Grid item xs={12} sm={12} className={classes.inputText}>
             <div className={classes.input}> 
             <label className={classes.label}>نام زنبورستان</label>
             {console.log("options",options[0].value)}
              <TextField
                className={classes.TextField}
                required
                id="name"
                name="name"
               value={options[1].value}
                variant="outlined"
                fullWidth
                margin="dense"
                {...register('name')}
                error={errors.name ? true : false}
              /></div>
              <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
                {errors.name?.message}
              </Typography>
          </Grid>

          <Grid item xs={12} sm={12} className={classes.Select}>
            <div  className={classes.input}>
            <label className={classes.label}>پوشش گیاهی منطقه</label>
          <Select
          className={classes.inputSelect}
          required
          variant="outlined"
          {...register('select')}
          error={errors.select ? true : false}
          // value={}

        >
           {options?.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label ?? option.value}
                </MenuItem>
              );
            })}
              </Select></div>
              <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
                {errors.select?.message}
              </Typography>
          </Grid>


          <Grid item xs={12} sm={12} >
            <div className={classes.input}>
            <label className={classes.label}>نوع منطقه</label>
              <Select
        className={classes.inputSelect}
          required
          variant="outlined"
          {...register('select2')}
          error={errors.select2 ? true : false}
          // value={}



        >
           {options?.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label ?? option.value}
                </MenuItem>
              );
            })}
              </Select></div>
        {/* {errors.select && <p>{errors.select.message}</p>} */}    
              <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
                {errors.select2?.message}
              </Typography>
          </Grid>

          <Grid item xs={12} sm={12} >
            <div className={classes.input}>
            <label className={classes.label}>استان</label>
              <Select
        className={classes.inputSelect}
          required
          variant="outlined"
          {...register('select3')}
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
              </Select></div>
        {/* {errors.select && <p>{errors.select.message}</p>} */}    
              <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
                {errors.select3?.message}
              </Typography>
          </Grid>


          <Grid item xs={12} sm={12} >
            <div className={classes.input}>
            <label className={classes.label}>شهر </label>
              <Select
        className={classes.inputSelect}
          required
          variant="outlined"
          {...register('select4')}
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
              </Select></div>
        {/* {errors.select && <p>{errors.select.message}</p>} */}    
              <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
                {errors.select4?.message}
              </Typography>
          </Grid>


          <Grid item xs={12} sm={12} >
            <div className={classes.input}>
            <label className={classes.label}>کاربرد </label>
              <Select
        className={classes.inputSelect}
          required
          variant="outlined"
          {...register('select5')}
          error={errors.select5 ? true : false}
          // value={}



        >
           {options?.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label ?? option.value}
                </MenuItem>
              );
            })}
              </Select></div>
        {/* {errors.select && <p>{errors.select.message}</p>} */}    
              <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
                {errors.select5?.message}
              </Typography>
          </Grid>
          </div>
          <div style={{marginTop: "32px"}}>نقشه</div>

          </Grid>

          


          <Box mt={8} style={{width:"100%"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <Button
              variant="contained"
              className={classes.Button2}
           
            >
              انصراف
            </Button>

            <Button
              variant="contained"
              className={classes.Button1}
              onClick={handleSubmit(onSubmit)}
            >
             افزودن            
          </Button></div>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};
export default ApiaryUpdateList;