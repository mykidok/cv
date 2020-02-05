import React from "react";

const NotFound = (props) => {
    return (
        <p className="line">$&nbsp;<span className="text-white">command</span> {props.value} <span className="text-white">not found</span></p>
    )
};

export default NotFound