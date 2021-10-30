import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import HeroSection from './HeroSection/HeroSection';
import ServicesSection from './ServicesSection/ServicesSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <ServicesSection></ServicesSection>
        </div>
    );
};

export default HomePage;