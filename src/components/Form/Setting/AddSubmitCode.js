import { Button, CircularProgress, Divider, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useUserDispatch } from '../../../context/UserContext';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useStyles from "./styles";

function AddSubmitCode() {
  const classes = useStyles();
  // const history=useHistory()
  const [loginValue, setLoginValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);

  // global
  const userDispatch = useUserDispatch();
  // const phoneRegExp = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
  const phoneRegExp = /9([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/

  const validationSchema = yup.object().shape({
 
    phoneNumber:yup.string().required("لطفا کد تایید را وارد کنید")
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
    alert(JSON.stringify(data, null, 2));
    // history.push("/login/step2")

  };



  return (
    <div >
    <Typography variant="h6" align="center" margin="dense" color='secondary' className={classes.Title}>
         کد تایید    
    </Typography>
    <Divider  className={classes.Divider}/>
    <Typography variant="h6" align="center" margin="dense" color='primary' className={classes.codeTitle} >
       کد تایید را وارد کنید.    
    </Typography>
    
   <Grid className={classes.main} >
    <TextField

      style={{direction:"ltr"}}
      className={classes.TextField}
      label="کد تايید"
      onChange={e => setLoginValue(e.target.value)}

      id="phoneNumber"
      name="phoneNumber"
      variant="outlined"
      fullWidth
      margin="normal"
      size="small"
      {...register('phoneNumber')}
      error={errors.phoneNumber ? true : false}
    />
   <Typography variant="inherit" color="textSecondary" className={classes.errorMessage}>
      {errors.phoneNumber?.message}
    </Typography><br/>

   



<Button

    variant="contained"
    className={classes.buttonLogin}
  >
    ثبت
</Button>
 </Grid>
    </div>
  )
}

export default AddSubmitCode