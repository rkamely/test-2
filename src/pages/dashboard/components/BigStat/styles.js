import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(1),
  },
  bottomStatsContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(1) * -2,
    marginTop: theme.spacing(1),
  },
  statCell: {
    padding: theme.spacing(2),
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%"
  },
  totalValueContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  totalValue: {
    display: "flex",
    alignItems: "baseline",
  },
  profitArrow: {
   backgroundColor:"rgb( 33 192 99)",
   fontSize:"0.8rem",
   padding:"12px 16px",
  width:"120px",
  borderRadius:"8px",
  textAlign:"center",
    fill: theme.palette.success.main,
  },
  profitArrowGreen:{
    backgroundColor:"rgb( 163 229 190)",
    fontSize:"0.8rem",
    padding:"12px 16px",
   width:"120px",
   borderRadius:"8px",
   textAlign:"center",
     fill: theme.palette.success.main,
  },
  profitArrowDanger: {
    backgroundColor:"rgb( 227 23 10)",
    fontSize:"0.8rem",
    padding:"12px 16px",
    width:"120px",
    textAlign:"center",
    borderRadius:"8px",
    fill: theme.palette.secondary.main,
  },
  profitArrowDangerRed:{
    backgroundColor:"rgb( 244 162 157)",
    fontSize:"0.8rem",
    padding:"12px 16px",
    width:"120px",
    textAlign:"center",
    borderRadius:"8px",
    fill: theme.palette.secondary.main,
  },
  selectInput: {
    padding: 10,
    paddingRight: 25,
    "&:focus": {
      backgroundColor: "white",
    },
  },
  bodyWidgetOverflow: {
    overflow: 'auto'
  }
}));
