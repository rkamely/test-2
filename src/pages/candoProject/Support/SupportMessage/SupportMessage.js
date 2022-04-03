import { Divider, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./Style";
// function SupportMessage() {

//   return (
//     <div>SupportMessage</div>
//   )
// }

// export default SupportMessage

function SupportMessage() {
  //   const classes = useStyles();
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

  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px 32px",
        justifyContent: "space-between",
        borderRadius: "12px",
        width: "100%",
        marginTop: "24px",
      }}
    >
      {/* message */}
      {data.map((element) => {
        return (
          <>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                padding: "16px 32px",
                justifyContent: "space-between",
                borderRadius: "12px",
                width: "100%",
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
          marginTop: "200px",
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
        return (
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              padding: "16px 32px",
              justifyContent: "space-between",
              borderRadius: "12px",
              width: "100%",
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
        );
      })}
    </Grid>
  );
}

export default SupportMessage;
