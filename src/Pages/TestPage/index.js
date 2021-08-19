import React from "react";
import { Route, Switch } from "react-router-dom";
import { Test } from "../../Components";

const TestPage = (props) => {
    return (
        <>
            <Switch>
                <Route path={props.match.path} component={Test} />
            </Switch>
        </>
    );
};

export default TestPage;
