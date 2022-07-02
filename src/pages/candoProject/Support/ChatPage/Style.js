import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    ButtonSubmitPage:{
        backgroundColor:"rgb(255,176,4)",
        padding:"8px 32px",
        borderRadius:"12px",
        color:"#fff",
        marginTop:"8px",
        fontFamily:"Shabnam",
        "&:hover": {
            backgroundColor:"rgb(255,176,4)",

},
    },
    QuestionCountainer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "16px 32px",
        justifyContent: "space-between",
        borderRadius: "12px",
        width: "50%",
        marginTop: "24px",
        alignSelf: "flex-start",
        boxShadow: "0px, 3px,6px, 0px ,rgba(0,0,0,0.16)",
    
    },
    titleQuestion:{
        fontSize: "16px",
        fontWeight: "bold",
        width: "100%",
        borderRadius: "12px",
        backgroundColor: "rgb( 255 242 212)",
        padding: "16px 32px",
        boxShadow: "0px 3px  6px  0px rgba(0,0,0,0.16)",
    },
    AnswerCountainer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "16px 32px",
        marginTop: "32px",
        justifyContent: "space-between",
        borderRadius: "12px",
        width: "50%",
        alignSelf: "flex-end",
      
    },
    titleAnswer:{
        fontSize: "16px",
        fontWeight: "bold",
        width: "100%",
        borderRadius: "12px",
        backgroundColor: "rgb( 244 244 244)",
        padding: "16px 32px",
        boxShadow: "0px 3px  6px  0px rgba(0,0,0,0.16)",
    },
    Loading:{
        height:"90%",
        display:"flex",
        alignItems:"center"  ,
        justifyContent:"center"
    },   
    errorTitle:{
        color:"red"
    },
    openTicket: {
        backgroundColor:"rgb( 190, 215 ,249)",
        borderRadius:"8px",
        width:"80px",
        padding:"4px 0px",
        textAlign:"center",
        color:"rgb( 26 115 233)",
        fontWeight:"bold"
    
      },
      closeTicket:{
        backgroundColor:"rgb( 219 219 219)",
        borderRadius:"8px",
        width:"80px",
        padding:"4px 0px",
        textAlign:"center",
        color:"rgb( 102 103 104)",
        fontWeight:"bold"
      },
      closeTicketAdmin:{
        backgroundColor:"rgb( 219 219 219)",
        borderRadius:"8px",
        width:"80px",
        padding:"4px 0px",
        textAlign:"center",
        color:"rgb( 102 103 104)",
        fontWeight:"bold"
      },
      waitTicket:{
        backgroundColor:"rgb( 255 242 212)",
        borderRadius:"8px",
        width:"80px",
        padding:"4px 0px",
        textAlign:"center",
        color:"rgb( 227 156 0)",
        fontWeight:"bold"
      },
}));
