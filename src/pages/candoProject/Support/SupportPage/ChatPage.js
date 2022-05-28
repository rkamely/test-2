import { Button, Grid, TextareaAutosize, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Widget from "../../../../components/Widget/Widget";
import useStyles from "./Style";

function SupportPage() {
  const classes = useStyles();
  const [newTicket , setNewTicket] = useState([])

    /////////////////////////////////////////////////////////////////////////////////////////
  
    const bardia = localStorage.getItem("id_token")
    console.log("bardia",bardia);
    useEffect(() => {
      const fetchData = async () =>{
        // setLoading(true);
        try {
          const {data: response} = await axios.get("http://188.121.121.225/api/ticket/getUserTickets",{
            headers: {
              'token': `${bardia}` 
            },
          },);
          console.log( "show response" , response.data);
          setNewTicket(response.data )
          
        } catch (error) {
          console.error(error.message);
        }
        // setLoading(false);
      }
      fetchData();
    }, []);
  
  
    /////////////////////////////////////////////////////////////////////////////////////////

  const [data, setData] = useState([
    {
      id: 1,
      titleQuestion:
        "سلام وقتتون بخیر برای برداشت عسل کندو های زنبورستانم نیاز به نیروی پشتیبانی دارم .باتشکر",
      titleAnswer:
        "سلام . وقتتون بخیر نام زنبورستان و تعداد کندوهایی که برای برداشت عسل آماده اند را ذکر کنید. نیروی پشتیبان ما با شما  .تماس میگیرد",
      name: "جعفر",
      Date: "1400/01/01",
      Time: "12:14",
    },
    {
      id: 1,
      titleQuestion:
        "سلام وقتتون بخیر برای برداشت عسل کندو های زنبورستانم نیاز به نیروی پشتیبانی دارم .باتشکر",
      titleAnswer:
        "سلام . وقتتون بخیر نام زنبورستان و تعداد کندوهایی که برای برداشت عسل آماده اند را ذکر کنید. نیروی پشتیبان ما با شما  .تماس میگیرد",
      name: "رضا",
      Date: "1400/01/01",
      Time: "12:14",
    },
    {
      id: 1,
      titleQuestion:
        "سلام وقتتون بخیر برای برداشت عسل کندو های زنبورستانم نیاز به نیروی پشتیبانی دارم .باتشکر",
      titleAnswer:
        "سلام . وقتتون بخیر نام زنبورستان و تعداد کندوهایی که برای برداشت عسل آماده اند را ذکر کنید. نیروی پشتیبان ما با شما  .تماس میگیرد",
      name: "جعفر",
      Date: "1400/01/01",
      Time: "12:14",
    },
    {
      id: 1,
      titleQuestion:
        "سلام وقتتون بخیر برای برداشت عسل کندو های زنبورستانم نیاز به نیروی پشتیبانی دارم .باتشکر",
      titleAnswer:
        "سلام . وقتتون بخیر نام زنبورستان و تعداد کندوهایی که برای برداشت عسل آماده اند را ذکر کنید. نیروی پشتیبان ما با شما  .تماس میگیرد",
      name: "رضا",
      Date: "1400/01/01",
      Time: "12:14",
    },
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        position:"relative",

      }}
    >
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
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>موضوع تیکت</div>
          <div>باز</div>
        </Grid>

        {/* message */}
        {data.map((element) => {
          return (
            <>
              <Grid
                item
                xs={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "16px 32px",
                  justifyContent: "space-between",
                  borderRadius: "12px",
                  width: "50%",
                  marginTop: "24px",
                  alignSelf: "flex-start",
                  boxShadow: "0px, 3px,6px, 0px ,rgba(0,0,0,0.16)",
                }}
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
              </Grid>

              <Grid
                item
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  padding: "16px 32px",
                  marginTop: "124px",
                  justifyContent: "space-between",
                  borderRadius: "12px",
                  width: "50%",
                  alignSelf: "flex-end",
                }}
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
                  {element.titleAnswer}
                </Grid>
                <Grid style={{ color: "rgb(173 ,173 ,173)", marginTop: "8px" }}>
                  {element.name}| {element.Date} {element.Time}
                </Grid>
              </Grid>
            </>
          );
        })}


        
      </Grid>

      {/* bottom Page */}
      <Grid
        style={{
          backgroundColor: "#fff",
          padding: "48px ",
          borderRadius: "12px",
          position: "fixed",
          bottom:0,
          left:20,
          width:"80%",
        }}
      >
        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="Maximum 4 rows"
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua."
          style={{
            width: "100%",
            backgroundColor: "rgb( 244 244 244)",
            border: "none",
            padding: "16px",
          }}
        />

        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>بستن تیکت</div>
          <Button className={classes.ButtonSubmitPage}>ثبت</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SupportPage;
