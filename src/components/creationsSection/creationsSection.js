import React from "react";
import Card from "../card/card";

import './creationsSection.css'

const cardData = [
    {
        href: "/",
        src: "./images/image-deep-earth.jpg",
        title: "Deep earth",
    },
    {
        href: "/",
        src: "./images/image-night-arcade.jpg",
        title: "Night arcade",
    },
    {
        href: "/",
        src: "./images/image-soccer-team.jpg",
        title: "Soccer team VR",
    },
    {
        href: "/",
        src: "./images/image-grid.jpg",
        title: "The grid",
    },
    {
        href: "/",
        src: "./images/image-from-above.jpg",
        title: "From up above VR",
    },
    {
        href: "/",
        src: "./images/image-pocket-borealis.jpg",
        title: "Pocket borealis",
    },
    {
        href: "/",
        src: "./images/image-curiosity.jpg",
        title: "The curiosity",
    },
    {
        href: "/",
        src: "./images/image-fisheye.jpg",
        title: "Make it fisheye",
    },
]

const creationsSection = () => {
    return (
        <section className="creations">
            <div className="creationsHeader">
                <h2 className="title">Our creations</h2>
                <a className="button" href="/">See all</a>
            </div>
            <div className="cards">
                {
                    cardData.map((item, index)=>{
                        return(
                            <Card
                                key={index}
                                href={item.href}
                                src={item.src}
                                title={item.title}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default creationsSection