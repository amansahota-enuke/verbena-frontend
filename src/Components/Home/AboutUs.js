import React from "react";

function AboutUs() {
    return (
        <div className="about-us-wrapper mt-40">
            <div className="about-wrapper-title mb-20 text-center">
                <h2 className="hepta-semibold text-gray-dim font-56 mb-10">
                    About Us
                </h2>
                <p className="mont-font mont-regular font-20 text-gray-dim">
                    We started Verbena because we wanted to transform the way
                    women engage <br /> and interact with their personal
                    physician in a safe, accessible and convenient way.
                </p>
            </div>

            {/* Mission Vision wrapper */}

            <div className="flex flex-wrap justify-between">
                <div className="mission mv-box">
                    <div className="mission-img mv-img overflow-hidden rounded-md shadow"></div>
                    <div className="mv-content relative px-10 py-6 bg-white overflow-hidden rounded-lg shadow-lg">
                        <h5 className="uppercase question-title-color mb-4 hepta-semibold">
                            Our Mission
                        </h5>
                        <p className="text-gray-dim font-27">
                            Empower women to take <br /> charge of their
                            healthcare in a <br /> safe, private, and convenient
                            way.
                        </p>
                    </div>
                </div>
                <div className="vision mv-box">
                    <div className="vision-img mv-img overflow-hidden rounded-md shadow"></div>
                    <div className="mv-content relative px-10 py-6 bg-white overflow-hidden rounded-lg shadow-lg">
                        <h5 className="uppercase question-title-color mb-4 hepta-semibold">
                            Our Vision
                        </h5>
                        <p className="text-gray-dim font-27">
                            To provide a superior <br />
                            women’s telehealth <br />
                            platform that elevates <br />
                            and enhances the overall patient-
                            <br />
                            provider experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
