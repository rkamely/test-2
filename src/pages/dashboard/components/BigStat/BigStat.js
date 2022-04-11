import React, { useState } from "react";
import { Grid, Select, MenuItem, Input } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { BarChart, Bar } from "recharts";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";
import Bardia from "../../../../components/Form/CategoryForm/Bardiaadd";

export default function BigStat(props) {
  const { product, total, color, registrations, bounce } = props;
  const classes = useStyles();
  const theme = useTheme();

  // local
  const [value, setValue] = useState("daily");
  return (
    <Widget
      header={
  
          <Grid container   alignItems="center" justifyContent="space-between">
   <div>  
          <Typography variant="h6">{product}</Typography>
          <div style={{marginTop:"16px" ,color:"rgb( 102, 103, 104)"}} >
           <Typography variant="p"   colorBrightness="secondary" >
           {registrations[value].value}
          </Typography></div>
   </div>     
    <div style={{display:"flex"}
    }>
    <Typography variant="p" style={{fontWeight:"bold"}}  className={registrations[value].profit?classes.profitArrowGreen:classes.profitArrowDangerRed}>{registrations[value].title2}</Typography>
      
            {/* <Typography variant="h6" className={classnames(classes.profitArrow, {
                [!registrations[value].profit]: classes.profitArrowDanger,
              })}>{console.log(registrations[value].profit)}ss</Typography> */}
    
    </div>
          </Grid>

      }
  
    />




      
  
  );
}

