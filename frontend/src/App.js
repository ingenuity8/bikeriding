import React from 'react';
import Header from './components/header';
import Hero from './components/Hero';
// import Features from './components/Features';
import Features2 from './components/Features2';
import HowItWorks from './components/HowItWorks';
// import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Hero2 from './components/hero2';
import FAQ from './components/FAQ';
import LocationApp from './components/LocationApp';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features2/>
            <HowItWorks />
            <Hero2/>
            <LocationApp/>
            {/* <Features /> */}
            {/* <Pricing /> */}
            
            <Testimonials />
            <FAQ/>
            <Footer />
        </div>
    );
};

export default HomePage;
