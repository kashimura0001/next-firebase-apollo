import "../lib/firebase";
import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { signedInState } from "../store/state";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const setIsSignedIn = useSetRecoilState(signedInState);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      setLoading(false);
    });
  }, []);

  // TODO ロード画面を作る
  if (loading) return <div>...loading</div>;

  return <Component {...pageProps} />;
}

export default (props) => {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <MyApp {...props} />
      </ChakraProvider>
    </RecoilRoot>
  );
};
