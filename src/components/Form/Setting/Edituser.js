import { Avatar, Box, Divider, FormControlLabel, FormGroup, Grid, Modal, Switch, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    BrowserRouter as Router,

    Link,NavLink,useRouteMatch

  } from "react-router-dom" 
import useStyles from "./styles";
import Adduser from '../User/Adduser';
import EditPhoneNumber from './EditPhoneNumber';
import AddSubmitCode from './AddSubmitCode';
import AddJob from '../JobUser/AddJob';
import Title from '../../Typography/Title/Title';
import { withStyles } from '@material-ui/styles';
import IOSSwitch from './IOSSwitch';
import axios from 'axios';

function Edituser() {
    const [open, setOpen] = useState(false);

    const classes = useStyles();
     const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);

      };
      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        borderRadius:"16px",
        boxShadow: 24,
        pt: 2,
        px: 0,
        pb: 2,
      };
    const phoneRegExp = /9([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/

    const validationSchema = yup.object().shape({
  
      phoneNumber:yup.string().matches(phoneRegExp, 'شماره موبایل را بدون صفر و با حروف انگلیسی وارد کنید'),
      Username:yup.string().required( 'لطفا نام کاربری خود را وارد کنید'),
      name:yup.string().required('لطفا نام خود را وارد کنید'),
      family:yup.string().required('لطفا نام خانوادگی خود را وارد کنید'),
      email: yup.string().email('لطفا ایمیل معتبر وارد کنید')
  
    });

    const [data, setData] = useState([
      {
        id: 1,
        titleQuestion:
          "باسلام زنبوردار عزیز از طریق لینک زیر اپلیکیشن کندووان پلاس را بروز رسانی کنید.",
        name: "جعفر",
        Date: "1400/01/01",
        Time: "12:14",
      },
      {
        id: 1,
        titleQuestion: "ممنون از شما حتما رسیدگی خواهد شد.",
        name: "رضا",
        Date: "1400/01/01",
        Time: "12:14",
      },
    ]);

    const token = localStorage.getItem("id_token")

    try{
      const response = axios.get("http://185.202.113.165:3000/api/auth/me",{
        'token': `${token}` ,
         
      })
      console.log("response profile",response.data);
      console.log(JSON.stringify(response))       
  
  }catch (err) {
  
  
  
  }
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: data
      });
      const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
        alert(JSON.stringify(data, null, 2));
        // history.push("/login/step2")
      };
      
      let { path, url } = useRouteMatch();




      const [state, setState] = React.useState({
        checkedA: false,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };





  return (
    <Grid
    container
    style={{
      display: "flex",
      alignItems: "center",
      padding: "16px 32px",
      justifyContent: "space-between",
      borderRadius: "12px",
      marginTop: "24px",
    }}
  >
    
    <Title title="تنظیمات" variant="h3"/>
    <Grid
      item
      xs={12}
      style={{
        display: "flex",
        backgroundColor: "#fff",
        alignItems: "center",
        padding: "16px 32px",
        justifyContent: "space-between",
        borderRadius: "12px",
        width: "100%",
        marginTop:"32px"
      }}
    >
      <div style={{ fontSize: "16px", fontWeight: "bold" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Avatar src='./assets/HeaderProfile.svg' style={{width:"60px",height:"60px",marginLeft:"8px"}}/>
          <div>
              <p>شاهین رضوی</p>
              <p style={{color:"rgb( 102 ,103 ,104)"}}>۰۹۱۲۳۴۵۶۷۸۹</p>
          </div>
      </div>
      <div style={{backgroundColor:"rgba(227 ,23 ,10, 0.11)",padding:"8px 16px",borderRadius:"8px",
           color:"rgb( 227, 23 ,10)",fontWeight:600}}>خروج از حساب کاربری</div>
    </Grid>

    <Grid xs={12} style={{padding:" 32px ", borderRadius:"12px",     backgroundColor:"#fff",marginTop:"32px"}}>
	          	{/* <img alt="" className="avatar" src="/assets/Untitled-1.svg"/> */}
              <p style={{fontWeight:600}}>ویرایش اطلاعات کاربری</p>
 
<Grid xs={12} justifyContent='space-between' style={{display:"flex"}}>  
    <TextField
      
      // style={{direction:"ltr"}}
      className={classes.TextField}
      label="شماره موبایل"
    //   onChange={e => setLoginValue(e.target.value)}
    onClick={handleOpen}
      id="phoneNumber"
      name="phoneNumber"
      variant="outlined"
      fullWidth
      margin="normal"
      size="small"
      {...register('phoneNumber')}
      error={errors.phoneNumber ? true : false}
    />
   {/* <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
      {errors.phoneNumber?.message}
    </Typography><br/> */}


    <TextField
      
              // style={{direction:"ltr"}}
                className={classes.TextField}
              label="نام کاربری"
                id="Username"
                name="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
                {...register('Username')}
                error={errors.phoneNumber ? true : false}
              />
              {/* <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
                {errors.Username?.message}
              </Typography> */}
</Grid>

<Grid xs={12} justifyContent='space-between' style={{display:"flex"}}>
              <TextField
      
      // style={{direction:"ltr"}}
        className={classes.TextField}
      label="نام"
        id="name"
        name="name"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
        {...register('name')}
        error={errors.phoneNumber ? true : false}
      />
      {/* <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
        {errors.name?.message}
      </Typography> */}



      <TextField
      
      // style={{direction:"ltr"}}
        className={classes.TextField}
      label="نام خانوادگی"
        id="family"
        name="family"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
        {...register('family')}
        error={errors.phoneNumber ? true : false}
      />
      {/* <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
        {errors.family?.message}
      </Typography> */}
     

</Grid> 

     <Grid>
     <TextField
      
      // style={{direction:"ltr"}}
        className={classes.TextField}
      label="ایمیل"
        id="email"
        name="email"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
        {...register('email')}
        error={errors.phoneNumber ? true : false}
      />
      {/* <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
        {errors.email?.message}
      </Typography> */}
    </Grid>
    </Grid>

<Grid   xs={12} style={{display:"flex",gap:"36px"}}>
    <Grid
      item
      xs={6}
      style={{
        display: "flex",
        backgroundColor: "#fff",
        alignItems: "center",
        padding: "12px 24px",
        justifyContent: "space-between",
        borderRadius: "12px",
        width: "100%",
        marginTop:"24px"
      }}
    >
      <div style={{ fontSize: "16px", fontWeight: "bold" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
              اعلان‌ها        
      </div>
      
      <FormControlLabel
        control={<IOSSwitch  checked={state.checkedB} onChange={handleChange} name="checkedB" />}
      />
    </Grid>

    <Grid
      item
      xs={6}
      style={{
        display: "flex",
        backgroundColor: "#fff",
        alignItems: "center",
        padding: "12px 24px",
        justifyContent: "space-between",
        borderRadius: "12px",
        width: "100%",
        marginTop:"24px"
      }}
    >
      <div style={{ fontSize: "16px", fontWeight: "bold" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
         بازدید دستی
      </div>
      <FormControlLabel
        control={<IOSSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
      />
    </Grid>
</Grid>



    <div>
        <Modal
          open={open}


          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: "40vw" }} >
            <EditPhoneNumber />
          </Box>
          
        </Modal>
    </div>


    </Grid>
  )
}

export default Edituser