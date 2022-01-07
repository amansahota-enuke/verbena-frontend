import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../../Components";

const HomePage = (props) => {
  return (
    <>
      <Switch>
        <Route path={props.match.path} component={Home} />
      </Switch>
    </>
  );
};

export default HomePage;
