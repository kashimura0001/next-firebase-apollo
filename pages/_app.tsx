import "../styles/globals.css";
import React from "react";
import { apolloClient } from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../providers/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <RecoilRoot>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </RecoilRoot>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default MyApp;
