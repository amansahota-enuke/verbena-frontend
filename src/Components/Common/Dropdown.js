/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ name, type }) {
    const menuItems = [
        {
            for: "Info",
            name: "V-Blog",
            type: "url",
            path: `${process.env.BLOG_URL}/blog`,
        },
        { for: "Info", name: "FAQ", type: "link", path: "/faq" },
        {
            for: "For Patients",
            name: "Login",
            type: "url",
            path: process.env.REACT_APP_VERBENA_PATIENT,
        },
        {
            for: "For Patients",
            name: "Register",
            type: "url",
            path: `${process.env.REACT_APP_VERBENA_PATIENT}/signup`,
        },
        {
            for: "For Providers",
            name: "Login",
            type: "url",
            path: process.env.REACT_APP_VERBENA_PROVIDER,
        },
        {
            for: "For Providers",
            name: "Why Verbena",
            type: "link",
            path: "/Why-Verbena",
        },
        {
            for: "For Providers",
            name: "Register",
            type: "url",
            path: `${process.env.REACT_APP_VERBENA_PROVIDER}/signup`,
        },
    ];

    return (
        <Menu as="div" className="relative">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex justify-center items-center font-normal">
                            {name}
                            <ChevronDownIcon
                                className={`${
                                    open
                                        ? "transition ease-out duration-100 transform rotate-180"
                                        : ""
                                } w-5 h-5`}
                            />
                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className={`${
                                type === "mobile"
                                    ? ""
                                    : "top-10 origin-top-right absolute right-0 w-24 rounded-md shadow-lg"
                            } bg-gray-100`}
                        >
                            {menuItems.map((item, index) => {
                                if (item.for === name) {
                                    return (
                                        <Menu.Item key={index}>
                                            {({ active }) =>
                                                item.type === "link" ? (
                                                    <Link
                                                        to={item.path}
                                                        className={classNames(
                                                            `${
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700"
                                                            }  primary-text-hover-color`,
                                                            `${
                                                                type ===
                                                                "mobile"
                                                                    ? "px-2 py-3"
                                                                    : "px-4 py-2"
                                                            } block text-lg`
                                                        )}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ) : (
                                                    <a
                                                        href={item.path}
                                                        className={classNames(
                                                            `${
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700"
                                                            } primary-text-hover-color`,
                                                            `${
                                                                type ===
                                                                "mobile"
                                                                    ? "px-2 py-3"
                                                                    : "px-4 py-2"
                                                            } block text-lg cursor-pointer`
                                                        )}
                                                    >
                                                        {item.name}
                                                    </a>
                                                )
                                            }
                                        </Menu.Item>
                                    );
                                }

                                return null;
                            })}
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}
