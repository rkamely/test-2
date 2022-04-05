import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./AboutUsMain.css";
import useStyles from "./styles";

export default function AboutUsMain() {
  const classes = useStyles();

  return (
    <Grid container style={{paddingTop:"48px"}}>
      <Grid>
        <Typography variant="h1" color="secondary" style={{fontFamily: "Shabnam",fontWeight: 600}}>
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
          <Typography variant="p">
            شرکت نوین پردازش ورناصنعت هومان، در سال 1397در مرکز خدمات فناوری
            دانشگاه شریف شروع بکار نمود. و از سال 1399 بصورت مستقل و خارج از این
            مرکز به فعالیت خود ادامه داده است. <br />
            این شرکت تاکنون با به کارگیری خلاقیت و ایده های جدید، چندین محصول
            تجاری ، مخابرات و الکترونیک به بازار عرضه کرده (IoT)نوآورانه را در
            حوزه اینترنت اشیا است. محصولات شاخص این مجموعه محصولات با تکنولوژی
            اینترنت اشیا در حوزه .کشاورزی مانند کندووان پلاس و گلخانه هوشمند می
            باشند.
            <br /> ورناصنعت، مجموعه ای است جوان، از افراد با انگیزه، خلاق و کوشا
            که در راستای .دانش افزایی و ارزش آفرینی در محیطی فعال و پویا با
            یکدیگر همکاری می کنند.
          </Typography>
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
