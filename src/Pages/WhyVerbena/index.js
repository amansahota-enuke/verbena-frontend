import React from "react";
import { Route, Switch } from "react-router-dom";
import { WhyVerbena } from "../../Components";

const WhyVerbenaPage = (props) => {
    return (
        <>
            <Switch>
                <Route path={props.match.path} component={WhyVerbena} />
            </Switch>
        </>
    );
};

export default WhyVerbenaPage;
