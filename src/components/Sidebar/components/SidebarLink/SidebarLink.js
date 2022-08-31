import React, { useState } from "react";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Inbox as InboxIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Dot from "../Dot";

export default function SidebarLink({
  link,
  icon,
  label,
  children,
  location,
  isSidebarOpened,
  nested,
  type,
}) {
  var classes = useStyles();

  // local
  var [isOpen, setIsOpen] = useState(false);
  var isLinkActive =
    link &&
    (location.pathname === link || location.pathname.indexOf(link) !== -1);
   let btnClass = classnames({
    [classes.aboutUsPart1]: isSidebarOpened === true,
    [classes.aboutUsPart2]: isSidebarOpened === false,
  });
  let btnClasse2 = classnames({
    [classes.bottomSettingPart1]: isSidebarOpened === true,
    [classes.bottomSettingPart2]: isSidebarOpened === false,
  });
  let btnDivider = classnames({
    [classes.bottombtnDivider1]: isSidebarOpened === true,
    [classes.bottombtnDivider2]: isSidebarOpened === false,
  });
    if (type === "title")
    return (
      <div className={btnClass}>
      
      <ListItem
      button
      component={link && Link}
      to={link}
      className={classes.link}
      classes={{
        root: classnames(classes.linkRoot, {
          [classes.linkActive]: isLinkActive && !nested,
          [classes.linkNested]: nested,
        }),
      }}
      disableRipple
    >
      <ListItemIcon
        className={classnames(classes.linkIcon, {
          [classes.linkIconActive]: isLinkActive,
        })}
      >
        {nested ? <Dot color={isLinkActive && "#000"} /> : icon}
     

      </ListItemIcon>
      <ListItemText
        classes={{
          primary: classnames(classes.linkText, {
            [classes.linkTextActive]: isLinkActive,
            [classes.linkTextHidden]: !isSidebarOpened,
          }),
        }}
        primary={label}
      />
    </ListItem>
      </div>

      // <Typography
      //   className={classnames(classes.linkText, classes.sectionTitle, {
      //     [classes.linkTextHidden]: !isSidebarOpened,
      //   })}
      // >
      //   {label}
      // </Typography>
    );
    if (type === "title2")
    return (
      <div className={btnClasse2}>
      
      <ListItem
      button
      component={link && Link}
      to={link}
      className={classes.link}
      classes={{
        root: classnames(classes.linkRoot, {
          [classes.linkActive]: isLinkActive && !nested,
          [classes.linkNested]: nested,
        }),
      }}
      disableRipple
    >
      <ListItemIcon
        className={classnames(classes.linkIcon, {
          [classes.linkIconActive]: isLinkActive,
        })}
      >
        {nested ? <Dot color={isLinkActive && "#000"} /> : icon}
     

      </ListItemIcon>
      <ListItemText
        classes={{
          primary: classnames(classes.linkText, {
            [classes.linkTextActive]: isLinkActive,
            [classes.linkTextHidden]: !isSidebarOpened,
          }),
        }}
        primary={label}
      />
    </ListItem>
      </div>

      // <Typography
      //   className={classnames(classes.linkText, classes.sectionTitle, {
      //     [classes.linkTextHidden]: !isSidebarOpened,
      //   })}
      // >
      //   {label}
      // </Typography>
    );

    if (type === "divider") return <div className={btnDivider}></div>;

  if (link && link.includes('http')) {
    return (
      <ListItem
      
        button
        className={classes.link}
        classes={{
          root: classnames(classes.linkRoot, {
            [classes.linkActive]: isLinkActive && !nested,
            [classes.linkNested]: nested,
          }),
        }}
        disableRipple
      >
        <a className={classes.externalLink} href={link}>

        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {nested ? <Dot color={isLinkActive && "secondary"} /> : icon}
        </ListItemIcon>

        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened,
            }),
          }}
          primary={label}
        />
        </a>
      </ListItem>
    )
  }

  
  if (!children)
    return (
      <ListItem
        button
        component={link && Link}
        to={link}
        className={classes.link}
        
        classes={{
          root: classnames(classes.linkRoot, {
            [classes.linkActive]: isLinkActive && !nested,
            [classes.linkNested]: nested,
          }),
        }}
        disableRipple
      >
        <ListItemIcon

          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive,
          })}

        >
          {/* {nested ? <Dot color={isLinkActive && "#000"} /> : icon} */}
          {icon}


        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened,
            }),
          }}
          primary={label}
        />
      </ListItem>
    );

  return (
    <div >
      <ListItem
        button
        component={link && Link}
        onClick={toggleCollapse}
        className={classes.link}
        to={link}
        disableRipple
      >
        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {icon ? icon : <InboxIcon />}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened,
            }),
          }}
          primary={label}
        />
      </ListItem>
      {children && (
        <Collapse
          in={isOpen && isSidebarOpened}
          timeout="auto"
          unmountOnExit
          className={classes.nestedList}
        > 

          <List  component="div" disablePadding style={{borderRight:"2px solid rgb( 227 156 0)", transform:"translateX(-50px)",marginTop:"-8px"}} >

            {children.map(childrenLink => (
              <SidebarLink
                key={childrenLink && childrenLink.link}
                location={location}
                isSidebarOpened={isSidebarOpened}
                classes={classes}
                nested
                {...childrenLink}
              />
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );

  // ###########################################################

  function toggleCollapse(e) {
    if (isSidebarOpened) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  }
}
