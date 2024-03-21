import React from "react";
import deepEarth from "../../images/desktop/image-deep-earth.jpg"
import nightArcade from "../../images/desktop/image-night-arcade.jpg"
import soccerTeam from "../../images/desktop/image-soccer-team.jpg"
import grid from "../../images/desktop/image-grid.jpg"
import fromAbove from "../../images/desktop/image-from-above.jpg"
import pocketBorealis from "../../images/desktop/image-pocket-borealis.jpg"
import curiosity from "../../images/desktop/image-curiosity.jpg"
import fisheye from "../../images/desktop/image-fisheye.jpg"

import './creationsSection.css'

const creationsSection = () => {
    return (
        <section className="creations">
            <div className="creationsHeader">
                <h2 className="title">Our creations</h2>
                <a className="button" href="/">See all</a>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={deepEarth} alt="background"></img>
                    <h2 className="title">Deep earth</h2>
                </div>
                <div className="card">
                    <img src={nightArcade} alt="background"></img>
                    <h2 className="title">Night arcade</h2>
                </div>
                <div className="card">
                    <img src={soccerTeam} alt="background"></img>
                    <h2 className="title">Soccer team VR</h2>
                </div>
                <div className="card">
                    <img src={grid} alt="background"></img>
                    <h2 className="title">The grid</h2>
                </div>
                <div className="card">
                    <img src={fromAbove} alt="background"></img>
                    <h2 className="title">From up above VR</h2>
                </div>
                <div className="card">
                    <img src={pocketBorealis} alt="background"></img>
                    <h2 className="title">Pocket borealis</h2>
                </div>
                <div className="card">
                    <img src={curiosity} alt="background"></img>
                    <h2 className="title">The curiosity</h2>
                </div>
                <div className="card">
                    <img src={fisheye} alt="background"></img>
                    <h2 className="title">Make it fisheye</h2>
                </div>
            </div>
        </section>
    )
}

export default creationsSection