import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    Loading:{
        height:"90%",
        display:"flex",
        alignItems:"center"  ,
        justifyContent:"center"
    },
    container:{
        padding: "48px 48px",
        
      },
      QuestionBox:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding: " 16px 32px ",
        marginTop:"16px",
        background:"#fff",
        borderRadius:"16px"

      }

}));
