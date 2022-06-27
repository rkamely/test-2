import { Typography } from '@material-ui/core'
import React from 'react'

function Title(props) {
  return (
  <Typography variant={props.variant} style={{color:"rgb( 227 ,156 ,0)",marginRight:"8px",fontWeight:"900",fontSize:"0.95rem"}}>
    {props.title}
  </Typography>
  )
}

export default Title