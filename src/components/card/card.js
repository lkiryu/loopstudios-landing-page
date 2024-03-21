import React from "react";

const Card = (props) => {
    return(
        <div className="card">
            <h2 className="cardTitle">{props.title}</h2>
        </div>
    )
}

export default Card