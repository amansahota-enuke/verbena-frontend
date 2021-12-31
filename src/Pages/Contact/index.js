import React from "react";
import { Route, Switch } from "react-router-dom";
import { Contact } from "../../Components";

const ContactPage = (props) => {
    return (
        <>
            <Switch>
                <Route path={props.match.path} component={Contact} />
            </Switch>
        </>
    );
};

export default ContactPage;
