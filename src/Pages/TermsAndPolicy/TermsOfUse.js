import React from "react";
import { Route, Switch } from "react-router-dom";
import { About, TermsOfUse } from "../../Components/";

const TermsOfUsePage = (props) => {
    return (
        <>
            <Switch>
                <Route path={props.match.path} component={TermsOfUse} />
            </Switch>
        </>
    );
};

export default TermsOfUsePage;
