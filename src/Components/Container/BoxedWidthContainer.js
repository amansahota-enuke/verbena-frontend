import React from "react";

const BoxWidthContainer = (props) => (
    <div className="container mx-auto xl:px-32 lg:px-32 md:px-10 sm:px-10 px-10 h-auto">{props.children}</div>
);

export default BoxWidthContainer;
