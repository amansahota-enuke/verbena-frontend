import React from "react";

function Intro() {
    return (
        <div className="health-care-explore relative mt-40">
            <span className="absolute right-0 top-0"><img src="/images/explore-bg.png" alt="" title=""/></span>
            <div className="flex justify-start">
                <div className="health-explore-content">
                    <h3 className="font-72 hepta-semibold mb-5 question-title-color leading-tight">
                        Your Doctor. <br />
                        Your Care. <br />
                        Your Time.
                    </h3>
                    <p className="mont-font mont-regular font-20 mb-5">
                        We are a comprehensive women’s health platform offering
                        digital care and telemedicine services to patients,
                        together with their personal doctor—anywhere, anytime.
                    </p>
                    <button
                        type="submit"
                        className="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3"
                    >
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Intro;
