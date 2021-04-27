import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ForgotPassword from "../components/login/ForgotPassword";
import SignIn from "../components/login/SignIn";
import SignUp from "../components/login/SignUp";

const Login = () => {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}`} exact>
          <SignIn />
        </Route>
        <Route path={`${match.path}/redefinir`}>
          <ForgotPassword />
        </Route>
        <Route path={`${match.path}/cadastrar`}>
          <SignUp />
        </Route>
      </Switch>
    </>
  );
};

export default Login;
