import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { parseCookies } from "nookies";

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
  const cookies = parseCookies();
  const token = cookies.token;

  console.log(token);

  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
  link: concat(authMiddleware, httpLink),
});
