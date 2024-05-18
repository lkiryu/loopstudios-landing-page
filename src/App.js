import React from "react";
import Header from "./components/header/header";
import InteractiveSection from "./components/interactiveSection/interactiveSection"
import CreationsSection from "./components/creationsSection/creationsSection"
import Footer from "./footer/footer";

import './App.css';

function App() {
  return (
    <main className="container">
            <Header/>

            <InteractiveSection/>
            
            <CreationsSection/>
            
            <Footer/>
        </main>
  );
}

export default App;
