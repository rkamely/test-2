import React, { useState } from "react";
import {
  Paper,
  Grid,
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
                  <Title title={title} variant="p" />
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
