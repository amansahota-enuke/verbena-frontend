import React from "react";

function Blog() {
    return (
        <div className="our-blog-wrapper">
            <div className="blog-title-wrapper text-center mb-24">
                <h5 className="font-24 hepta-semibold capitalize blog-subtitle-color mb-5">
                    Our Blog
                </h5>
                <h2 className="hepta-semibold text-white font-40 leading-none">
                    Check out our Verbena blog for <br /> the latest articles on
                    women’s health.
                </h2>
            </div>

            <div className="our-blog-grid">
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
                    <div
                        data-aos="fade-down"
                        data-aos-duration="2000"
                        className="overflow-hidden rounded-lg shadow-sm relative"
                    >
                        <a
                            href={`https://verbenacare.com/v-blog/birth-control`}
                        >
                            {/* <span className="blog-category bg-black opacity-50 absolute top-6 left-5 pt-1 pb-1 pl-2 pr-2 rounded text-white font-16 mont-font mont-regular">
                                Category 2
                            </span> */}

                            <div>
                                <img
                                    src="/images/shutterstockbirthcontrolpills.jpg"
                                    alt=""
                                    title=""
                                />
                            </div>
                            <div className="blog-heading px-6 py-4 bg-white">
                                <h4 className="text-gray-dim mont-font mont-regular font-16 font-normal m-0">
                                    Which birth control is right for you (and
                                    there are way more than V.)?
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        className="overflow-hidden rounded-lg shadow-sm relative"
                    >
                        <a href={`https://verbenacare.com/v-blog/health`}>
                            {/* <span className="blog-category bg-black opacity-50 absolute top-6 left-5 pt-1 pb-1 pl-2 pr-2 rounded text-white font-16 mont-font mont-regular">
                                Category 1
                            </span> */}

                            <div>
                                <img src="/images/c.jpg" alt="" title="" />
                            </div>
                            <div className="blog-heading px-6 py-4 bg-white">
                                <h4 className="text-gray-dim mont-font mont-regular font-16 font-normal m-0">
                                    Top V. STIs (Sexually Transmitted
                                    Infections)
                                </h4>
                            </div>
                        </a>
                    </div>
                    {/* <div
                        data-aos="fade-down"
                        data-aos-duration="3000"
                        className="overflow-hidden rounded-lg shadow-sm relative"
                    >
                        <a
                            href={`https://verbenacare.com/v-blog/v-reasons-why-you-may-not-be-getting-pregnant-even-if-you-are-trying`}
                        >
                            <span className="blog-category bg-black opacity-50 absolute top-6 left-5 pt-1 pb-1 pl-2 pr-2 rounded text-white font-16 mont-font mont-regular">
                            Category 3
                        </span>

                            <div>
                                <img
                                    src="/images/swimmingsperm.jpg"
                                    alt=""
                                    title=""
                                />
                            </div>
                            <div className="blog-heading px-6 py-4 bg-white">
                                <h4 className="text-gray-dim font-14 hepta-semibold m-0">
                                    V. Reasons why you may not be getting
                                    pregnant – even if you are trying.
                                </h4>
                            </div>
                        </a>
                    </div> */}
                    <div
                        data-aos="fade-down"
                        data-aos-duration="3000"
                        className="overflow-hidden rounded-lg shadow-sm relative"
                    >
                        <a
                            href={`https://verbenacare.com/v-blog/v-health-issues-to-be-mindful-of-during-menopause-bonus-there-are-vi`}
                        >
                            {/* <span className="blog-category bg-black opacity-50 absolute top-6 left-5 pt-1 pb-1 pl-2 pr-2 rounded text-white font-16 mont-font mont-regular">
                                Category 4
                            </span> */}

                            <div>
                                <img
                                    src="/images/shutterstock_1821369599.jpg"
                                    alt=""
                                    title=""
                                />
                            </div>
                            <div className="blog-heading px-6 py-4 bg-white">
                                <h4 className="text-gray-dim mont-font mont-regular font-16 font-normal m-0">
                                    V. Health issues to be mindful of during
                                    menopause (bonus, there are vi.)
                                </h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="see-more flex justify-center mt-10">
                <a
                    href={`${process.env.REACT_APP_VERBENA_BLOG_URL}/blog`}
                    className="btn-login calibre-regular font-18 font-normal uppercase primary-bg-color text-white mr-3 tracking-widest"
                >
                    Read More
                </a>
            </div>
        </div>
    );
}

export default Blog;
