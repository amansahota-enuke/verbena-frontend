import React from "react";
import { Link } from "react-router-dom";

function Values() {
    return (
        <div className="our-values-wrapper mt-40 mb-20">
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
                <div className="value-box rounded-xl relative shadow-xl overflow-hidden px-9 py-12 bg-white">
                    <span className="vector absolute top-3 right-0">
                        <img
                            src="/images/value-box-ico-1.png"
                            alt=""
                            title=""
                        />
                    </span>
                    <h4 className="hepta-semibold font-24 text-gray-dim mb-4">
                        Care + <br />
                        Consultations
                    </h4>
                    <p className="mont-font mont-regular font-18 light-dim-gray-color mb-3">
                        Telehealth Visits, In-office Visits, Sick Visits, Well
                        Visits, Routine Procedures, Emotional Health
                    </p>
                    <Link
                        className="primary-text-color mont-font mont-bold"
                        to="/services"
                    >
                        Read More
                    </Link>
                </div>
                <div className="value-box rounded-xl relative shadow-xl overflow-hidden px-9 py-12 bg-white">
                    <span className="vector absolute top-3 right-0">
                        <img
                            src="/images/value-box-ico-2.png"
                            alt=""
                            title=""
                        />
                    </span>
                    <h4 className="hepta-semibold font-24 text-gray-dim mb-4">
                        Evaluations + <br />
                        Assessments
                    </h4>
                    <p className="mont-font mont-regular font-18 light-dim-gray-color mb-3">
                        Lab Results, Diagnostics Review, Treatment Plans
                    </p>
                    <Link
                        className="primary-text-color mont-font mont-bold"
                        to="/services"
                    >
                        Read More
                    </Link>
                </div>
                <div className="value-box rounded-xl relative shadow-xl overflow-hidden px-9 py-12 bg-white">
                    <span className="vector absolute top-3 right-0">
                        <img
                            src="/images/value-box-ico-3.png"
                            alt=""
                            title=""
                        />
                    </span>
                    <h4 className="hepta-semibold font-24 text-gray-dim mb-4">
                        Medication + <br />
                        Prescriptions
                    </h4>
                    <p className="mont-font mont-regular font-18 light-dim-gray-color mb-3">
                        New, Renewals, Symptom Specific, Medicine Management
                    </p>
                    <Link
                        className="primary-text-color mont-font mont-bold"
                        to="/services"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Values;
