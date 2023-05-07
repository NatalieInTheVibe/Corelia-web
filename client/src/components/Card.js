import React from "react";

import "./Card.css";

const Card = ({ onClick, className, children }) => {
    return (
        <div className={`card ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;