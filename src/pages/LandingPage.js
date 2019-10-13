import React from 'react';
import './LandingPage.css'
import Header from './LandingPageComponents/Header'
import About from './LandingPageComponents/About'
import Gallery from './LandingPageComponents/Gallery'
import Testimonials from  './LandingPageComponents/Testimonials'
import Contact from './LandingPageComponents/Contact'

const LandingPage = ()=>{
    return (
    <div className="welcomePage"  id="home">
        <Header />
        <About />
        <Gallery />
        <Testimonials/>
        <Contact />
    </div>
    );
};

export default LandingPage;