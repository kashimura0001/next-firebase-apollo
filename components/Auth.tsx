import Router from "next/router";
import { Route } from "../config/routes";
import { useAuth } from "../hooks/useAuth";

export const Auth = ({ children }) => {
  // TODO オンボーディングが完了しているか確認する処理を入れる
  const { loading, user } = useAuth();

  // TODO: ローディングページを追加する
  if (loading) return <div>...loading</div>;

  if (!user && typeof window !== "undefined") {
    Router.push(Route.SIGN_IN);
    return null;
  }

  return children;
};
