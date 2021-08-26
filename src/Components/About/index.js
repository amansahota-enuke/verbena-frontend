import React from "react";
import { BoxedWidthContainer, Consultation, Blog } from "..";
import AboutUsSection from "./AboutUsSection";
import Founders from "./Founders";
import Story from "./Story";
import Stand from "./Stand";

function About() {
    return (
        <BoxedWidthContainer>
            <AboutUsSection />
            <Founders />
            <Story />
            <Stand />
            <Consultation />
            <Blog />
        </BoxedWidthContainer>
    );
}

export default About;
