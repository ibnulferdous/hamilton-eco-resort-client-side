import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import HeroSection from './HeroSection/HeroSection';
import VillasSection from './VillasSection/VillasSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <VillasSection></VillasSection>
        </div>
    );
};

export default HomePage;