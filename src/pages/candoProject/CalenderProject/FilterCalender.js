import React, { useState } from 'react'
import { Add, AddRounded, ExpandMore, Minimize, RemoveSharp } from '@material-ui/icons'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";


function FilterCalender() {
  
  const [expanded, setExpanded] = useState();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Grid container style={{backgroundColor:"#fff", borderRadius: "12px",}}>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Typography style={{ width:"100%",textAlign:"center",marginTop:"16px"}}>
          فیلترها
        </Typography>

      </Grid>

      {/* item */}
      <Grid style={{ width: "100%" }}>

            <Accordion
              expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
              // className={classes.Accordion}
              style={{ marginTop: "16px"}}
            >
              <AccordionSummary
              style={{display:"flex",flexDirection:"row-reverse" }}
                // className={classes.arrowStyle}
                expandIcon={expanded === 'panel1'?<RemoveSharp style={{color:"rgb( 26 115 233)",fontSize:"1.2rem"}} />:<AddRounded style={{color:"rgb( 26 115 233)",fontSize:"1.2rem"}} />}
              >
                <Typography >زنبورستان</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>زنبورستان</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
              // className={classes.Accordion}
   
            >
              <AccordionSummary
              style={{display:"flex",flexDirection:"row-reverse" }}
                // className={classes.arrowStyle}
                expandIcon={expanded === 'panel2'?<RemoveSharp style={{color:"rgb( 26 115 233)",fontSize:"1.2rem"}} />:<AddRounded style={{color:"rgb( 26 115 233)",fontSize:"1.2rem"}} />}
              >
                <Typography >کندو</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>زنبورستان</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
              // className={classes.Accordion}
  
            >
              <AccordionSummary
              style={{display:"flex",flexDirection:"row-reverse" }}
                // className={classes.arrowStyle}
                expandIcon={expanded === 'panel3'?<RemoveSharp style={{color:"rgb( 26 115 233)",fontSize:"1.2rem"}} />:<AddRounded style={{color:"rgb( 26 115 233)",fontSize:"1.2rem"}} />}
              >
                <Typography >الویت</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>زنبورستان</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
              // className={classes.Accordion}
  
            >
              <AccordionSummary
              style={{display:"flex",flexDirection:"row-reverse" }}
                // className={classes.arrowStyle}
                expandIcon={expanded === 'panel4'?<RemoveSharp style={{color:"rgb( 26 115 233)",fontSize:"1.2rem"}} />:<AddRounded style={{color:"rgb( 26 115 233)",fontSize:"1.2rem"}} />}
              >
                <Typography >کاربر</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>زنبورستان</Typography>
              </AccordionDetails>
            </Accordion>
          
  
      </Grid>
     </Grid>
  )
}

export default FilterCalender