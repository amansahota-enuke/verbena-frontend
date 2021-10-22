import React from "react";
import { Link } from "react-router-dom";

function Need() {
    return (
        <div className="woman-stage-wrapper xl:mt-64 lg:mt-64 md:mt-20 sm:mt-10 mt-10 mb-32">
            <div className="woman-need-flex">
                <div className="woman-need-content">
                    <h3 className="mb-10 font-20  uppercase hepta-semibold question-title-color">
                        what we offer
                    </h3>
                    <h2 className="font-56 question-title-color mb-10 hepta-semibold leading-none">
                        For a Woman’s Needs at Every Stage
                    </h2>
                    <p className="mont-font mont-regular font-20 text-gray-dim mxw-530 mb-10">
                        Created with her care in mind, Verbena celebrates the
                        unique health needs throughout her lifetime.
                    </p>
                    <Link 
                    to="/about">
                    <button
                        type="submit"
                        className="btn-login calibre-regular font-16 uppercase primary-bg-color text-white mr-3 tracking-widest"
                    >
                        Read More
                    </button>
                    </Link>
                    
                </div>
                <div className="women-need-img xl:absolute lg:relative md:relative sm:relative relative right-0 top-25">
                    <img src="/images/women-need-stage-img.png" alt="" title=""/>
                </div>
            </div>
        </div>
    );
}

export default Need;
