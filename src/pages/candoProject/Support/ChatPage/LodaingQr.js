



import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  console.log("props Value",props)
  return (
    
    <Box display="flex" alignItems="center">
      {/* <Box width="20%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box> */}
      <Box minWidth={35}>
        <Typography variant="body2" style={{color:"blue" , fontWeight:600 , marginTop:"8px" , border:"2px solid blue" ,borderRadius:"50%",height:"50px",width:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>{
          props.value
        }</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LodaingQr(props) {
  const classes = useStyles();


  // React.useEffect(() => {

  //     props.setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress));


  // }, []);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={props.value} />
    </div>
  );
}
