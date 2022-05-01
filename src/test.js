export const URI = '';
var userId = ""
const cache = new InMemoryCache();
const refreshLink = new TokenRefreshLink({
  accessTokenField: 'newToken',
  isTokenValidOrUndefined: () => {
  if (!userId) {
      return true;
  }
  if (cook_auth_token && cook_auth_token !== "null" &&      jwt.decode(cook_auth_token).exp * 1000 > Date.now()) {
   return true;
 }
},
fetchAccessToken: async () => {
  if (!userId) {
    return null;
  }
const response = await fetch(`http://localhost:8009/graphql`, {
method: 'POST',
headers: {
'content-type': 'application/json',
'Authorization': cook_auth_token,
'refresh_token': cook_refresh_token
},
body: JSON.stringify({
query: `mutation {
refreshUserToken(userId: "${userId}") {
user_id
token
msg
status
}
}`,
}),
});
const json = await response.json();
return json;
},
handleFetch: (newToken) => {
console.log("newToken", newToken)
},
handleResponse: (operation, accessTokenField) => (response) => {
if (!response) return { newToken: null };
return { newToken: response.data.refreshUserToken.token };
},
handleError: (error) => {
   console.error('Cannot refresh access token:', error);
},
});
const httpLink = createHttpLink({
    uri: `${URI}/graphql`,
    fetch,
});
const authLink = setContext((_, { headers }) =>({
     headers: { ...headers }
}));
export const client = new ApolloClient({
    link: authLink.concat(refreshLink).concat(httpLink),
    cache
});