import { Breadcrumbs, Divider, Grid, Typography } from "@material-ui/core";
import { NavigateBefore } from "@material-ui/icons";
import axios from "axios";
import moment from "jalali-moment";
import React, { useEffect, useState } from "react";
import useStyles from "./Style";
import {
  Link,
  useParams,useHistory
} from "react-router-dom";
import Title from "../../../../components/Typography/Title/Title";
import { axiosInstance } from "../../../api/axios";
// function SupportMessage() {

//   return (
//     <div>SupportMessage</div>
//   )
// }

// export default SupportMessage

function SupportMessage() {
  const [newTicket , setNewTicket] = useState([])
  const[loading,setLoading]=useState(true)
  const classes = useStyles();
  const [show,setShow]=useState(false)
  const [data, setData] = useState([
    {
      id: 1,
      titleQuestion:
        "باسلام زنبوردار عزیز از طریق لینک زیر اپلیکیشن کندووان پلاس را بروز رسانی کنید.",
      name: "جعفر",
      Date: "1401/03/20",
      Time: "12:14",
    },
    {
      id: 1,
      titleQuestion: "ممنون از شما حتما رسیدگی خواهد شد.",
      name: "رضا",
      Date: "1401/03/20",
      Time: "12:14",
    },
  ]);

  /////////////////////////////////////////////////////////////////////////////////////////
  
  const token = localStorage.getItem("id_token")
  console.log("token",token);
  useEffect(() => {
    const fetchData = async () =>{
      // setLoading(true);
      try {
        const {data: response} = await axiosInstance.get("/message/get-by-user-for-user",{
          headers: {
            'token': `${token}` 
          },
        },)
        console.log( "show response support" , response.data);
        setNewTicket(response.data )
        setLoading(false)
        if(response.data ){
          setShow(true)
        }else{
          setShow(false)
        }
    
      } catch (error) {
        console.error(error.message);
        setLoading(true)

      }
      // setLoading(false);
    }
    fetchData();
  }, []);


  /////////////////////////////////////////////////////////////////////////////////////////
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
         <p style={{color:"rgb(227, 156, 0)" ,fontWeight:"bold"}}>پیام‌های پشتیبان</p>
  
      </Link>,
      
  
  
  
  ];

  return (
    <div className={classes.container}>
    <div style={{}}>
      <Breadcrumbs
        separator={<NavigateBefore fontSize="large" style={{color:"rgb(227, 156, 0)"}} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      </div>
    <Grid
      container
      className={classes.container2}

    >
      {/* message */}
      {data.map((element) => {
        return (
          <>
            <Grid
              item
              xs={12}
              className={classes.SupportMessage}

            >
              <Grid
                item
                xs={12}
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  width: "100%",
                  borderRadius: "12px",
                  backgroundColor: "rgb( 244 244 244)",
                  padding: "16px 32px",
                  boxShadow: "0px 3px  6px  0px rgba(0,0,0,0.16)",
                }}
              >
                {element.titleQuestion}
              </Grid>
              <Grid style={{ color: "rgb(173 ,173 ,173)", marginTop: "8px" }}>
                {element.name}| {element.Date} {element.Time}
              </Grid>
            </Grid>
          </>
        );
      })}

      <Grid
        style={{
          marginTop: "100px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Divider
          style={{ backgroundColor: "rgb( 173 173 173)", width: "40%" }}
        />
        <Typography style={{ color: "rgb( 173 173 173)" }}>
          پیام جدید
        </Typography>
        <Divider
          style={{ backgroundColor: "rgb( 173 173 173)", width: "40%" }}
        />
      </Grid>

      {data.map((element) => {
    //  if(moment().locale('fa').format("YYYY/MM/DD") == "1401/03/20" )  {
    //   console.log("true");
    //  } else{
    //    console.log("false");
    //  }
    console.log("data.Date",element.Date);
        
        return (
          <>
          {moment().locale('fa').format("YYYY/MM/DD") == element.Date?
               <Grid
               item
               xs={12}
               className={classes.SupportNewMessage}
   
             >
               <Grid
                 item
                 xs={12}
                 style={{
                   fontSize: "16px",
                   fontWeight: "bold",
                   width: "100%",
                   borderRadius: "12px",
                   backgroundColor: "rgb( 255 242 212)",
                   padding: "16px 32px",
                   boxShadow: "0px 3px  6px  0px rgba(0,0,0,0.16)",
                 }}
               >
                 {element.titleQuestion}
               </Grid>
               <Grid style={{ color: "rgb(173 ,173 ,173)", marginTop: "8px" }}>
                 {element.name}| {element.Date} {element.Time}
               </Grid>
             </Grid>:null
        
        
        }

          </>
        );
      })}
    </Grid>
    </div>
  );
}

export default SupportMessage;
