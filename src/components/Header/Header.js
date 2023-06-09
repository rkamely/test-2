import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Fab,
  Link,
  Avatar,
  Dialog,
  Grid,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
  KeyboardArrowDown,
} from "@material-ui/icons";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import { Badge, Typography, Button } from "../Wrappers";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import { useUserDispatch, signOut } from "../../context/UserContext";
import { useHistory } from "react-router-dom";

const messages = [
  {
    id: 0,
    variant: "warning",
    name: "Jane Hew",
    message: "Hey! How is it going?",
    time: "9:32",
  },
  {
    id: 1,
    variant: "success",
    name: "Lloyd Brown",
    message: "Check out my new Dashboard",
    time: "9:18",
  },
  {
    id: 2,
    variant: "primary",
    name: "Mark Winstein",
    message: "I want rearrange the appointment",
    time: "9:15",
  },
  {
    id: 3,
    variant: "secondary",
    name: "Liana Dutti",
    message: "Good news from sale department",
    time: "9:09",
  },
];

const notifications = [
  { id: 0, color: "warning", message: "Check out this awesome ticket" },
  {
    id: 1,
    color: "success",
    type: "info",
    message: "What is the best way to get ...",
  },
  {
    id: 2,
    color: "secondary",
    type: "notification",
    message: "This is just a simple notification",
  },
  {
    id: 3,
    color: "primary",
    type: "e-commerce",
    message: "12 new orders has arrived today",
  },
];

export default function Header(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  var userDispatch = useUserDispatch();

  // local

  const [profileMenu, setProfileMenu] = useState(null);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const history = useHistory();
  const firstName = localStorage.getItem("profileName");

  const email = localStorage.getItem("email");
  const lastname = localStorage.getItem("lastname");



  if (firstName == undefined) {

    localStorage.clear("id_token");

    userDispatch({ type: "SIGN_OUT_SUCCESS" });

    history.push("/login");
  }

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse,
          )}
        >
          {layoutState.isSidebarOpened ? (
            <ArrowBackIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          )}
        </IconButton>
        <Typography variant="h6" weight="medium" className={classes.logotype}>
          پنل کاربری
        </Typography>
        <div className={classes.grow} />
        <div
          className={classNames(classes.search, {
            [classes.searchFocused]: isSearchOpen,
          })}
        >
          <div
            className={classNames(classes.searchIcon, {
              [classes.searchIconOpened]: isSearchOpen,
            })}
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            {/* <SearchIcon classes={{ root: classes.headerIcon }} /> */}
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>

        {/* <div className={classes.HeaderBarcode}>
        <img src="/assets/qr-code.svg" width="20%"/>  اسکن بارکد</div> */}

        <div className={classes.HeaderLeft}>
          <div className={classes.HeaderLogo}>
            <Avatar
              style={{ cursor: "pointer" }}
              alt="Remy Sharp"
              src="/assets/HeaderProfile.svg"
              aria-haspopup="true"
              color="inherit"
              className={classes.headerMenuButton}
              aria-controls="profile-menu"
              onClick={(e) => setProfileMenu(e.currentTarget)}
            >
              <AccountIcon
                style={{ cursor: "pointer" }}
                classes={{ root: classes.headerIcon }}
              />
            </Avatar>
            <KeyboardArrowDown
              onClick={(e) => setProfileMenu(e.currentTarget)}
            />
          </div>
          <Typography variant="p" weight="medium" className={classes.logotype}>
            {`سلام ${firstName}!`}
          </Typography>
        </div>

        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h6" weight="medium">
              پنل کاربری
            </Typography>
          </div>
          <div className={classes.profileMenuUser}>
            <Typography variant="p" weight="medium">
              نام: {firstName} {lastname}
            </Typography>
          </div>
          <div className={classes.profileMenuUser}>
            <Typography variant="p" weight="medium">
              ایمیل: {email}
            </Typography>
          </div>
          {/* <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Profile
          </MenuItem> */}

          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              color="secondary"
              onClick={handleClickOpen()}
              // onClick={() => signOut(userDispatch, props.history)}
            >
              خروج از حساب
            </Typography>
          </div>
        </Menu>
      </Toolbar>

      <Dialog
        PaperProps={{
          style: { borderRadius: 12, width: "24%", overflowY: "hidden" },
        }}
        open={open}
        onClose={handleClose}
        // scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="xl"
        style={{ background: "rgba(0,0,0,0.6)" }}
      >
        <div
          style={{
            padding: "48px 16px",
            textAlign: "center",
            fontFamily: "Shabnam",
          }}
        >
          <div style={{ fontWeight: "600" }}>
            آیا میخواهید از حساب کاربری خود خارج شوید؟
          </div>
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => signOut(userDispatch, props.history)}
              className={classes.addButton}
            >
              بله
            </Button>
            <Button onClick={handleClose} className={classes.cancelButton}>
              خیر
            </Button>
          </div>
        </div>
      </Dialog>
    </AppBar>
  );
}
