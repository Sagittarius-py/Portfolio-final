import React from "react";
import { Route, Switch } from "react-router";
import Header from "./header/header";
import Welcome from "./section1/welcome";
import Contact from "./contact/cotact";
import Projects from "./projec/projects";

const Page = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/welcome" exact component={Welcome} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
    </React.Fragment>
  );
};

export default Page;
