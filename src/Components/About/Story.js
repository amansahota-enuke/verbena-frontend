import React from "react";

function Story() {
    return (
        <div className="our-story- mt-40">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-10">
                <div data-aos="fade-left" data-aos-duration="4000" className="xl:hidden lg:hidden md:block sm:block block">
                    <div className="our-story-img">
                        <img
                            src="/images/our-story-right.png"
                            alt=""
                            title=""
                        />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="4000">
                    <h5 className="font-18 question-title-color mb-6 uppercase hepta-semibold">
                        where we started
                    </h5>
                    <h2 className="text-gray-dim font-56 hepta-semibold mb-6">
                        Our Story
                    </h2>
                    <p className="mont-font mont-regular font-20 text-gray-dim">
                        After 20 years, Dr. Patrusky thought there must be a
                        better and more convenient way to serve her patients.
                        Rather than lengthy in-person visits and crowded waiting
                        rooms, she envisioned a new way for patients to connect
                        with their doctors, a way that would maintain the
                        personal patient-doctor relationship while seamlessly
                        fitting into their busy schedules.{" "}
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="4000" className="xl:block lg:block md:hidden sm:hidden hidden">
                    <div className="our-story-img">
                        <img
                            src="/images/our-story-right.png"
                            alt=""
                            title=""
                        />
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="6000">
                    <div className="our-story-img">
                        <img src="/images/our-story-left.png" alt="" title="" />
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="6000">
                    <p className="mont-font mont-regular font-20 text-gray-dim">
                        At the same time, the world was hit with COVID-19 and
                        her original idea was actually forced to become a
                        reality. Dr. Patrusky spent a year navigating the many
                        challenges associated with the pandemic including but
                        not limited to providing easy remote access and quality
                        medical care to her patients. The realization that
                        alternative digital services could supplement
                        traditional patient care practices is what inspired her
                        to move forward with her vision. With Heidi Edelstein’s
                        decades of experience in branding & marketing, the two
                        launched Verbena as a premiere women’s digital
                        healthcare platform, designed to care for her health,
                        with her doctor, on her time.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Story;
