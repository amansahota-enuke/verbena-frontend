import React from "react";

function Consultation() {
    return (
        <div data-aos="flip-right" data-aos-duration="2000" className="get-consult box-white bg-white rounded-2xl shadow-md mt-40 overflow-hidden mb-24">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
                <div className="p-10 get-consult-form">
                    <img src="/images/get-consult-logo.png" alt="" title="" />
                    <h3 className="mont-font mont-extra-light font-40 mb-2 light-gray-dim mt-4">
                     Find a Physician
                    </h3>
                    <p className="mont-font mont-regular font-18 mb-10 light-gray-dim">
                     Enter your state for a list of participating Verbena providers.
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
                            className="btn-login calibre-regular font-16 uppercase primary-bg-color text-white mr-3"
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
                        <div className="flex mb-10 xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap flex-wrap">
                            <div className="mr-4">
                                <span className="msg-ico"></span>
                            </div>
                            <div>
                                <h4 className="mont-font font-20 mont-bold">
                                    info@verbenacare.com
                                </h4>
                                <p className="mb-0 mont-font mont-regular font-16 light-gray-dim">
                                    Send us a message with any questions or
                                    feedback about Verbena.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="newsletter-bg newletter-wrapper p-10">
                        <h3 className="hepta-semibold font-40 mb-2 text-white">
                            Newsletter
                        </h3>
                        <p className="mb-5 mont-font mont-regular font-16 text-white">
                        Register for our quarterly newsletter to receive Verbena product and provider updates, top women’s health news and Q&A with our Verbena medical advisers.
                                </p>
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
                                        className="btn-login calibre-regular font-16 uppercase primary-bg-color text-white mr-3"
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
