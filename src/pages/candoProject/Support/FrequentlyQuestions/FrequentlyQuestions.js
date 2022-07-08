

// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   FormControl,
//   Grid,
//   MenuItem,
//   Select,
//   Typography,
// } from "@material-ui/core";
// import { CallMissedSharp, ExpandMore } from "@material-ui/icons";
// import { styled } from "@material-ui/styles";
// import * as React from "react";
// import useStyles from "./Styles";

// export default function SimpleAccordion() {
//   const classes = useStyles();
//   const [borderColor, setborderColort] = React.useState(true);

//   const [value, setValue] = React.useState("همه"); // selected option
//   const options = [
//     { label: "همه", value: "همه" },
//     { label: "تغذیه زنبور", value: "تغذیه زنبور" },
//     { label: "برداشت عسل", value: "برداشت عسل" },
//     { label: "بیماری زنبور", value: "بیماری زنبور" },
//   ];

//   const data = [
//     {
//       id: "1",
//       Title: "متن سوال 1",
//       paragraph:
//       "Hello"+ "\n" +"world",
//     },
//     {
//       id: "2",
//       Title: "متن سوال 2",
//       paragraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
//     },
//     {
//       id: "3",
//       Title: "متن سوال 3",
//       paragraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
//     },
//     {
//       id: "4",
//       Title: "متن سوال 4",
//       paragraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
//     },
//     {
//       id: "5",
//       Title: "متن سوال 5",
//       paragraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
//     },
//     {
//       id: "6",
//       Title: "متن سوال 6",
//       paragraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
//     },
//     {
//       id: "7",
//       Title: "متن سوال 7",
//       paragraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
//     },
//     {
//       id: "8",
//       Title: "متن سوال 8",
//       paragraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
//     },
//     {
//       id: "9",
//       Title: "متن سوال 9",
//       paragraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
//     },
//   ];
  
//   const changeColor = (index) => {
//     console.log(index);
//   };
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
//   return (
//     <Grid container className={classes.container}>
//       <Grid
//         item
//         xs={12}
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "flex-start",
//         }}
//       >
//         <Typography style={{ marginLeft: "16px", whiteSpace: "nowrap" }}>
//           دسته بندی سوالات
//         </Typography>
//         <FormControl
//           fullWidth
//           variant="outlined"
//           className={classes.inputSelect}
//         >
//           <Select
        
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={value}
//             onChange={handleChange}

//             // inputProps={{ "aria-label": "Without label" }}
//           >
//             {options?.map((option) => {
//               return (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label ?? option.value}
//                 </MenuItem>
//               );
//             })}
//           </Select>
//         </FormControl>
//       </Grid>

//       {/* item */}
//       <Grid style={{ width: "100%" }}>
//         {data.map((el, index) => {
//           return (
//             <Accordion
//               onClick={() => changeColor(el.id)}
//               className={classes.Accordion}
//               style={{ borderRadius: "9px", marginTop: "16px" }}
//             >
//               <AccordionSummary
//                 className={classes.arrowStyle}
//                 expandIcon={<ExpandMore />}
//                 aria-controls="panel1a-content"
//                 id="panel1a-header"
//               >
//                 <Typography>{el.Title}</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography>{el.paragraph}</Typography>
//               </AccordionDetails>
//             </Accordion>
//           );
//         })}
//       </Grid>
//     </Grid>
//   );
// }


import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Breadcrumbs,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { ArrowLeft, CallMissedSharp, ExpandMore, NavigateBefore } from "@material-ui/icons";
import { styled } from "@material-ui/styles";
import * as React from "react";
import useStyles from "./Styles";
import {
  Link,
  useParams,useHistory
} from "react-router-dom";
import Title from "../../../../components/Typography/Title/Title";

export default function SimpleAccordion() {
  const classes = useStyles();
  const [borderColor, setborderColort] = React.useState(true);

  const [value, setValue] = React.useState("همه"); // selected option
  const options = [
    { label: "همه", value: "همه" },
    { label: "تغذیه زنبور", value: "تغذیه زنبور" },
    { label: "برداشت عسل", value: "برداشت عسل" },
    { label: "بیماری زنبور", value: "بیماری زنبور" },
  ];

  const data = [
    {
      id: "1",
      Title: "متن سوال 1",
      paragraph:
      "Hello"+ "\n" +"world",
    },
    {
      id: "2",
      Title: "متن سوال 2",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "3",
      Title: "متن سوال 3",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "4",
      Title: "متن سوال 4",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "5",
      Title: "متن سوال 5",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "6",
      Title: "متن سوال 6",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "7",
      Title: "متن سوال 7",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "8",
      Title: "متن سوال 8",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "9",
      Title: "متن سوال 9",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  
  const changeColor = (index) => {
    console.log(index);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const breadcrumbs = [

    <Link
    to="/app/Support"
      key="1"
      style={{textDecoration:"none",cursor:"pointer",fontWeight:"bold"}}
      
    >
          <Title key="1" title=" پشتیبانی "/>
          {/* <p style={{color:"rgb(227, 156, 0)" ,fontWeight:"bold"}}>پشتیبانی</p> */}

  
    </Link>,
        <div
         to="/app/Support"
        key="2"
        style={{textDecoration:"none",cursor:"pointer",fontWeight:"bold"}}
      >
         {/* <Title key="2" title="پیام‌های من"/> */}
         <p style={{color:"rgb(227, 156, 0)" ,fontWeight:"bold"}}>سوالات متداول</p>
      </div>,
      
  
  
  
  ];
  return (
    <div className={classes.container}>
      <Breadcrumbs
         separator=""
        separator={<NavigateBefore fontSize="large" style={{color:"rgb(227, 156, 0)"}} />}
        // separator={<ArrowBackIosRounded fontSize="large" />}

        aria-label="breadcrumb"
        
      >
        {breadcrumbs}
      </Breadcrumbs>
    <Grid container className={classes.container2}>

      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Typography style={{ marginLeft: "16px", whiteSpace: "nowrap" }}>
          دسته بندی سوالات
        </Typography>
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.inputSelect}
        >
          <Select
           style={{height:"40px"}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={handleChange}

            // inputProps={{ "aria-label": "Without label" }}
          >
            {options?.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label ?? option.value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>





      {/* items */}
      <Typography variant="h3" color="secondary" style={{fontWeight:"600",marginTop:"60px"}}>کندووان پلاس</Typography>
      <Grid style={{ width: "100%" }}>
            <Accordion
              // onClick={() => changeColor(el.id)}
              className={classes.Accordion}
              style={{ borderRadius: "9px", marginTop: "16px"}}
            >
              <AccordionSummary
                className={classes.arrowStyle}
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{fontWeight:"600"}}>برد هوشمند محصول کندوان پلاس چه ویژگی دارد؟</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                 - برد هوشمند کندووان پلاس دارای سنسور اندازه‌گیری وزن، دما و رطوبت است و همچنین برای ضبط صدای داخل کندو دارای میکروفون می‌باشد.  <br/>
               - برد هوشمند کندووان پلاس قابلیت اتصال به وای‌فای و بلوتوث را دارد.<br/>
                - برد هوشمند کندووان پلاس اطلاعات باز و بسته‌شدن درب کندو را اطلاع می‌دهد.<br/><br/>
                کاربرد اصلی این برد این است که در صورت عدم دسترسی به کندو می‌توانید با تلفن همراهتان از طریق اپلیکیشن از اتفاقات داخل کندو آگاه شوید.</Typography>
              </AccordionDetails>
            </Accordion>
      </Grid>


      <Grid style={{ width: "100%" }}>
            <Accordion
              // onClick={() => changeColor(el.id)}
              className={classes.Accordion}
              style={{ borderRadius: "9px", marginTop: "16px" }}
            >
              <AccordionSummary
                className={classes.arrowStyle}
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{fontWeight:"600"}}>کندووان پلاس در چه شهرهایی خدمات‌رسانی می‌کند؟</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                کندووان پلاس در چند شهر بزرگ مثل: تهران، کرج، رشت، تبریز خدمات ارائه می‌دهد که درحال‌توسعه است و سعی در افزایش شهرها در سال آینده دارد. نصب کندو و آموزش اولیه در شهر تهران رایگان است ولی در دیگر شهرها مشمول هزینه می‌شود.
               </Typography>
              </AccordionDetails>
            </Accordion>
      </Grid>

      <Grid style={{ width: "100%" }}>
            <Accordion
              // onClick={() => changeColor(el.id)}
              className={classes.Accordion}
              style={{ borderRadius: "9px", marginTop: "16px" }}
            >
              <AccordionSummary
                className={classes.arrowStyle}
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{fontWeight:"600"}}> تیم پشتیبانی کندووان پلاس چه خدماتی ارائه می‌دهد؟</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                تیم پشتیبانی کندووان پلاس یک همراه خوب زنبورداری و در دسترس شماست. تیم کندووان پلاس پاسخگوی هرگونه سؤال، در خواست خدمات حضوری و غیرحضوری (نصب کندو، برداشت عسل و…)، آموزش اولیه و مشاوره در حوزه زنبورداری است. پس از دریافت محصول با اپلیکیشنی که در اختیارتان قرار می‌گیرد آموزش‌های تکمیلی را دریافت خواهید کرد.
                </Typography>
              </AccordionDetails>
            </Accordion>
      </Grid>

      <Grid style={{ width: "100%" }}>
            <Accordion
              // onClick={() => changeColor(el.id)}
              className={classes.Accordion}
              style={{ borderRadius: "9px", marginTop: "16px" }}
            >
              <AccordionSummary
                className={classes.arrowStyle}
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{fontWeight:"600"}}>بازدید از کندو چگونه برنامه‌ریزی می‌شود</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                با کندوهای هوشمند کندووان پلاس نیاز به بازدیدهای مکرر نیست. در صورت لزوم به تلفن همراه کاربر از طریق اپلیکیشن بازدیدها یادآوری می‌شود.
               </Typography>
              </AccordionDetails>
            </Accordion>
      </Grid>

      <Grid style={{ width: "100%" }}>
            <Accordion
              // onClick={() => changeColor(el.id)}
              className={classes.Accordion}
              style={{ borderRadius: "9px", marginTop: "16px" }}
            >
              <AccordionSummary
                className={classes.arrowStyle}
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{fontWeight:"600"}}>چه زمانی کندوهارا نصب می‌کنید؟</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                نصب و تحویل دهی کندوها متناسب با فصل زنبورداری از اوایل اردیبهشت شروع می‌شود تا اواخر تابستان می‌تواند ادامه داشته باشد.
                </Typography>
              </AccordionDetails>
            </Accordion>
      </Grid>
 
      <Typography variant="h3" color="secondary" style={{fontWeight:"600",marginTop:"32px"}}>زنبورداری شهری</Typography>
      <Grid style={{ width: "100%" }}>
            <Accordion
              // onClick={() => changeColor(el.id)}
              className={classes.Accordion}
              style={{ borderRadius: "9px", marginTop: "16px" }}
            >
              <AccordionSummary
                className={classes.arrowStyle}
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{fontWeight:"600"}}>زنبورداری شهری چیست؟</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                به طور خلاصه، زنبورداری شهری شامل نصب کندوهای زنبور عسل در سطح شهر است.  باتوجه به این که گرده افشان ها  مسئول گرده افشانی یک سوم هر چیزی که در بشقاب هایمان می گذاریم، هستند،زنبورداری شهری از این موجودات گرده افشان نیز حمایت می کند.                </Typography>
              </AccordionDetails>
            </Accordion>
      </Grid>

      <Grid style={{ width: "100%" }}>
            <Accordion
              // onClick={() => changeColor(el.id)}
              className={classes.Accordion}
              style={{ borderRadius: "9px", marginTop: "16px" }}
            >
              <AccordionSummary
                className={classes.arrowStyle}
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{fontWeight:"600"}}>زنبورداری شهری چیست؟</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                به طور خلاصه، زنبورداری شهری شامل نصب کندوهای زنبور عسل در سطح شهر است.  باتوجه به این که گرده افشان ها  مسئول گرده افشانی یک سوم هر چیزی که در بشقاب هایمان می گذاریم، هستند،زنبورداری شهری از این موجودات گرده افشان نیز حمایت می کند.                </Typography>
              </AccordionDetails>
            </Accordion>
      </Grid>


      

    </Grid>
    </div>
  );
}