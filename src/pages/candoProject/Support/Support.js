import {
  Breadcrumbs,
  Button,
  Dialog,
  Grid,
  MenuItem,
  Select,
  Slide,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import AddTicket from "./addTicket";
import useStyles from "./Style";
import { Link ,useHistory} from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import axios from "axios";
import AddQRcode from "./addQRcode";
import moment from "jalali-moment";
import Loading from "../../../components/Loading/Loading";
import { NavigateBefore } from "@material-ui/icons";
import Title from "../../../components/Typography/Title/Title";
import classNames from "classnames";
import "./Support.css";
import Youtube from "./youtube";
import { axiosInstance } from "../../api/axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Support() {
  const [open, setOpen] = useState(false);
  const [AddTickets, setAddTickets] = useState(true);
  const [newTicket, setNewTicket] = useState([]);
  // global
  // var layoutState = useLayoutState();
  const { auth, setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const history = useHistory();

  /////////////////////////////////////////////////////////////////////////////////////////

  const token = localStorage.getItem("id_token");
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axiosInstance.get(
          "/ticket/getUserTickets",
          {
            headers: {
              token: `${token}`,
            },
          },
        );

        const length = response.data.length;

        setNewTicket(response.data);
        setLoading(false);
        if (length != 0) {
          setShow(true);
        } else {
          setShow(false);
        }
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.clear("id_token")
          console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
          window.location.reload()
        }else{
        console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
        history.push("/app/Error")
        window.location.reload()
       }}
      // setLoading(false);
    };
    fetchData();
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////
  const m = moment();
  m.locale("fa");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const [data, setData] = useState([
    {
      status: false,
      id: 1,
      Title: "موضوع تیکت",
      Date: "1400/01/01",
      Time: "12:14",
      state: {
        close: 0,
        open: 1,
        wait: 2,
      },
      status1: "Wait",
      Duration: "8 ماه پیش ",
    },
    {
      id: 2,
      Title: "درخواست QR Code",
      Date: "1400/01/01",
      Time: "12:14",
      state: {
        close: 0,
        open: 1,
        wait: 2,
      },
      status1: "Open",
      Duration: "8 ماه پیش ",
    },
    {
      id: 3,
      Title: "موضوع تیکت",
      Date: "1400/01/01",
      Time: "12:14",
      state: {
        close: 0,
        open: 1,
        wait: 2,
      },
      status1: "Close",
      Duration: "8 ماه پیش ",
    },
    {
      id: 4,
      Title: "موضوع تیکت",
      Date: "1400/01/01",
      Time: "12:14",
      state: {
        close: 0,
        open: 1,
        wait: 2,
      },
      Duration: "8 ماه پیش ",
    },
  ]);

  const waveHello = () => {
    setAddTickets(false);
  };

  const wavebye = () => {
    setAddTickets(true);
  };





  const breadcrumbs = [
    <Link key="1" style={{ textDecoration: "none", cursor: "pointer" }}>
      <Title key="1" title=" پشتیبانی " />
    </Link>,
    <Link key="2" style={{ textDecoration: "none", cursor: "pointer" }}>
      {/* <Title key="2" title="پیام‌های من"/> */}
      <p style={{ color: "rgb(227, 156, 0)", fontWeight: "bold" }}>
        پیام‌های من
      </p>
    </Link>,

    // <Title key="3" title={id}/>
  ];
  return (
    <div className={classes.container}>
      <Breadcrumbs
        separator={
          <NavigateBefore
            fontSize="large"
            style={{ color: "rgb(227, 156, 0)" }}
          />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      {loading ? (
        <div className={classes.LoadingMain}>
          {" "}
          <Loading color="orange" />
        </div>
      ) : (
        <Grid container >
          <Grid item xs={12} className={classes.Button}>
            <Button
              className={classes.button1}
              onClick={() => {
                handleClickOpen();
                waveHello();
              }}
              style={{ fontFamily: "Shabnam" }}
            >
              تیکت به پشتیبانی
            </Button>


            <Button
              className={classes.button2}
              onClick={() => {
                handleClickOpen();
                wavebye();
              }}
              style={{ fontFamily: "Shabnam" }}
            >
              درخواست  QR Code
            </Button>
          </Grid>

          {show ? null : (
            <div
              style={{
                width: "100%",
                height: "60vh",
                boxShadow: "0px 3px 6px 3px rgba( 0, 0, 0, 0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                marginTop: "32px",
              }}
            >
              تیکتی جهت نمایش وجود ندارد!
            </div>
          )}

          {/* new ticket main*/}

          {newTicket?.map((element) => {
            const ticketDate = moment.from(element.updatedAt).locale("fa");
            let durationDate = moment().diff(ticketDate, "days");

            //css calss
            let btnClass = classNames({
              [classes.openTicket]: element.status === "Open",
              [classes.closeTicket]: element.status === "CloseByAdmin",
              [classes.closeTicketAdmin]: element.status === "CloseByUser",
              [classes.waitTicket]: element.status === "Wait",
            });
            //logic calss
            const changeText = (e) => {
              switch (e) {
                case "Open":
                  return <div>باز</div>;
                case "CloseByAdmin":
                  return <div>بسته</div>;
                case "CloseByUser":
                  return <div>بسته</div>;
                default:
                  return <div>در انتظار</div>;
              }
            };
            const title = (e) => {
              switch (e) {
                case "cure":
                  return <div>درمان</div>;
                case "nurture":
                  return <div>تغذیه</div>;
                case "visit":
                  return <div>بازدید</div>;
                case "pickHoney":
                  return <div>برداشت عسل</div>;
                case "apiary":
                  return <div>زنبورستان</div>;
                case "hive":
                  return <div>کندو</div>;
                case "products":
                  return <div>محصولات</div>;
                case "queen":
                  return <div>ملکه</div>;
                case "honeyBehaviour":
                  return <div>رفتار زنبورعسل</div>;
                case "boardConnection":
                  return <div>ارتباط با برد</div>;
                case "accesses":
                  return <div>دسترسی ها</div>;
                case "profile":
                  return <div>حساب کاربری</div>;
                case "moveHive":
                  return <div>انتقال</div>;
                  case "qrCode":
                    return <div> تیکت QRCODE </div>    
                  case "requestQRCode":
                    return <div>درخواست QRCODE</div>   

                case "other":
                  return <div>سایر</div>;
                default:
                  return <div>بدون عنوان </div>;
              }
            };
            // switch (element.status) {
            //   case "Open":
            //     return <div>باز</div>
            //   case "CloseByUser":

            //   default:
            //     break;
            // }
            let seenClass = classNames({
              notSeen: element.seenByUser === false,
              Seen: element.seenByUser === true,
            });
            switch (element.category) {
              case "requestQRCode":
                return(
                <Link
                key={element._id}
                to={`./Support/qrCode/${element._id}`  }
                className={seenClass}
                item
                sm={12}
            
                style={{ marginTop: "32px",color: "#000",textDecoration:"none",cursor: "pointer"}}
              >
                  <Grid className={classes.rightContent}>
                    <Grid item className={classes.Titles}>
                      <Typography className={classes.Title}>
                        {title(element.category)}
                      </Typography>
                      <Typography className={classes.Date}> {moment.from(element.updatedAt).locale('fa').format('YYYY/M/D HH:mm')}</Typography>
                       {/* <Typography className={classes.Time}>({element.createBy.mobile})</Typography> */}
      
      
      
      
                    </Grid>
                    <Grid className={btnClass}>{changeText(element.status)}</Grid>
                  </Grid>
      
                  <Grid className={classes.Duration}>{durationDate=="0"?<div>در ۲۴ ساعت گذشته</div>:<div>{durationDate} روز قبل</div>}</Grid>
      
              </Link>
            )
              default:
                return (
                <Link
                key={element._id}
                to={`./Support/${element._id}`  }
                className={seenClass}
                item
                sm={12}
            
                style={{ marginTop: "32px",color: "#000",textDecoration:"none",cursor: "pointer"}}
              >
                  <Grid className={classes.rightContent}>
                    <Grid item className={classes.Titles}>
                      <Typography className={classes.Title}>
                        {title(element.category)}
                      </Typography>
                      <Typography className={classes.Date}> {moment.from(element.updatedAt).locale('fa').format('YYYY/M/D HH:mm')}</Typography>
                       {/* <Typography className={classes.Time}>({element.createBy.mobile})</Typography> */}
      
      
      
      
                    </Grid>
                    <Grid className={btnClass}>{changeText(element.status)}</Grid>
                  </Grid>
      
                  <Grid className={classes.Duration}>{durationDate=="0"?<div>در ۲۴ ساعت گذشته</div>:<div>{durationDate} روز قبل</div>}</Grid>
      
              </Link>)
                break;
            }
          })}

          {/* {data.map((element) => {
                  let btnClass = classNames({
             
                    [classes.openTicket]: element.status1==="Open",
                    [classes.closeTicket]: element.status1==="Close",
                    [classes.waitTicket]: element.status1==="Wait",
        
                    // [classes.drawerClose]: !element.status,
                  // btn: true,
                 'open': element.status,
                 'close': !element.status && element.status,
                 "wait":element.status
               });

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
                  {element.Title}
                </Grid>
                <Grid style={{ color: "rgb(173 ,173 ,173)", marginTop: "8px" }}>
                {moment.from(element.sentAt).locale('fa').format('YYYY/M/D HH:mm')} | {element.Date} {element.Time}
                  
                </Grid>
                <Grid className={btnClass}>{changeText}</Grid>
              </Grid>)

              

      })} */}

          <Dialog
            style={{ backgroundColor: "rgba(0 ,0 ,0, 0.5)" }}
            maxWidth="xl"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
 
            {AddTickets ? (
              <AddQRcode
                input={false}
                handleClose={handleClose}
                title=" درخواست QR Code  "
                style={{ width: "100%" }}
                newTicket={newTicket}
                setNewTicket={setNewTicket}
              />

            ) : (
              <AddTicket
                input={true}
                handleClose={handleClose}
                title=" تیکت جدید"
                style={{ width: "100%" }}
                newTicket={newTicket}
                setNewTicket={setNewTicket}
                setShow={setShow}
              />
            )}
          </Dialog>
        </Grid>
      )}
    </div>
  );
}

export default Support;
