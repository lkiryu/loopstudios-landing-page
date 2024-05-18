import React from "react";

const Card = (prop) => {
    return (
        <a className="card" href={prop.href}>
            <img src={prop.src} alt="background"></img>
            <h2 className="title">{prop.title}</h2>
        </a>
    )
}

export default Card