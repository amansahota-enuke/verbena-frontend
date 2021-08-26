import React from "react";
import { Route, Switch } from "react-router-dom";
import { Services } from "../../Components";

const ServicesPage = (props) => {
    return (
        <>
            <Switch>
                <Route path={props.match.path} component={Services} />
            </Switch>
        </>
    );
};

export default ServicesPage;
