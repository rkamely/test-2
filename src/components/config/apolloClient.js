// import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
// import { HttpLink } from "apollo-link-http";
import { useAuthToken } from "./auth";

const httpLink = new HttpLink({uri: 'http://188.121.121.225/backend/graphql/'});

const authMiddleware = (authToken) =>
  new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `jwt ${authToken}`,
        },
      });
    }

    return forward(operation);
  });

const cache = new InMemoryCache();

export const useAppApolloClient = () => {
  const [authToken] = useAuthToken();
  return new ApolloClient({
    link: authMiddleware(authToken).concat(httpLink),
    cache,
  });
};
