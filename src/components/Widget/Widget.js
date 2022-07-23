import React, { useState } from "react";
import {
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import { MoreVert as MoreIcon } from "@material-ui/icons";
import classnames from "classnames";

// styles
import useStyles from "./styles";
import Title from "../Typography/Title/Title";

export default function Widget({
  children,
  Img,
  color,
  title,
  noBodyPadding,
  bodyClass,
  disableWidgetMenu,
  header,
  noHeaderPadding,
  headerClass,
  style,
  noWidgetShadow,
  ...props
}) {
  const classes = useStyles();

  return (
    <div className={classes.widgetWrapper} >
      <Paper
        className={classes.paper}
        classes={{
          root: classnames(classes.widgetRoot, {
            [classes.noWidgetShadow]: noWidgetShadow,
          }),
        }}
      >
        <div
          className={classnames(classes.widgetHeader, {
            [classes.noPadding]: noHeaderPadding,
            [headerClass]: headerClass,
          })}
        >
          {header ? (
            header
          ) : (
            <React.Fragment>
              <Grid item style={{ width: "100%"}}>
                <Grid item xs={12} container alignItems={"center"}>
                 <div > <img src={Img}  className={classes.Img}/></div>
                  <Typography  style={{color:"rgb( 227 ,156 ,0)",marginRight:"8px",fontWeight:"900",fontSize:"0.8rem"}} variant="p" >{title}</Typography>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
        </div>
        <div
          className={classnames(classes.widgetBody, {
            [classes.noPadding]: noBodyPadding,
            [bodyClass]: bodyClass,
          })}
        >
          {children}
        </div>
      </Paper>
    </div>
  );
}
