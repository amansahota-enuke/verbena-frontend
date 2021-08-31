import React from "react";

function Feedback() {
    return (
        <div className="our-patient-wrapper text-center mt-40 xl:mb-80 lg:mb-80 md:mb-20 sm:mb-20 mb-20">
            <div className="patient-wrapper-title">
                <h4 className="uppercase font-18 mb-6 primary-text-color">
                    What Our Patients Say
                </h4>
            </div>

            <div className="testimonial-carousel">
                <div className="item text-center">
                    <p className="content font-44 hepta-semibold text-gray-dim lh-40">
                        Verbena is an easy and affordable <br />
                        way to connect with my doctor <br />
                        from the convenience of my home.
                    </p>
                    <div className="flex justify-center items-center mt-8">
                        <div>
                            <div className="user-img mr-4"></div>
                        </div>
                        <div className="user-name text-left">
                            <h3 className="hpta-semibold font-24 primary-text-color">
                                Michelle
                            </h3>
                            <p className="text-gray-dim font-18 mont-font mont-regular">
                                Verbena Patient
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
