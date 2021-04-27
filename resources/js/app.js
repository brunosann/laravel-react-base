import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ForgotPassword from "./components/login/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/sobre">
            <About />
          </Route>
          <Route path="/usuario">
            <Login />
          </Route>
          <Route path="/*">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
