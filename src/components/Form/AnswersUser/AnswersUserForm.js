import { Divider, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import Loading from "../../Loading/Loading";
import axios from "axios";
function AnswersUsersForm() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("id_token");
  const [AnswersList, setAnswersList] = useState([]);
  const question_id = localStorage.getItem("question_id");

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axios.get(
          // `http://185.202.113.165:3000/api/answer/get-question-answer/${question_id}/${hive_id}`,
          `http://185.202.113.165:3000/api/answer/getAll`,
          {
            headers: {
              token: `${token}`,
            },
          },
        );
        console.log("show response", response.data);
        setAnswersList(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.clear("id_token");
          console.log(
            "سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" +
              "ApiaryList",
          );
          window.location.reload();
        } else {
          console.log(
            "سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" +
              "ApiaryList",
          );
          // history.push("/app/Error")
          window.location.reload();
        }
      }
      // setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Typography
        variant="h6"
        align="center"
        margin="dense"
        className={classes.Title}
        color="secondary"
      >
        پاسخ کاربر
      </Typography>

      <Divider className={classes.Divider} />
      {loading ? (
        <div className={classes.Loading}>
          <Loading color="orange" />
        </div>
      ) : (
        <Grid md={12} className={classes.Container}>
          {AnswersList.length == 0 ? (
            <div>به این سوال پاسخی داده نشده است.</div>
          ) : (
            <Grid md={12} className={classes.bottomMain}>
              {/* <Grid md={12}>پاسخ کاربران</Grid> */}
              {AnswersList?.map((AnswerList) => {
                return (
                  <Grid
                    md={12}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid md={12} className={classes.usersAnswer}>
                      <Grid md={12}>نام کاربر</Grid>
                      <Grid md={12}>
                        {AnswerList?.input || AnswerList?.selected}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
}

export default AnswersUsersForm;
