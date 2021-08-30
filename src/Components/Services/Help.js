import React from "react";

function Help() {
    return (
        <div className="health-care-explore relative mt-40 mb-64">
            <span className="absolute right-0 top-0"><img src="/images/service-home-bg.png" alt="" title=""/></span>
            <div className="flex justify-start">
                <div className="health-explore-content">
                    <h3 className="font-72 hepta-semibold mb-5 question-title-color leading-tight">
                        How Can <br />
                        We Help You?
                    </h3>
                    <p className="mont-font mont-regular font-20 mb-5">
                        We offer a range of services to best address your
                        <br /> healthcare needs.
                    </p>
                    <button
                        type="submit"
                        className="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Help;
