import React from "react";
import { BoxedWidthContainer, Consultation, Blog } from "..";
import AboutUsSection from "./AboutUsSection";
import Founders from "./Founders";
import Story from "./Story";
import Stand from "./Stand";

function About() {
    return (
        <>
            <section className="bg-white pt-40 pb-40">
                <BoxedWidthContainer>
                    <AboutUsSection />
                </BoxedWidthContainer>
            </section>
            <section className="light-green-bg-color pt-40 pb-40 overflow-hidden">
                <BoxedWidthContainer>
                    <Founders />
                    <Story />
                </BoxedWidthContainer>
            </section>
            <section className="bg-white pt-20 pb-60">
                <BoxedWidthContainer>
                    <Stand />
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

export default About;
