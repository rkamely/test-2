import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    Loading:{
        height:"90%",
        display:"flex",
        alignItems:"center"  ,
        justifyContent:"center"
    },
    Container:{
        padding: "32px ",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
      },
      bottomMain:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"100%",

        // justifyContent:"center"
      },
      usersAnswer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        padding:"16px 0px"
      },
      Title:{
          padding:"16px 0px"
      }

}));
