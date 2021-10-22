import { FC } from "react";
import { Redirect, Route, RouteProps, useLocation } from "react-router";
import { useAppSelector } from "../hooks/hooks";
import { currentUserSelector } from "../store/features/auth/authSelectors";

const ProtectedRoute: FC<RouteProps> = (props) => {
  const currentUser = useAppSelector(currentUserSelector);
  const location = useLocation<any>();
  const { path } = props;

  if (
    path === "/login" ||
    path === "/register" ||
    path === "/forgot-password" ||
    path === "/reset-password"
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? "/account"} />
    ) : (
      <Route {...props} />
    );
  }

  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: path },
      }}
    />
  );
};

export default ProtectedRoute;
