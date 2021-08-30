import React from "react";
import { BoxedWidthContainer, Consultation, Blog } from "..";
import Cards from "./Cards";
import Health from "./Health";
import Help from "./Help";
import Need from "./Need";
import Represent from "./Represent";
import Task from "./Task";

function Services() {
    return (
        <BoxedWidthContainer>
            <Help />
            <Task />
            <Cards />
            <Need />
            <Health />
            <Represent />
            <Consultation />
            <Blog />
        </BoxedWidthContainer>
    );
}

export default Services;
