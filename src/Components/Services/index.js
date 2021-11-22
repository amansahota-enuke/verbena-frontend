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
            <section className="light-green-bg-color xl:pt-40 lg:pt-40 md:pt-20 sm:pt-20 pt-20 xl:pb-40 lg:pb-40 md:pb-20 sm:pb-20 pb-20 relative">
                <BoxedWidthContainer>
                    <Task />
                    <Cards />
                    <Need />
                    <Health />
                </BoxedWidthContainer>
            </section>
            <section className="bg-white pt-20 xl:pb-80 lg:pb-80 md:pb-40 sm:pb-20 pb-20">
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
