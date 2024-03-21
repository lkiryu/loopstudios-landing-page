import React from "react";
import Header from "../header/header";
import InteractiveSection from "../interactiveSection/interactiveSection";
import CreationsSection from "../creationsSection/creationsSection";

const LandingPage = () => {
    return (
        <div className="landingPage">
            <Header/>

            <InteractiveSection/>
            
            <CreationsSection/>
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