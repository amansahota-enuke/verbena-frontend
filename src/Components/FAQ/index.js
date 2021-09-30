import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";

export default function FAQ() {
    const [faq, setFaq] = useState([
        {
            question: "Do you offer technical support?",
            answer: "No.",
        },
        {
            question: "Do you offer technical support?",
            answer: "No.",
        },
        {
            question: "Do you offer technical support?",
            answer: "No.",
        },
    ]);

    return (
        <div className="w-full px-4 pt-48 pb-40">
            <div className="max-w-4xl mx-auto xl:px-8 lg:px-8 md:px-8 sm:px-8 px-8 h-auto mb-10">
                <div className="bg-white rounded-lg pt-10 pl-8 pr-8 pb-8">
                    <h2 className="font-32 question-title-color mb-4 hepta-semibold">Frequently Asked Question</h2>
                {faq.map((item, index) => (
                    <Disclosure key={index} as="div" className="mt-4">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between border-b w-full px-0 py-2 text-lg font-semibold text-left">
                                    <span>{item.question}</span>
                                    <ChevronUpIcon
                                        className={`${
                                            open ? "transform rotate-180" : ""
                                        } w-5 h-5`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-0 pt-4 pb-2 text-lg text-gray-500">
                                    {item.answer}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
                </div>
            </div>
        </div>
    );
}
