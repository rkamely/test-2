import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import "./fonts/Iran-Sans.ttf";
import Themes from "./themes";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";


import { create } from 'jss';
import rtl from 'jss-rtl';
import {
  StylesProvider,
  jssPreset
} from "@material-ui/core/styles";





import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  ApolloLink,
  HttpLink
} from "@apollo/client";
// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});


// const client = new ApolloClient({
//   uri: 'http://188.121.121.225/backend/graphql/',
//   // headers:
//   cache: new InMemoryCache()
// });

const authLink = new ApolloLink((operation, forward) => {
  if (isLoggedIn()) {
    operation.setContext({
      headers: {
        'authorization': 'jwt ' + getAccessToken()
      }
    });
  }
  return forward(operation);
});



const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    new HttpLink({uri: 'http://188.121.121.225/backend/graphql/'})
  ]),
  cache: new InMemoryCache()
});


// https://graphqlzero.almansi.me/api
ReactDOM.render(
  <ApolloProvider client={client}>
  <LayoutProvider>
    <UserProvider>
      <ThemeProvider theme={Themes.default}  >
       <StylesProvider jss={jss}> 
       <CssBaseline />
        <App />
        </StylesProvider>
      </ThemeProvider>
    </UserProvider>
  </LayoutProvider>
  </ApolloProvider>,

  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
