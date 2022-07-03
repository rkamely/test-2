
import { Breadcrumbs, Button, Grid, TextareaAutosize, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useStyles from "./Style";
import {
  Link,
  useParams,useHistory
} from "react-router-dom";
import moment from "jalali-moment";
import Loading from "../../../../components/Loading/Loading"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Close, NavigateBefore } from "@material-ui/icons";
import Title from "../../../../components/Typography/Title/Title";
import classNames from "classnames";

function SupportPage() {
  const history = useHistory()
  const classes = useStyles();
  const [newTicket , setNewTicket] = useState([])
  const [newTicketStatus , setNewTicketStatus] = useState([])

  const { id } = useParams()
  const[loading,setLoading]=useState(true)
  console.log("idTicket",id);
  const validationSchema = yup.object().shape({
    // name: yup
    //   .string()
    //   .required("لطفا تعداد QRCODE درخواستی را وارد نمایید."),
    text: yup
      .string()
      .required("لطفا درخواست خود را وارد نمایید."),
      });
    /////////////////////////////////////////////////////////////////////////////////////////
  
    const token = localStorage.getItem("id_token")
    console.log("token",token);
    useEffect(() => {
      const fetchData = async () =>{
        // setLoading(true);
        try {
          const {data: response} = await axios.get("http://185.202.113.165:3000/api/ticket/get-by-id/" + id,{
            headers: {
              'token': `${token}` 
            },
          },);
          console.log( "show response" , response.data);
          setNewTicket(response.data.messages )
          setNewTicketStatus(response.data)
          setLoading(false);
        } catch (error) {
          console.error(error.message);
          setLoading(true);

        }
        
      }
      fetchData();
    }, []);
  
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
  
    useEffect(() => {
      const fetchData = async () =>{
        // setLoading(true);
        try {
          const {data: response} = await axios.post(`http://185.202.113.165:3000/api/ticket/seen-by-user/${id}`,{"text":"Seen"},{
            headers: {
              'token': `${token}` 
            },
          },).then((el)=>console.log("elll",el.data))
        } catch (error) {
          console.error(error.message);
        }
        
      }
      fetchData();
    }, []);

    /////////////////////////////////////////////////////////////////////////////////////////
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(validationSchema),
    });

    const onSubmit = async(data,e) => {
      const response = await axios.post(`http://185.202.113.165:3000/api/ticket/user-add-message/${id}`, data , {
        headers: {
          'token': `${token}` 
        }
      }).then( (respon) => setNewTicket(respon.data.data.messages))
      // console.log("response adduserticket",response.data.data.messages)
      reset({
        text: "",
      })
      // window.location.reload()
        
    };










  // const [Question, setQuestion] = useState([
  //   {
  //     sender:"user",
  //     id: 1,
  //     text:
  //       "سلام وقتتون بخیر برای برداشت عسل کندو های زنبورستانم نیاز به نیروی پشتیبانی دارم .باتشکر",
      
  //     name: "جعفر",
  //     Date: "1400/01/01",
  //     Time: "12:14",
  //   },
  //   {
  //     sender:"admin",
  //     id: 1,
  //     text:
  //       "سلام وقتتون بخیر برای برداشت عسل کندو های زنبورستانم نیاز به نیروی پشتیبانی دارم .باتشکر",
  //     name: "رضا",
  //     Date: "1400/01/01",
  //     Time: "12:14",
  //   },
  //   {
  //     sender:"admin",
  //     id: 1,
  //     text:
  //       "سلام وقتتون بخیر برای برداشت عسل کندو های زنبورستانم نیاز به نیروی پشتیبانی دارم .باتشکر",
  //     name: "جعفر",
  //     Date: "1400/01/01",
  //     Time: "12:14",
  //   },
  //   {
  //     sender:"user",
  //     id: 1,
  //     text:
  //       "سلام وقتتون بخیر برای برداشت عسل کندو های زنبورستانم نیاز به نیروی پشتیبانی دارم .باتشکر",
  //     name: "رضا",
  //     Date: "1400/01/01",
  //     Time: "12:14",
  //   },
  // ]);
  // const [Answer , setAnswer] = useState([
  //   {
  //     id: 1,
  //     titleAnswer:
  //       "سلام . وقتتون بخیر نام زنبورستان و تعداد کندوهایی که برای برداشت عسل آماده اند را ذکر کنید. نیروی پشتیبان ما با شما  .تماس میگیرد",
  //     name: "جعفر",
  //     Date: "1400/01/01",
  //     Time: "12:14",
  //   },
  //   {
  //     id: 2,
  //     titleAnswer:
  //       "سلام . وقتتون بخیر نام زنبورستان و تعداد کندوهایی که برای برداشت عسل آماده اند را ذکر کنید. نیروی پشتیبان ما با شما  .تماس میگیرد",
  //     name: "رضا",
  //     Date: "1400/01/01",
  //     Time: "12:14",
  //   },
  //   {
  //     id: 3,
  //     titleAnswer:
  //       "سلام . وقتتون بخیر نام زنبورستان و تعداد کندوهایی که برای برداشت عسل آماده اند را ذکر کنید. نیروی پشتیبان ما با شما  .تماس میگیرد",
  //     name: "جعفر",
  //     Date: "1400/01/01",
  //     Time: "12:14",
  //   },
  //   {
  //     id: 4,
  //     titleAnswer:
  //       "سلام . وقتتون بخیر نام زنبورستان و تعداد کندوهایی که برای برداشت عسل آماده اند را ذکر کنید. نیروی پشتیبان ما با شما  .تماس میگیرد",
  //     name: "رضا",
  //     Date: "1400/01/01",
  //     Time: "12:14",
  //   },
  // ]);

const closeTicket= async ()=>{

  window.confirm("با بستن این تیکت دیگر امکان ارسال پیام در این چت باکس را ندارید")
  const response = await axios.post(`http://185.202.113.165:3000/api/ticket/close-by-user/${id}` ,{"text":"close"} ,{
    headers: {
      'token': `${token}` 
    }
  });
  console.log("response ro see kon to addticket",response);
  history.push("/app/Support")
}

const title=(e)=>{
  switch (e) {

    case "cure":
    return <div>درمان</div>
    case "nurture":
     return <div>تغذیه</div>
    case "visit":
       return <div>بازدید</div>     
    case "pickHoney":
       return <div>برداشت عسل</div>      
    case "apiary":
     return <div>زنبورستان</div>          
    case "hive":
     return <div>کندو</div>    
     case "products":
       return <div>محصولات</div>  
    case "queen":
       return <div>ملکه</div>  
    case "honeyBehaviour":
       return <div>رفتار زنبورعسل</div>
    case "boardConnection":
       return <div>ارتباط با برد</div>  
   case "accesses":
         return <div>دسترسی ها</div> 
   case "profile":
           return <div>حساب کاربری</div> 
   case "moveHive":
           return <div>انتقال</div>             
   case "qrCode":
           return <div>QRCODE</div>    

   case "other":
           return <div>سایر</div>  
    default:
     return <div>بدون عنوان </div>
  }
 }
const breadcrumbs = [

  <Link
  to="/app/Support"
    key="1"
    style={{textDecoration:"none",cursor:"pointer"}}
  >
        <Title key="1" title=" پشتیبانی "/>

  </Link>,

  <Link
      to="/app/Support"
      key="2"
      style={{textDecoration:"none",cursor:"pointer"}}
  >
       {/* <Title key="2" title="پیام‌های من"/> */}
       <p style={{color:"rgb(227, 156, 0)" ,fontWeight:"bold"}}>پیام‌های من</p>

  </Link>,
       <p style={{color:"rgb(227, 156, 0)" ,fontWeight:"bold"}}>تیکت به پشتیبانی</p>



];
const statusTicket= newTicketStatus.status
const statusTickets=(e)=>{
  switch (statusTicket) {
    case "Open":
      return  <Grid
      style={{
        backgroundColor: "#fff",
        padding: "48px ",
        borderRadius: "12px",
        // position: "fixed",
        // bottom:0,
        // left:20,
        // width:"80%",
      }}
    >
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        defaultValue=""
        style={{
          width: "100%",
          backgroundColor: "rgb( 244 244 244)",
          border: "none",
          padding: "16px",
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

      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div onClick={closeTicket} style={{cursor:"pointer",display: "flex",justifyContent: "center",alignItems: "center"}}><Close color="secondary"/><div>بستن تیکت</div> </div>
        <Button className={classes.ButtonSubmitPage} onClick={handleSubmit(onSubmit)}>ثبت</Button>
      </Grid>
 </Grid>
   case "CloseByUser":
     return  <Grid
     style={{
       backgroundColor: "#fff",
       padding: "48px ",
       borderRadius: "12px",
       textAlign:"center"
       // position: "fixed",
       // bottom:0,
       // left:20,
       // width:"80%",
     }}
   >
    
     
  <Typography>تیکت بسته شده است و امکان ارسال پیام جدید در این تیکت وجود ندارد.</Typography>
</Grid>
 case "CloseByAdmin":
  return  <Grid
  style={{
    backgroundColor: "#fff",
    padding: "48px ",
    borderRadius: "12px",
    textAlign:"center"
    // position: "fixed",
    // bottom:0,
    // left:20,
    // width:"80%",
  }}
>
 
  
<Typography>تیکت بسته شده است و امکان ارسال پیام جدید در این تیکت وجود ندارد.</Typography>
</Grid>
   default:
     return <div>در انتظار</div>

  }
}
console.log("newTicketStatus",newTicketStatus);
let btnClass = classNames({
             
  [classes.openTicket]: newTicketStatus.status==="Open",
  [classes.closeTicket]: newTicketStatus.status==="CloseByAdmin",
  [classes.closeTicketAdmin]: newTicketStatus.status==="CloseByUser",
  [classes.waitTicket]: newTicketStatus.status==="Wait",

    });
  const changeText=(e)=>{
      switch (e) {
        case "Open":
           return <div>باز</div>
        case "CloseByAdmin":
           return <div>بسته</div>
          case "CloseByUser":
           return <div>بسته</div>
        default:
           return <div>در انتظار</div>
      }
    }
  return (
    <>
     <Breadcrumbs
        separator={<NavigateBefore fontSize="large" style={{color:"rgb(227, 156, 0)"}} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    {loading?
          <div className={classes.Loading}> <Loading color="orange" /></div>:   
           <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        position:"relative",

      }}
    >
     {/* top Page */}
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
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>{title(newTicketStatus.category)}</div>
          <div className={btnClass}>{changeText(newTicketStatus.status)}</div>
        </Grid>

   
        {/* message */}
        {newTicket?.map((element) => {
          switch (element.sender) {
          
            case 'user':
              return (             
              <Grid
                className={classes.QuestionCountainer}
                item
                xs={12}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  className={classes.titleQuestion}
                >
                  {element.text}
                </Grid>
                <Grid style={{ color: "rgb(173 ,173 ,173)", marginTop: "8px" }}>
                {/* {newTicketStatus.createBy.mobile} | {moment.from(element.sentAt).locale('fa').format('YYYY/M/D HH:mm')}  */}
                  
                </Grid>
              </Grid>)
            case 'admin':
              return (              
              <Grid
                xs={12}
                item
                className={classes.AnswerCountainer}

             >              
              <Grid
                 item
                 xs={12}
                 md={6}
                 className={classes.titleAnswer}

               >
                 {element.text}
               </Grid>
               <Grid style={{ color: "rgb(173 ,173 ,173)", marginTop: "8px" }}>
               پشتیبان | {moment.from(element.sentAt).locale('fa').format('YYYY/M/D HH:mm')}
               </Grid>
             </Grid>
             )
          }
        })}


        {/* {Question.map((element) => {
          return (
            <>
              <Grid
                className={classes.QuestionCountainer}
                item
                xs={12}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  className={classes.titleQuestion}
                >
                  {element.titleQuestion}
                </Grid>
                <Grid style={{ color: "rgb(173 ,173 ,173)", marginTop: "8px" }}>
                  {element.name}| {element.Date} {element.Time}
                </Grid>
              </Grid>

              <Grid
                 xs={12}

                item
                className={classes.AnswerCountainer}

              >
                  
                        
               <Grid
                  item
                  xs={12}
                  md={6}
                  className={classes.titleAnswer}

                >
                  {element.titleAnswer}
                </Grid>
                <Grid style={{ color: "rgb(173 ,173 ,173)", marginTop: "8px" }}>
                  {element.name}| {element.Date} {element.Time}
                </Grid>
                

              </Grid>
            </>
          );
        })} */}


        
       </Grid>













      {/* bottom Page */}
    {statusTickets()}

            </div> 
    }

    </>
  );
}

export default SupportPage;
