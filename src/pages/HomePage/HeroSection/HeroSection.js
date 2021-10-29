import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <main className="home hero-section d-flex justify-content-center align-items-center flex-column">
            <div className="container text-center text-white">
                <h1 className="hero-h1 fst-italic playfair">Heaven 
                    <br className="d-none d-lg-inline" />
                    On Earth
                </h1>
                <h2 className="hero-h2 lato fw-300 h4 text-capitalize">A destination of ultimate choice</h2>
            </div>
        </main>
    );
};

export default HeroSection;