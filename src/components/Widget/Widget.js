import React, { useState } from "react";
import {
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Grid,
} from "@material-ui/core";
import { MoreVert as MoreIcon } from "@material-ui/icons";
import classnames from "classnames";

// styles
import useStyles from "./styles";

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

  // local
  const [moreButtonRef, setMoreButtonRef] = useState(null);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

  return (
    <div className={classes.widgetWrapper} style={style && { ...style }}>
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
              <Grid item style={{ width: "100%" }}>
                <Grid item xs={12} container alignItems={"center"}>
                  <img src={Img} style={{ marginLeft: "8px" }} />
                  <Typography
                    variant="p"
                    color={color}
                    style={{ fontWeight: "600" }}
                  >
                    {title}
                  </Typography>
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
