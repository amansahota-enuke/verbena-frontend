import React from "react";
import { Route, Switch } from "react-router-dom";
import { FAQ } from "../../Components";

const FAQPage = (props) => {
  return (
    <>
      <Switch>
        <Route path={props.match.path} component={FAQ} />
      </Switch>
    </>
  );
};

export default FAQPage;
