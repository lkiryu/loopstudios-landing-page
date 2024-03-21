import React from "react";
import Header from "../header/header";
import InteractiveSection from "../interactiveSection/interactiveSection";

const LandingPage = () => {
    return (
        <div className="landingPage">
            <Header/>

            <InteractiveSection/>
            <section className="creations">
                <h2 className="title"></h2>
                <button className="button"></button>
                <div className="cards"></div>
            </section>
            <footer className="footer">
                <div>
                    <a href="/">
                        <img></img>
                    </a>

                    <ul className="social">
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>

                    <p className="rights"></p>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage