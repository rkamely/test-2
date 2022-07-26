



import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';

const LinearProgresses = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'orange',
  },
}))(LinearProgress);
function LinearProgressWithLabel(props) {
  console.log("props Value",props)
  return (
    
    <Box display="flex" alignItems="center" style={{width:"200px"}}>
      <Box width="100%" mr={2}  >
        <LinearProgresses variant="determinate" {...props} style={{color:"red" }}/>
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" style={{color:"red" , fontWeight:600  }}>
          {props.value}%
          </Typography>
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
