import { Avatar, Grid, Typography } from "@material-ui/core";
import { MoreVertOutlined } from "@material-ui/icons";
import { Link ,useParams,useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Widget from "../../../components/Widget/Widget";
import useStyles from "./Style";
import axios from "axios";
import { axiosInstance } from "../../api/axios";
function LeftCard() {
  const classes = useStyles();
  const history=useHistory()
  const manualVisit=localStorage.getItem("manualVisit")
  // const[manualVisitBoolean,setManualVisitBoolean]=useState(true)
  // useEffect(()=>{
  //   setManualVisitBoolean(manualVisit)
  // },[manualVisitBoolean])
////////////////////////////////////////////////////////////////////////
const [hiveTable,setHiveTable]=useState([])
const dataOfHive=localStorage.getItem("dataOfHive")
const hiveInformation=JSON.parse(dataOfHive)

let { id } = useParams();

  useEffect(() => {
    const fetchData = async (index) => {
      // setLoading(true);
      const token = localStorage.getItem("id_token");
      const Apiaries_id = localStorage.getItem("Apiaries_id");
      try {
        const { data: response } = await axiosInstance.get(
          `/hive/get-by-apiary/${Apiaries_id}`,
          {
            headers: {
              token: `${token}`,
            },
          },
        );
        setHiveTable(response.data);
        // setLoading(false);
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

const queenType=(e)=>{
  switch (e) {
    case "Native":
      return <p style={{margin:"0"}}>بومی</p>;
    case "Karnika":
      return <p style={{margin:"0"}}>کارنیکا</p>;
    case "Italian":
      return <p style={{margin:"0"}}>ایتالیایی</p>;
    case "Caucasian":
      return <p style={{margin:"0"}}>قفقازی</p>;
    case "Other":
      return <p style={{margin:"0"}}>سایر</p>;
    default:
      return null;
  }
}
const type=(e)=>{
  switch (e) {
    case "Langestrot":
      return <p style={{margin:"0"}}>لانگستروت</p>;
    case "Dadanet":
      return <p style={{margin:"0"}}>دادانت</p>;
    case "Aquarium":
      return <p style={{margin:"0"}}>آکواریومی</p>;
    case "Other":
      return <p style={{margin:"0"}}>سایر</p>;
    default:
      return null;
  }
}
  ////////////////////////////////////////////////////////////////////////
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
                     {hiveInformation.title}
              </Typography>
              <Typography
                variant="p"
                weight="Bold"
                noWrap
                className={classes.cardSubtitleLeft}
                style={{ fontWeight: 600, color: "rgb(173 173 173)" }}
              >
                     {hiveInformation.location}
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
            {hiveInformation.dateCreated}

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
              {queenType(hiveInformation.queenType)}
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
                   {type(hiveInformation.type)}
            </Typography>
          </Grid>
        </Grid>
    </Grid>
    <Grid item  xs={12} className={classes.ManualVisit_Container}  >
     {manualVisit=="true"?<div onClick={()=>history.push("/app/Question")} style={{cursor:"pointer"}} >برای پاسخ به سوالات دستی کلیک نمایید.</div>:    <div onClick={()=>history.push("/app/setting")}>جهت فعال کردن بازدید دستی کلیک کنید.</div>} 
    </Grid>

    </>
  );
}
export default LeftCard;
