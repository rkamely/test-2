import { Avatar, Grid, Typography } from "@material-ui/core";
import { MoreVertOutlined } from "@material-ui/icons";
import { Link ,useParams,useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Widget from "../../../components/Widget/Widget";
import useStyles from "./Style";
function LeftCard() {
  const classes = useStyles();
  const history=useHistory()
  const manualVisit=localStorage.getItem("manualVisit")
  console.log("manualVisit",manualVisit);
  // const[manualVisitBoolean,setManualVisitBoolean]=useState(true)
  // useEffect(()=>{
  //   setManualVisitBoolean(manualVisit)
  // },[manualVisitBoolean])
  // console.log("manualVisitBoolean",manualVisitBoolean);
  return (
    <>
    <Grid item  xs={12} className={classes.LeftCard_Container}  style={{ height: "250px" }}>

        {/* top */}
        <Grid
          item
          style={{ display: "flex" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid
            item
            justifyContent="flex-start"
            alignItems="center"
            style={{ display: "flex" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/assets/Group 252.svg"
              className={classes.logoHives}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="p"
                weight="Bold"
                noWrap
                style={{ fontWeight: 600 }}
              >
                کندوی 1-1165793391
              </Typography>
              <Typography
                variant="p"
                weight="Bold"
                noWrap
                className={classes.cardSubtitleLeft}
                style={{ fontWeight: 600, color: "rgb(173 173 173)" }}
              >
                تهران - خیابان ازادی
              </Typography>
            </div>
          </Grid>
          <MoreVertOutlined variant="contained"  style={{cursor:"pointer"}}/>
        </Grid>

        {/* bottom */}
        
        <Grid
          container
          item
          alignItems="center"
          justifyContent="space-between"
          style={{ marginTop: "30px" }}
        >
          <Grid item className={classes.cardBottomPart}>
            <Typography
              variant="p"
              weight="Bold"
              noWrap
              className={classes.cardTitleLeftBottom}
            >
              زنبورستان
            </Typography>
            <Typography
              variant="p"
              weight="Bold"
              noWrap
              className={classes.cardSubtitleLeftBottom}
            >
              زنبورستان 1
            </Typography>
          </Grid>

          <div
            style={{
              borderLeft: "2px solid rgb( 173 173 173)",
              height: "50px",
            }}
          ></div>

          <Grid item className={classes.cardBottomPart}>
            <Typography
              variant="p"
              weight="Bold"
              noWrap
              className={classes.cardTitleLeftBottom}
            >
              تاریخ ایجاد
            </Typography>
            <Typography
              variant="p"
              weight="Bold"
              noWrap
              className={classes.cardSubtitleLeftBottom}
            >
              1400/01/01
            </Typography>
          </Grid>

          <div
            style={{
              borderLeft: "2px solid rgb( 173 173 173)",
              height: "50px",
            }}
          ></div>

          <Grid item className={classes.cardBottomPart}>
            <Typography
              variant="p"
              weight="Bold"
              noWrap
              className={classes.cardTitleLeftBottom}
            >
              نژاد ملکه
            </Typography>
            <Typography
              variant="p"
              weight="Bold"
              noWrap
              className={classes.cardSubtitleLeftBottom}
            >
              نژاد
            </Typography>
          </Grid>

          <div
            style={{
              borderLeft: "2px solid rgb( 173 173 173)",
              height: "50px",
            }}
          ></div>

          <Grid item className={classes.cardBottomPart}>
            <Typography
              variant="p"
              weight="Bold"
              noWrap
              className={classes.cardTitleLeftBottom}
            >
              نوع کندو
            </Typography>
            <Typography
              variant="p"
              weight="Bold"
              noWrap
              className={classes.cardSubtitleLeftBottom}
            >
              کندو
            </Typography>
          </Grid>
        </Grid>
    </Grid>
    <Grid item  xs={12} className={classes.ManualVisit_Container}  >
     {manualVisit=="true"?<div onClick={()=>history.push("/app/Question")} >برای پاسخ به سوالات دستی کلیک نمایید.</div>:    <div onClick={()=>history.push("/app/setting")}>جهت فعال کردن بازدید دستی کلیک کنید.</div>} 
    </Grid>

    </>
  );
}
export default LeftCard;
