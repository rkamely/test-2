import React, { useContext } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";

// context
import { useLayoutState } from "../../context/LayoutContext";

// pages
import TableofUser from "../../pages/candoProject/User/TableofUser";
import Hive from "../../pages/candoProject/Hive/Hive";
import ApiaryList from "../../pages/candoProject/ApiaryList/ApiaryList";
import HiveStatus from "../../pages/candoProject/HiveStatus/HiveStatus";
import Audio from "../../pages/candoProject/HiveStatus/Audio";
import Support from "../../pages/candoProject/Support/Support";
import SupportPage from "../../pages/candoProject/Support/ChatPage/ChatPage";
import SupportMessage from "../../pages/candoProject/Support/SupportMessage/SupportMessage";
import Login from "../../pages/login/Login";
import LoginWithPhone from "../../pages/candoProject/Login/Login";
import FrequentlyQuestions from "../../pages/candoProject/Support/FrequentlyQuestions/FrequentlyQuestions";
import SmsVerification from "../../pages/login/SmsVerification";
import Edituser from "../Form/Setting/Edituser";
import AboutUsMain from "../../pages/candoProject/AboutUsMain/AboutUsMain";
import CalenderProject from "../../pages/candoProject/CalenderProject/CalenderProject";
import JobCalender from "../../pages/candoProject/CalenderProject/JobCalender/JobCalender";
import main from "../../pages/candoProject/CalenderProject/main";
import AuthContext from "../../pages/context/AuthProvider";
import discoverPage from "../../pages/candoProject/discoverPage/discoverPage";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import tutorialPage from "../../pages/candoProject/tutorialPage/tutorialPage";
import QRChatPage from "../../pages/candoProject/Support/ChatPage/QRChatPage";

function Layout(props) {
  var classes = useStyles();
  // global
  var layoutState = useLayoutState();
  const {  auth  } = useContext(AuthContext)
  console.log("auth ro see kon to layout",auth);

  return (
    <div className={classes.root} >
      <>
        <div className={classes.headerSidebar}>
          <Header history={props.history} />
          <Sidebar />
        </div>
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            {/* <Route path="onent={Login} /> */}

            <Route path="/app/dashboard" component={Dashboard} />
            <Route
              path="/app/ApiaryList/Beehive/Hive/:id"
              component={HiveStatus}
            />
            {/* <Route path="/app/Beehive/Hive/:id/:id" component={Audio} /> */}

            <Route path="/app/ApiaryList/Beehive/:id" component={Hive} />
            <Route path="/app/ApiaryList/" component={ApiaryList} />
            <Route path="/app/ApiaryList/:id" component={ApiaryList} />

            <Route path="/app/typography" component={Typography} />
            <Route path="/app/user" component={TableofUser} />
            <Route path="/app/JobCalender" component={main} />

            <Route
              exact
              path="/app/ui"
              render={() => <Redirect to="/app/ui/icons" />}
            />

            <Route path="/app/AboutUS" component={AboutUsMain} />
            <Route path="/app/user" component={TableofUser} />

            <Route path="/app/Support/QrCode/:id" component={QRChatPage} />
            <Route path="/app/Support/:id" component={SupportPage} />
            <Route path="/app/SupportMessage" component={SupportMessage} />
            <Route
              path="/app/FrequentlyQuestions"
              component={FrequentlyQuestions}
            />
            <Route path="/app/Support" component={Support} />
            <Route path="/app/setting" component={Edituser} />
            <Route path="/app/new" component={discoverPage} />
            <Route path="/app/Education" component={tutorialPage} />
            
            <Route path="/app/Error" component={ErrorBoundary} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
