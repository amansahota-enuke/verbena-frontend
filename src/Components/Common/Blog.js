import React from "react";

function Blog() {
    return (
        <div className="our-blog-wrapper">
            <div className="blog-title-wrapper text-center mb-24">
                <h5 className="hepta-semibold uppercase blog-subtitle-color mb-5">
                    Our Blog
                </h5>
                <h2 className="hepta-semibold text-white font-40">
                    Check out our Verbena blog for <br /> the latest articles on
                    women’s health.
                </h2>
            </div>

            <div className="our-blog-grid">
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
                    <div data-aos="fade-down" data-aos-duration="1000" className="overflow-hidden rounded-lg shadow-sm relative">
                        <span className="blog-category bg-black opacity-50 absolute top-6 left-5 pt-1 pb-1 pl-2 pr-2 rounded text-white font-16 mont-font mont-regular">
                            Category 1
                        </span>

                        <div className="blog-image-wrapper"></div>
                        <div className="blog-heading px-6 py-4 bg-white">
                            <h4 className="text-gray-dim font-18 hepta-semibold m-0">
                                The best vitamins <br /> for your lifestyle
                            </h4>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2000" className="overflow-hidden rounded-lg shadow-sm relative">
                        <span className="blog-category bg-black opacity-50 absolute top-6 left-5 pt-1 pb-1 pl-2 pr-2 rounded text-white font-16 mont-font mont-regular">
                            Category 2
                        </span>

                        <div className="blog-image-wrapper"></div>
                        <div className="blog-heading px-6 py-4 bg-white">
                            <h4 className="text-gray-dim font-18 hepta-semibold m-0">
                                Our top five recos for <br />
                                the menopausal life
                            </h4>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="3000" className="overflow-hidden rounded-lg shadow-sm relative">
                        <span className="blog-category bg-black opacity-50 absolute top-6 left-5 pt-1 pb-1 pl-2 pr-2 rounded text-white font-16 mont-font mont-regular">
                            Category 3
                        </span>

                        <div className="blog-image-wrapper"></div>
                        <div className="blog-heading px-6 py-4 bg-white">
                            <h4 className="text-gray-dim font-24 hepta-semibold m-0">
                                Finding the best birth control for you
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="see-more flex justify-center mt-10">
                <a
                    href="https://verbenacare.com/blog"
                    className="btn-login calibre-regular font-18 uppercase primary-bg-color text-white mr-3 tracking-widest"
                >
                    See More
                </a>
            </div>
        </div>
    );
}

export default Blog;
