import React from "react";
import { BoxedWidthContainer, Consultation, Blog } from "..";
import AboutUsSection from "./AboutUsSection";
import Founders from "./Founders";
import Story from "./Story";
import Stand from "./Stand";

function About() {
    return (
        <>
            <section>
                <BoxedWidthContainer>
                    <AboutUsSection />
                </BoxedWidthContainer>
            </section>
            <section>
                <BoxedWidthContainer>
                    <Founders />
                    <Story />
                </BoxedWidthContainer>
            </section>
            <section>
                <BoxedWidthContainer>
                    <Stand />
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

export default About;
