import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "../../Components";

const AboutPage = (props) => {
    return (
        <>
            <Switch>
                <Route path={props.match.path} component={About} />
            </Switch>
        </>
    );
};

export default AboutPage;
