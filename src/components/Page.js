import React from "react";
import { Route, Switch } from "react-router";
import Header from "./header/header";
import Welcome from "./section1/welcome";
import Contact from "./contact/cotact";

const Page = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/welcome" exact component={Welcome} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </React.Fragment>
  );
};

export default Page;
