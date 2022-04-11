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
              <Grid item style={{ width: "100%"}}>
                <Grid item xs={12} container alignItems={"center"}>
                 {/* <div style={{border:"4px solid rgb( 255 ,176 ,4)",borderRadius:"50%",width:"35px",height:"35px",padding:"8px",marginLeft: "8px" ,display:"flex",alignItems:"center",justifyContent:"center"}}> */}
                  <img src={Img} style={{marginLeft: "8px"}} />
                  {/* </div> */}
                  <Title title={title} variant="p"/>
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
