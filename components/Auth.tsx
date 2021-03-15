import Router from "next/router";
import { Route } from "../config/routes";
import { useRecoilState } from "recoil";
import { signedInState } from "../store/state";

export const Auth = ({ children }) => {
  // TODO オンボーディングが完了しているか確認する処理を入れる
  const [isSignedIn] = useRecoilState(signedInState);

  if (!isSignedIn && typeof window !== "undefined") {
    Router.push(Route.SIGN_IN);
    return null;
  }

  return children;
};
