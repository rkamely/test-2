import React, { useContext, useEffect } from "react";
import { HashRouter, Route, Switch, Redirect, Router } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context
import { useUserState } from "../context/UserContext";
import SmsVerification from "../pages/login/SmsVerification";
import CompleteInformation from "../pages/login/CompleteInformation";
import { useAppApolloClient } from "./config/apolloClient";
import { ApolloProvider } from "@apollo/client";
import AuthContext from "../pages/context/AuthProvider";
import axios from "../pages/api/axios";
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();
export default function App() {
  // global
  const { isAuthenticated } = useUserState();
  console.log("isAuthenticated", isAuthenticated);
  const { auth, setAuth } = useContext(AuthContext);

  const apolloClient = useAppApolloClient();

  console.log("new use ro bede bezanim berim!!!",auth);
  console.log("new use ro bede bezanim berim!!!", auth.newUser);

    



  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute
            path="/login/CompleteInformation"
            component={CompleteInformation}
          />
        <PublicRoute
          path="/login/smsVerification"
          component={SmsVerification}
        />
        <Route path="/login/" component={Login} />

        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
