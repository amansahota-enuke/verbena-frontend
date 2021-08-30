import React from "react";
import { Link } from "react-router-dom";

function Need() {
    return (
        <div className="woman-stage-wrapper xl:mt-64 lg:mt-64 md:mt-20 sm:mt-10 mt-10 mb-32">
            <div className="woman-need-flex">
                <div className="woman-need-content">
                    <h3 className="mb-10 font-20 text-gray-dim uppercase question-title-color">
                        what we offer
                    </h3>
                    <h2 className="font-56 text-gray-dim mb-5 hepta-semibold leading-tight">
                        For a Woman’s Needs at <br /> Every Stage
                    </h2>
                    <p className="mont-font mont-regular font-20 text-gray-dim mxw-530 mb-20">
                        Created with her care in mind, Verbena celebrates the
                        unique health needs throughout her lifetime.
                    </p>
                    <Link
                        className="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3"
                        to="/about"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Need;
