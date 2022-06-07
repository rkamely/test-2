import React, { useState, useEffect } from "react";
import { Divider, Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  Menu as MenuIcon,
  LocationCity,
  TableChart,
  Accessibility,
  ArrowForwardRounded,

} from "@material-ui/icons";




import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import CalenderProject from "../../pages/candoProject/CalenderProject/CalenderProject";

const structure = [
  { id: 0, label: "خانه" , link:"/app/dashboard", icon:<img src="/assets/house.png"/>},

  // { id: -4, label: "زنبورستان", link: "/app/user", icon:<img src="/assets/hive-svgrepo-com (1).svg"/> },
  { id: -4, label: "زنبورستان", link: "/app/ApiaryList", icon:<img src="/assets/hive-svgrepo-com (1).svg"/> },

  { id: -3, label: "پشتیبانی", link: "/app/Support", icon:<img src="/assets/customer-support-symbol-svgrepo-com-1.svg"/>, 
  children: [
    { label: "پیام های من", link: "/app/Support",color:"secondary" },
    { label: "پیام های پشتیبانی", link: "/app/SupportMessage" },
    { label: "سوالات متداول", link: "/app/FrequentlyQuestions"  },
  ],
},
  {
    id: -2,
    label: "تازه ها",
    link: "/app/new",
    icon:<img src="/assets/megaphone-svgrepo-com.svg"/>,
  },
  {
    id: -1,
    label: "آموزش",
    link: "/app/Education",
    icon:<img src="/assets/mortarboard-education-svgrepo-com-1.svg"/>,
  },
  // { id: -5, label: "محصولات", link: "/app/products", icon:<img src="/assets/mortarboard-education-svgrepo-com-1.svg"/>},
  // {
  //   id: 1,
  //   label: "کاربران",
  //   link: "/app/user",
  //   icon:<img src="/assets/usersSidebar.svg"/>,
  // },
  // {
  //   id: 3,
  //   label: "تقویم کاری",
  //   link: "/app/JobCalender",
  //   icon: <NotificationsIcon />,
  // },

  {
    id: 3,
    label: "تقویم کاری",
    link: "/app/JobCalender",
    icon: <NotificationsIcon />,
  },

  { id: 10, type: "divider"  ,backgroundColor:"#fff"},

  {
    id: 5,
    label: "درباره ما",
    link:"/app/AboutUs",
    icon: <Dot size="small" color="secondary" />,
  },
  {
    id: 6,
    label: "تنظیمات",
    link: "/app/setting",
    icon: <Dot size="small" color="secondary" />,
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();
  var layoutState = useLayoutState();
  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
const [icon,setIcon]=useState(true)
  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });
const changeIcon=()=>{
  setIcon(!icon)
}
  return (
    <Drawer 
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div  />


      <List className={classes.sidebarList}>
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}> 
          {icon?<ArrowForwardRounded 
          onClick={changeIcon}
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />:<ArrowBackIcon   onClick={changeIcon} classes={{
            root: classNames(classes.headerIcon, classes.headerIconCollapse),
          }}/>}
        </IconButton>
      </div>





       {icon?<div className={classes.candoTopSidebar}> 
          <div className={classes.candoLogo}>
            <img src="/assets/Component 24 – 53.svg" alt="عکس زنبور" width="50px"/>
          </div>
          <div>
            <h1 className={classes.candoTopSidebarTitle}>کندوان پلاس</h1>
            <h2>مدیریت هوشمند زنبورستان</h2>
          </div>
        </div>:null} 
        <Divider style={
          {backgroundColor:"#fff"}
        }/>,




        {structure.map((link) => (
           
          <SidebarLink
          
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}

      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
