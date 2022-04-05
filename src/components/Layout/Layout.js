import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import { Box, IconButton, Link } from "@material-ui/core";
import Icon from "@mdi/react";

//icons
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from "@mdi/js";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";
import TestPage from "../../pages/test/testPage";
import IndustryList from "../../pages/IndustriesList/IndustryList";
import CategoryList from "../../pages/CategoriesList/CategoryList";
import FormOfFactors from "../Form/FormOfFactors";
import IndustryForm from "../Form/IndustryForm";
import TableofUser from "../../pages/candoProject/User/TableofUser";
import ProductList from "../../pages/ProductsList/ProductList";
import Product from "../../pages/ProductsList/Product";
import NewProduct from "../../pages/NewProduct.js/NewProduct";
import CategoryUpdateForm from "../Form/CategoryForm/CategoryUpdateForm";
import CategoryAddForm from "../Form/CategoryForm/CategoryAddForm";
import Bardia from "../Form/CategoryForm/Bardiaadd";
import CompanyUpdateList from "../Form/ApiaryList/ApiaryUpdateList";
import CompanyAddList from "../Form/ApiaryList/ApiaryAddList";
import ProductUpdateList from "../Form/ProductList/ProductUpdateList";
import ProductAddList from "../Form/ProductList/ProductAddList";
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
            <Route path="/app/login" component={Login} />
            <Route path="/app/login/step2" component={SmsVerification} />

            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/typography" component={Typography} />
            <Route path="/app/tables" component={Tables} />
            <Route path="/app/notifications" component={Notifications} />
            <Route
              exact
              path="/app/ui"
              render={() => <Redirect to="/app/ui/icons" />}
            />
            <Route path="/app/ui/maps" component={Maps} />
            <Route path="/app/ui/icons" component={Icons} />
            <Route path="/app/AboutUS" component={AboutUsMain} />
            <Route path="/app/ui/charts" component={Charts} />
            <Route path="/app/test" component={TestPage} />
            <Route path="/app/user" component={TableofUser} />
            {/* <Route path="/app/user" component={UserList} /> */}
            <Route path="/app/industryList/:id" component={IndustryForm} />
            <Route path="/app/industryList" component={IndustryList} />

            <Route
              path="/app/categoryList/:id"
              component={CategoryUpdateForm}
            />
            <Route path="/app/categoryAddList" component={CategoryAddForm} />
            <Route path="/app/categoryList" component={CategoryList} />

            <Route path="/app/CompanyList/:id" component={CompanyUpdateList} />

            <Route path="/app/Beehive/Hive/:id" component={HiveStatus} />
            {/* <Route path="/app/Beehive/Hive/:id/:id" component={Audio} /> */}

            <Route path="/app/Beehive/:id" component={Hive} />
            <Route path="/app/ApiaryList" component={ApiaryList} />
            <Route path="/app/Support/:id" component={SupportPage} />
            <Route path="/app/SupportMessage" component={SupportMessage} />
            <Route
              path="/app/FrequentlyQuestions"
              component={FrequentlyQuestions}
            />
            <Route path="/app/Support" component={Support} />

            <Route path="/app/products/newproduct" component={NewProduct} />

            <Route path="/app/products/:id" component={ProductUpdateList} />
            <Route path="/app/ProductAddList" component={ProductAddList} />
            <Route path="/app/products" component={ProductList} />
            <Route path="/app/setting" component={Edituser} />

          </Switch>
          <Box
            mt={5}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <div>
              <Link
                href={"https://www.facebook.com/flatlogic"}
                target={"_blank"}
              >
                <IconButton aria-label="facebook">
                  <Icon path={FacebookIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
              <Link href={"https://twitter.com/flatlogic"} target={"_blank"}>
                <IconButton aria-label="twitter">
                  <Icon path={TwitterIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
              <Link href={"https://github.com/flatlogic"} target={"_blank"}>
                <IconButton aria-label="github" style={{ marginRight: -12 }}>
                  <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
            </div>
          </Box>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
