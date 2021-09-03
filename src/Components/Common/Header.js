import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";
import Dropdown from "./Dropdown";

const Header = () => {
    useEffect(() => {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $("#header").addClass("bg-white");
            } else {
                $("#header").removeClass("bg-white");
            }
        });
    });

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(" ");
    };

    const [navigation, setNavigation] = useState([
        { name: "Home", type: "link", path: "/home", current: true },
        { name: "About", type: "link", path: "/about", current: false },
        { name: "Services", type: "link", path: "/services", current: false },
        { name: "Info", type: "drop", path: "#", current: false },
        { name: "Contact", type: "link", path: "/home", current: false },
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

    return (
        <>
            <div id="header" className="fixed top-0 w-full z-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-4 md:space-x-10">
                        <div className="flex justify-start items-center">
                            <NavLink to="/home">
                                <span className="sr-only">Verbena</span>
                                <img
                                    className="w-40"
                                    src="/images/logo.png"
                                    alt=""
                                />
                            </NavLink>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Fragment key={item.name}>
                                        {item.type === "link" ? (
                                            <Link
                                                to={item.path}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "px-3 py-2 rounded-md text-sm font-medium"
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
                                        ) : (
                                            <span
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "px-3 py-2 rounded-md text-sm font-medium"
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
                                                <Dropdown name={item.name} />
                                            </span>
                                        )}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

<script>$(document).ready(function (){console.log("working")})</script>;
