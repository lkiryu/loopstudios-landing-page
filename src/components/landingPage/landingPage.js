import React from "react";
import Header from "../header/header";
import InteractiveSection from "../interactiveSection/interactiveSection";
import CreationsSection from "../creationsSection/creationsSection";
import Footer from "../../footer/footer";

const LandingPage = () => {
    return (
        <div className="landingPage">
            <Header/>

            <InteractiveSection/>
            
            <CreationsSection/>
            
            <Footer/>
        </div>
    )
}

export default LandingPage