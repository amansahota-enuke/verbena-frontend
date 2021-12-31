import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivacyPolicy } from "../../Components/";

const PrivacyPolicyPage = (props) => {
    return (
        <>
            <Switch>
                <Route path={props.match.path} component={PrivacyPolicy} />
            </Switch>
        </>
    );
};

export default PrivacyPolicyPage;
