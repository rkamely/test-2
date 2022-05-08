import React from "react";
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
import SupportPage from "../../pages/candoProject/Support/SupportPage/SupportPage";
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
function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
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
            <Route path="/app/ApiaryList" component={ApiaryList} />

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
            <Route path="/app/Support/:id" component={SupportPage} />
            <Route path="/app/SupportMessage" component={SupportMessage} />
            <Route
              path="/app/FrequentlyQuestions"
              component={FrequentlyQuestions}
            />
            <Route path="/app/Support" component={Support} />
            <Route path="/app/setting" component={Edituser} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
