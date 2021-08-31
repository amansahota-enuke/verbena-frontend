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
            <section className="bg-white pt-40 pb-300">
                <BoxedWidthContainer>
                    <Help />
                </BoxedWidthContainer>
            </section>
            <section className="light-green-bg-color pt-40 pb-40 relative">
                <BoxedWidthContainer>
                    <Task />
                    <Cards />
                    <Need />
                    <Health />
                </BoxedWidthContainer>
            </section>
            <section className="bg-white pt-20 pb-80">
                <BoxedWidthContainer>
                    <Represent />
                </BoxedWidthContainer>
            </section>
            <section className="dark-green-bg-color pt-40 pb-40">
                <BoxedWidthContainer>
                    <Consultation />
                    <Blog />
                </BoxedWidthContainer>
            </section>
        </>
    );
}

export default Services;
