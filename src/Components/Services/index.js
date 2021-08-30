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
        <>
            <section>
                <BoxedWidthContainer>
                    <Help />
                </BoxedWidthContainer>
            </section>
            <section>
                <BoxedWidthContainer>
                    <Task />
                    <Cards />
                    <Need />
                    <Health />
                </BoxedWidthContainer>
            </section>
            <section>
                <BoxedWidthContainer>
                    <Represent />
                </BoxedWidthContainer>
            </section>
            <section>
                <BoxedWidthContainer>
                    <Consultation />
                    <Blog />
                </BoxedWidthContainer>
            </section>
        </>
    );
}

export default Services;
