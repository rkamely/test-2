import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./AboutUsMain.css";
import useStyles from "./styles";

export default function AboutUsMain() {
  const classes = useStyles();

  return (
    <Grid container style={{padding:"48px 32px"}}>
      <Grid>
        <Typography variant="h2" color="secondary" style={{fontFamily: "Shabnam",fontWeight: 600}}>
          درباره ما
        </Typography>
      </Grid>
      <Grid
      className={classes.main}

      >
        <Grid
          style={{
            width: "50%",
            backgroundColor: "#fff",
            lineHeight: "32px",
            padding: "32px",
            boxShadow: "0 3px 6px 0px rgba(0,0,0,0.16)",
            borderRadius: "12px",
            fontWeight: 600,
            marginLeft: "-80px",
            zIndex: "2",
          }}
        >
          <div  style={{fontSize:"0.8rem",textAlign:"justify"}}>
            شرکت نوین پردازش ورنا صنعت هومان، در سال 1397 در مرکز خدمات فناوری
            دانشگاه شریف شروع بکار نمود و از سال 1399 بصورت مستقل و خارج از این
            مرکز به فعالیت خود ادامه داده است.
             <br />

             این شرکت تاکنون با به‌کارگیری خلاقیت و ایده‌های جدید، چندین محصول تجاری نوآورانه را در
             حوزه اینترنت اشیا  (IOT) ، مخابرات و الکترونیک به بازار عرضه کرده     
             است.


            محصولات شاخص این مجموعه محصولات با تکنولوژی
            اینترنت اشیا در حوزه کشاورزی مانند کندووان پلاس و گلخانه هوشمند می‌‌‌باشند.
            <br /> 
            
            ورناصنعت، مجموعه ای است جوان، از افراد باانگیزه، خلاق و کوشا
            که در راستای .دانش افزایی و ارزش آفرینی در محیطی فعال و پویا با
            یکدیگر همکاری می‌کنند.
          </div>
        </Grid>

        <Grid
          className="imageAboutUs"
          style={{
            width: "50%",
            borderRadius: "12px",
            overflow: "hidden",
            height: "500px",
          }}
        >
          {/* <img src="./assets/Untitled-1.svg" style={{ backgroundPosition:"right 35% bottom 45%"}}/> */}
        </Grid>

        
      </Grid>
    </Grid>
  );
}
