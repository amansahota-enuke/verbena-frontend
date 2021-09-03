/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ name }) {
    const menuItems = [
        { for: "Info", name: "Resources", type: "link", path: "/home" },
        { for: "Info", name: "Blog", type: "link", path: "/home" },
        { for: "Info", name: "FAQ", type: "link", path: "/home" },
        {
            for: "For Patients",
            name: "login",
            type: "url",
            path: process.env.REACT_APP_VERBENA_PATIENT,
        },
        {
            for: "For Patients",
            name: "register",
            type: "url",
            path: `${process.env.REACT_APP_VERBENA_PATIENT}/signup`,
        },
        {
            for: "For Providers",
            name: "login",
            type: "url",
            path: process.env.REACT_APP_VERBENA_PATIENT,
        },
        {
            for: "For Providers",
            name: "Why Verbena",
            type: "link",
            path: "/home",
        },
        {
            for: "For Providers",
            name: "register",
            type: "url",
            path: `${process.env.REACT_APP_VERBENA_PATIENT}/signup`,
        },
    ];

    return (
        <Menu as="div" className="relative">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex justify-center items-center">
                            {name}
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
                            className="origin-top-right absolute right-0 w-24 rounded-md shadow-lg bg-white"
                        >
                            {menuItems.map((item,index) => {
                                if (item.for === name) {
                                    return (
                                        <Menu.Item key={index}>
                                            {({ active }) =>
                                                item.type === "link" ? (
                                                    <Link
                                                        to={item.path}
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100 text-gray-900"
                                                                : "text-gray-700",
                                                            "block px-4 py-2 text-sm"
                                                        )}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ) : (
                                                    <a
                                                        href={item.path}
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100 text-gray-900"
                                                                : "text-gray-700",
                                                            "block px-4 py-2 text-sm"
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
