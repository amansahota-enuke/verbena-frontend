import React from "react";
import { BoxedWidthContainer, Consultation, Blog } from "..";
import AboutUs from "./AboutUs";
import Feedback from "./Feedback";
import Healthcare from "./Healthcare";
import Intro from "./Intro";
import Values from "./Values";

function Home() {
    return (
        <>
            <section>
                <BoxedWidthContainer>
                    <Intro />
                </BoxedWidthContainer>
            </section>
            <section>
                <BoxedWidthContainer>
                    <Values />
                    <Feedback />
                    <Healthcare />
                </BoxedWidthContainer>
            </section>
            <section>
                <BoxedWidthContainer>
                    <AboutUs />
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

export default Home;
