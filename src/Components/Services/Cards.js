import React from "react";

function Cards() {
    return (
        <section className="what-we-do-grid mt-24">
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                    <span className="absolute left-0 top-0">
                        <img
                            src="/images/cloud-vector-left.png"
                            alt=""
                            title=""
                        />
                    </span>
                    <h4 className="font-24 hepta-semibold light-green-color text-right">
                        Consultations +<br />
                        Treatments
                    </h4>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                    <span className="absolute left-0 top-0">
                        <img
                            src="/images/cloud-vector-left.png"
                            alt=""
                            title=""
                        />
                    </span>
                    <h4 className="font-24 hepta-semibold light-green-color text-right">
                        Prescription <br />
                        Renewal{" "}
                    </h4>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                    <span className="absolute left-0 top-0">
                        <img
                            src="/images/cloud-vector-left.png"
                            alt=""
                            title=""
                        />
                    </span>
                    <h4 className="font-24 hepta-semibold light-green-color text-right">
                        Telehealth <br />
                        Medicine
                    </h4>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                    <span className="absolute left-0 top-0">
                        <img
                            src="/images/cloud-vector-left.png"
                            alt=""
                            title=""
                        />
                    </span>
                    <h4 className="font-24 hepta-semibold light-green-color text-right">
                        Laboratory <br />
                        Testing{" "}
                    </h4>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                    <span className="absolute left-0 top-0">
                        <img
                            src="/images/cloud-vector-left.png"
                            alt=""
                            title=""
                        />
                    </span>
                    <h4 className="font-24 hepta-semibold light-green-color text-right">
                        Health +<br />
                        Wellness Education
                    </h4>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                    <span className="absolute left-0 top-0">
                        <img
                            src="/images/cloud-vector-left.png"
                            alt=""
                            title=""
                        />
                    </span>
                    <h4 className="font-24 hepta-semibold light-green-color text-right">
                        Evaluations +<br />
                        Assessments
                    </h4>
                </div>
            </div>
        </section>
    );
}

export default Cards;
