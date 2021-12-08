/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import Dropdown from "./Dropdown";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const location = useLocation();

    const [navigation, setNavigation] = useState([
        { name: "Home", type: "link", path: "/home", current: true },
        { name: "About", type: "link", path: "/about", current: false },
        { name: "Services", type: "link", path: "/services", current: false },
        { name: "Info", type: "drop", path: "#", current: false },
        {
            name: "Contact",
            type: "url",
            path: "mailto:info@verbenacare.com",
            current: false,
        },
        { name: "For Patients", type: "drop", path: "#", current: false },
        { name: "For Providers", type: "drop", path: "#", current: false },
    ]);

    const handleNavigation = (selected) => {
        const updatedNavigation = [];
        navigation.forEach((item) => {
            if (item.name === selected.name) {
                updatedNavigation.push({ ...item, current: true });
            } else {
                updatedNavigation.push({ ...item, current: false });
            }
        });

        setNavigation(updatedNavigation);
    };

    useEffect(() => {
        console.log(location);
        if (location.pathname === "/faq") {
            return handleNavigation(navigation[3]);
        }
        if (location.pathname === "/Why-Verbena") {
            return handleNavigation(navigation[6]);
        }
        if (["/home", "/about", "/services"].includes(location.pathname)) {
            return handleNavigation(
                navigation.find((ele) => ele.path === location.pathname)
            );
        }
    }, [location]);

    return (
        <Disclosure as="nav" className="fixed top-0 py-4 w-full z-50 bg-white">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 right-0 flex items-center xl:hidden lg:hidden md:block sm:block">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-between sm:justify-between">
                                <div className="flex-shrink-0 flex items-center">
                                    <NavLink to="/home" className="logo">
                                        <span className="sr-only">Verbena</span>
                                        <img
                                            className="block lg:hidden w-auto"
                                            src="/images/logo.png"
                                            alt=""
                                        />
                                    </NavLink>
                                    <NavLink to="/home" className="logo">
                                        <span className="sr-only">Verbena</span>
                                        <img
                                            className="hidden lg:block w-auto"
                                            src="/images/logo.png"
                                            alt=""
                                        />
                                    </NavLink>
                                </div>
                                <div className="xl:block lg:block md:hidden sm:hidden hidden sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Fragment key={item.name}>
                                                {item.type === "link" ? (
                                                    <Link
                                                        to={item.path}
                                                        className={classNames(
                                                            item.current
                                                                ? "primary-text-color primary-text-hover-color"
                                                                : "",
                                                            "px-3 py-2 text-lg font-normal primary-text-hover-color"
                                                        )}
                                                        aria-current={
                                                            item.current
                                                                ? "page"
                                                                : undefined
                                                        }
                                                        onClick={() =>
                                                            handleNavigation(
                                                                item
                                                            )
                                                        }
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ) : item.type === "url" ? (
                                                    <a
                                                        href={item.path}
                                                        className={classNames(
                                                            item.current
                                                                ? "primary-text-color primary-text-hover-color"
                                                                : "",
                                                            "px-3 py-2 text-lg font-normal primary-text-hover-color"
                                                        )}
                                                        aria-current={
                                                            item.current
                                                                ? "page"
                                                                : undefined
                                                        }
                                                        onClick={() =>
                                                            handleNavigation(
                                                                item
                                                            )
                                                        }
                                                    >
                                                        {item.name}
                                                    </a>
                                                ) : (
                                                    <span
                                                        className={classNames(
                                                            item.current
                                                                ? "primary-text-color"
                                                                : "",
                                                            "px-3 py-2 text-lg font-normal primary-text-hover-color"
                                                        )}
                                                        aria-current={
                                                            item.current
                                                                ? "page"
                                                                : undefined
                                                        }
                                                        onClick={() =>
                                                            handleNavigation(
                                                                item
                                                            )
                                                        }
                                                    >
                                                        <Dropdown
                                                            name={item.name}
                                                        />
                                                    </span>
                                                )}
                                            </Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="xl:hidden lg:hidden md:block sm:block">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b-2">
                            {navigation.map((item) => (
                                <Fragment key={item.name}>
                                    {item.type === "link" ? (
                                        <Link
                                            to={item.path}
                                            className={classNames(
                                                item.current
                                                    ? ""
                                                    : "hover:text-black",
                                                "block px-3 py-2 text-sm font-normal"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                            onClick={() =>
                                                handleNavigation(item)
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    ) : item.type === "url" ? (
                                        <a
                                            href={item.path}
                                            className={classNames(
                                                item.current
                                                    ? ""
                                                    : "hover:text-black",
                                                "block px-3 py-2 text-sm font-normal"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                            onClick={() =>
                                                handleNavigation(item)
                                            }
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <span
                                            className={classNames(
                                                item.current
                                                    ? ""
                                                    : "hover:text-black",
                                                "block px-3 py-2 text-sm font-normal"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                            onClick={() =>
                                                handleNavigation(item)
                                            }
                                        >
                                            <Dropdown
                                                type="mobile"
                                                name={item.name}
                                            />
                                        </span>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
