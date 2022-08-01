import { Button, Dialog, Grid, Slide, Typography } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useStyles from "./styles";
import ApiaryAddList from '../../../components/Form/ApiaryList/ApiaryAddList';
import AnswerQuestionsForm from '../../../components/Form/AnswerQuestion/AnswerQuestionsForm';
import Title from '../../../components/Typography/Title/Title';
import Loading from '../../../components/Loading/Loading';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function AnswerQuestion() {
    const classes = useStyles();
    const [newQuestion, setNewQuestion] = useState([]);
    const [openQuestion, setOpenQuestion] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const [Answer,setAnswer]=useState([]);


    const token = localStorage.getItem("id_token")
////////////////////////////////////////////////////////////////////////////////////////////
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
          setLoading(false);
        } catch (error) {
          if (error.response?.status === 401) {
            localStorage.clear("id_token")
            console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
            window.location.reload()
          }else{
          console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
          // history.push("/app/Error")
          // window.location.reload()
         }
        }
        // setLoading(false);
      };
      fetchData();
    }, []);

////////////////////////////////////////////////////////////////////////////////////////////
//get all answer
useEffect(() => {
  const fetchData = async () => {
    // setLoading(true);
    try {
      const { data: response } = await axios.get(
        `http://185.202.113.165:3000/api/answer/getAll`, {
          headers: {
            token: `${token}`,
          },
        },
      )
      console.log("show response Question", response.data);
      setAnswer(response.data)
      console.log("answer",response.data);
      setLoading(false)
    } catch (error) {
     console.log(error);
    }
  };
  fetchData();
}, []);
/////////////////////////////////////////////////////////
console.log("newQuestion",newQuestion);

const handleClickOpen = () => {
    setOpenQuestion(true);
  };
const handleClose = () => {

    setOpenQuestion(false);

    history.push("/app/question")

  };
  return (

<>
{loading ? (
        <div className={classes.Loading}>
          
          <Loading color="orange" />
        </div>
      ) : (
    <div className={classes.container}>

    <Title title="سوالات"/>


                  <Grid item sm={12} className={classes.QuestionBox} display={{display:"flex",flexDirection:"column"}}> 
   {newQuestion?.map((element) => {
          
          return(
            <div style={{display:"flex", background:"#fff",  padding: " 16px 32px ", marginTop:"16px",
    
            borderRadius:"16px",width:"100%",alignItems:"center",justifyContent:"space-between"}}>
              
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
              
              <Link
                key={element._id}
                to={`./question/${element._id}`}
                onClick={() =>localStorage.setItem("Question_id",element._id)}
                // className={seenClass}       
                style={{ color: "#000",textDecoration:"none",cursor: "pointer"}}
              >  
              <Button onClick={ ()=>handleClickOpen()}  style={{fontSize:"Shabnam",backgroundColor:"orange",color:"#000",cursor:"pointer"}}>ویرایش</Button>

              </Link> 
              
              </div>    ) })}

                  </Grid>
      
       
       

     
                          
                  
            <Dialog
            PaperProps={{
                        style: { borderRadius: 12, width: "auto",overflowY:"hidden" },
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
      )}
</>
  )
}

export default AnswerQuestion