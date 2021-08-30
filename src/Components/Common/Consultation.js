import React from "react";

function Consultation() {
    return (
        <div className="box-white bg-white rounded-2xl shadow-md mt-40 overflow-hidden mb-24">
            <div className="get-consult grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
                <div className="p-10 get-consult-form">
                    <img src="/images/get-consult-logo.png" alt="" title="" />
                    <h3 className="mont-font mont-extra-light font-40 mb-2 light-gray-dim mt-4">
                        Get a Consultation
                    </h3>
                    <p className="mont-font mont-regular font-20 mb-10 light-gray-dim">
                        Fill in your information to take the first step in
                        joining the Verbena platform.
                    </p>
                    <div className="form-input">
                        <div className="flex mb-4">
                            <input
                                type="text"
                                className="custom-input input-border-color border"
                                placeholder="Your Name"
                                name="name"
                            />
                        </div>
                        <div className="flex mb-8">
                            <input
                                type="text"
                                className="custom-input input-border-color border"
                                placeholder="Your Email"
                                name="email"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3"
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div>
                    <div className="drop-message-box p-10 drop-msg-bg">
                        <h5 className="uppercase hepta-semibold question-title-color mb-10 mt-16">
                            have a question? Let us know.
                        </h5>
                        <div className="flex mb-10">
                            <div className="mr-4">
                                <span className="msg-ico"></span>
                            </div>
                            <div>
                                <h4 className="mont-font font-20 mont-bold">
                                    info@verbenacare.com
                                </h4>
                                <p className="mb-0 mont-font mont-regular font-20 light-gray-dim">
                                    Drop us a message with any questions or
                                    concerns about the platform.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="newsletter-bg newletter-wrapper p-10">
                        <h3 className="hepta-semibold font-40 mb-5 text-white">
                            Newsletter
                        </h3>
                        <div className="newsletter-form mb-10">
                            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                                <div>
                                    <input
                                        type="text"
                                        className="custom-input input-border-color border"
                                        placeholder="Your Email"
                                        name="email"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consultation;
