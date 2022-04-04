import React from 'react'
import {
    Box,
    Button,
    Fade,
    Grid,
    IconButton,
    Modal,
    Popover,
    Popper,
    Typography,
  } from "@material-ui/core";
import useStyles from "./styles"
function AboutUs() {
    const classes = useStyles();
  return (
    <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.right}>
           <Typography>درباره ما</Typography>
           <Grid> شرکت نوین پردازش ورناصنعت هومان، در سال 1397در مرکز خدمات فناوری دانشگاه
 شریف شروع بکار نمود. و از سال 1399 بصورت مستقل و خارج از این مرکز به فعالیت
.خود ادامه داده است
 این شرکت تاکنون با به کارگیری خلاقیت و ایده های جدید، چندین محصول تجاری
 ، مخابرات و الکترونیک به بازار عرضه کرده (IoT)نوآورانه را در حوزه اینترنت اشیا
 است. محصولات شاخص این مجموعه محصولات با تکنولوژی اینترنت اشیا در حوزه
.کشاورزی مانند کندووان پلاس و گلخانه هوشمند می باشند
 ورناصنعت، مجموعه ای است جوان، از افراد با انگیزه، خلاق و کوشا که در راستای
.دانش افزایی و ارزش آفرینی در محیطی فعال و پویا با یکدیگر همکاری می کنند</Grid>
        </Grid>
        <Grid item xs={6} className={classes.left}>
           <Grid>deeferferferferferfrferferfer</Grid>
        </Grid>
    </Grid>
  )
}

export default AboutUs