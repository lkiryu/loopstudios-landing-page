import React from "react";
import Card from "../card/card";

import './creationsSection.css'

const creationsSection = () => {
    return (
        <section className="creations">
            <div className="creationsHeader">
                <h2 className="title">Our creations</h2>
                <a className="button" href="/">See all</a>
            </div>
            <div className="cards">
                <Card title='Deep earth' />
                <Card title='Night arcade' />
                <Card title='Soccer team VR' />
                <Card title='The grid' />
                <Card title='From up above VR' />
                <Card title='Pocket borealis' />
                <Card title='The curiosity' />
                <Card title='Make it fisheye' />
            </div>
        </section>
    )
}

export default creationsSection