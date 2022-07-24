import { Button, Dialog, Grid, Slide, Typography } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useStyles from "./styles";
import ApiaryAddList from '../../../components/Form/ApiaryList/ApiaryAddList';
import AnswerQuestionsForm from '../../../components/Form/AnswerQuestion/AnswerQuestionsForm';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function AnswerQuestion() {
    const classes = useStyles();
    const [newQuestion, setNewQuestion] = useState([]);
    const [openQuestion, setOpenQuestion] = useState(false);
    const history = useHistory();


    const token = localStorage.getItem("id_token")

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data: response } = await axios.get(
            `http://185.202.113.165:3000/api/question/getAll`,
            {
              headers: {
                token: `${token}`,
              },
            },
          );
          console.log("show response profile", response.data);
          setNewQuestion(response.data)
        } catch (error) {
        //   if (error.response?.status === 401) {
        //     localStorage.clear("id_token")
        //     console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
        //     window.location.reload()
        //   }else{
        //   console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
        //   // history.push("/app/Error")
        //   // window.location.reload()
        //  }
        }
        // setLoading(false);
      };
      fetchData();
    }, []);


console.log("newQuestion",newQuestion);

const handleClickOpen = () => {
    setOpenQuestion(true);
  };
const handleClose = () => {

    setOpenQuestion(false);

    history.push("/app/question")

  };
  return (
    <div className={classes.container}>

    <div >سوالات</div>
    {newQuestion?.map((element) => {
          
          return(

                  <Grid item sm={12} className={classes.QuestionBox} >
                    <Grid item className={classes.Titles}>
                      <Typography className={classes.Title}>
                        {/* {title(element.category)} */}
                      </Typography>
                      <Typography className={classes.Date}>{element.title}</Typography>   
                    </Grid>
            <Link
                key={element._id}
                to={`./question/${element._id}`}
                onClick={() =>localStorage.setItem("Question_id",element._id)}
                // className={seenClass}       
                style={{ color: "#000",textDecoration:"none",cursor: "pointer"}}
              >  
              <Button onClick={ ()=>handleClickOpen()}  style={{fontSize:"Shabnam",backgroundColor:"orange",color:"#000",cursor:"pointer"}}>پاسخ</Button>
              </Link>
                  </Grid>
      
       
       

     
                          
                       ) })}
            <Dialog
            PaperProps={{
                        style: { borderRadius: 12, width: "40%",overflowY:"hidden" },
            }}
            style={{ backgroundColor: "rgba(0 ,0 ,0, 0.5)" }}
            maxWidth="xl"
            open={openQuestion}
            TransitionComponent={Transition}
            // keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
                  <AnswerQuestionsForm onClose={handleClose}/>
                  
          </Dialog>
    
    </div>
  )
}

export default AnswerQuestion