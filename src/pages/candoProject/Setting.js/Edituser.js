import { Avatar, Box, Button, Dialog, Divider, FormControlLabel, FormGroup, Grid, Modal, Switch, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    BrowserRouter as Router,

    Link,NavLink,useRouteMatch

  } from "react-router-dom" 
import useStyles from "./styles";
import Title from '../../../components/Typography/Title/Title';
import { axiosInstance } from '../../api/axios';
import { signOut, useUserDispatch } from '../../../context/UserContext';
import IOSSwitch from './IOSSwitch';
import EditPhoneNumber from '../../../components/Form/Setting/EditPhoneNumber';
import SmsVerification from '../../../components/Form/Setting/SmsVerification';



function Edituser(props) {
     var userDispatch = useUserDispatch()
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [setting,setSetting] = useState([]);
    const [openCode,setOpenCode] = useState(false);
    const firstNames = localStorage.getItem("profileName");
    const email = localStorage.getItem("email")
    const lastname = localStorage.getItem("lastname")
    const classes = useStyles();

    const [state, setState] = useState({
      manualVisit: true,
      checkedB: true,
    });

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setOpenDelete(false);
      // setOpenCode(false)
    };
    const handleDeleteOpen = (scrollType) => () => {
      setOpenDelete(true);
      // setScroll(scrollType);
    };
    const handleCloseCode =()=>{
              setOpenCode(false)
    }
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


useEffect(() => {
  const fetchData = async () => {
    try {
      const { data: response } = await axiosInstance.get(
        `/auth/me`,
        {
          headers: {
            token: `${token}`,
          },
        },
      );
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.clear("id_token")
        console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
        window.location.reload()
      }else{
      console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
      // history.push("/app/Error")
      // window.location.reload()
     }}
    // setLoading(false);
  };
  fetchData();
}, []);
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
              <p>{firstNames} {lastname}</p>
              <p style={{color:"rgb( 102 ,103 ,104)",fontSize:"0.8rem"}}>{email}</p>
          </div>
      </div>
      <div style={{backgroundColor:"rgba(227 ,23 ,10, 0.11)",padding:"8px 16px",borderRadius:"8px",
           color:"rgb( 227, 23 ,10)",fontWeight:600,cursor:"pointer"}}  onClick={handleDeleteOpen()}>خروج از حساب کاربری</div>
    </Grid>

    <Grid xs={12} style={{padding:" 32px ", borderRadius:"12px",     backgroundColor:"#fff",marginTop:"32px"}}>
	          	{/* <img alt="" className="avatar" src="/assets/Untitled-1.svg"/> */}
              <p style={{fontWeight:600}}>ویرایش اطلاعات کاربری</p>
 
<Grid xs={12} justifyContent='space-between' style={{display:"flex"}}>  
    <TextField
      
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
        control={<IOSSwitch  checked={state.manualVisit} onClick={localStorage.setItem("manualVisit",state.manualVisit)} onChange={handleChange} name="manualVisit" />}
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
          <Box sx={{ ...style, width: "30vw",overFlow: "hidden" }} >
            <EditPhoneNumber  onClose={handleClose} setOpenCode={setOpenCode}/>
          </Box>
          
        </Modal>
    </div>
    <Dialog
              PaperProps={{
                style: { borderRadius: 12, width: "24%", overflowY:"hidden"
              },
              }}
              open={openDelete}
              onClose={handleClose}
              // scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
              maxWidth="xl"
              style={{background:"rgba(0,0,0,0.6)"}}
            >
              <div style={{padding:"48px 16px",textAlign:"center",fontFamily:"Shabnam"}}>
              <div style={{fontWeight:"600"}}>آیا میخواهید از حساب کاربری خود خارج شوید؟</div>
              <div  style={{marginTop:"32px",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                 <Button onClick={() => signOut(userDispatch, props.history)} className={classes.addButton}>بله</Button>
                 <Button  onClick={handleClose} className={classes.cancelButton}>خیر</Button>
              </div></div>
      </Dialog>
      <Dialog
              PaperProps={{
                style: { borderRadius: 12, width: "30%", overflowY:"hidden"
              },
              }}
              open={openCode}
              onClose={handleCloseCode}
              // scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
              maxWidth="xl"
              style={{background:"rgba(0,0,0,0.6)"}}
            >
              <SmsVerification onClose={handleCloseCode}/>
      </Dialog>

    </Grid>
  )
}

export default Edituser