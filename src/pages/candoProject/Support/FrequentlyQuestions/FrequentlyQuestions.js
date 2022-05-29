

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
import { CallMissedSharp, ExpandMore } from "@material-ui/icons";
import { styled } from "@material-ui/styles";
import * as React from "react";
import useStyles from "./Styles";

export default function SimpleAccordion() {
  const classes = useStyles();
  const [borderColor, setborderColort] = React.useState(true);

  const [value, setValue] = React.useState("همه"); // selected option
  const options = [
    { label: "همه", value: "همه" },
    { label: "تغذیه زنبور", value: "تغذیه زنبور" },
    { label: "برداشت عسل", value: "برداشت عسل" },
    { label: "بیماری زنبور", value: "بیماری زنبور" },
  ];

  const data = [
    {
      id: "1",
      Title: "متن سوال 1",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "2",
      Title: "متن سوال 2",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "3",
      Title: "متن سوال 3",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "4",
      Title: "متن سوال 4",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "5",
      Title: "متن سوال 5",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "6",
      Title: "متن سوال 6",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "7",
      Title: "متن سوال 7",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "8",
      Title: "متن سوال 8",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "9",
      Title: "متن سوال 9",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  
  const changeColor = (index) => {
    console.log(index);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid container className={classes.container}>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Typography style={{ marginLeft: "16px", whiteSpace: "nowrap" }}>
          دسته بندی سوالات
        </Typography>
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.inputSelect}
        >
          <Select
        
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={handleChange}

            // inputProps={{ "aria-label": "Without label" }}
          >
            {options?.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label ?? option.value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>

      {/* item */}
      <Grid style={{ width: "100%" }}>
        {data.map((el, index) => {
          return (
            <Accordion
              onClick={() => changeColor(el.id)}
              className={classes.Accordion}
              style={{ borderRadius: "9px", marginTop: "16px" }}
            >
              <AccordionSummary
                className={classes.arrowStyle}
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{el.Title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{el.paragraph}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Grid>
    </Grid>
  );
}
// import { AccordionDetails, Typography } from '@material-ui/core';
// import { ArrowForwardIosSharp } from '@material-ui/icons';
// import { styled } from '@material-ui/styles';
// import * as React from 'react';

// const Accordion = styled((props) => (
//   <Accordion disableGutters elevation={1} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&:before': {
//     display: 'none',
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <AccordionSummary
//     expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '1rem' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row',
//   border:'1px solid red',
//   justifyContent:'space-between',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',color:'red'
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetailss = styled(AccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

// export default function CustomizedAccordions() {
//   const [expanded, setExpanded] = React.useState('panel1');

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <div>
//       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//           <Typography>Collapsible Group Item #1</Typography>
//         </AccordionSummary>
//         <AccordionDetailss>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
//             sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetailss>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//         <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
//           <Typography>Collapsible Group Item #2</Typography>
//         </AccordionSummary>
//         <AccordionDetailss>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
//             sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetailss>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//         <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
//           <Typography>Collapsible Group Item #3</Typography>
//         </AccordionSummary>
//         <AccordionDetailss>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
//             sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetailss>
//       </Accordion>
//     </div>
//   );
// }
