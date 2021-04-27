import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import LoginMenu from "./components/LoginMenu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import useToken from "./utils/useToken";
import ImageBox from "./components/ImageBox";
import UploadBox from "./components/UploadBox";

const Footer = () => {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://ilari.xyz">
          Etkot Software
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

const App = () => {
  const { token, setToken } = useToken();
  const elements = ["one", "two", "three"];

  // if (!token) {
  //   return <LoginMenu setToken={setToken} />;
  // }

  return (
    <div className="App">
      <h1>Router</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginMenu />
          </Route>

          <Route path="/preferences">
            <UploadBox></UploadBox>
            <ImageBox />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
};

export default App;
