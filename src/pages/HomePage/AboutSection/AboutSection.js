import React from 'react';
import './AboutSection.css';
import logo from '../../../images/hamilton-eco-resort.svg';
import home5 from '../../../images/home-5.jpg';
import home4 from '../../../images/home-4.jpg';
import home6 from '../../../images/home-6.jpg';

const AboutSection = () => {
    return (
        <div className="home about">
            <div className="little-description container py-8">
                <div className="row">
                    <div className="col">
                        <img className="home-logo d-block mx-auto mb-5" src={logo} alt="logo" />
                        <h2 className="text-center display-4 her-heading mb-4">
                            Welcome To 
                            <br className="d-none d-lg-inline" /> 
                            Hamilton Eco Resort
                        </h2>
                        <p className="text-center mb-5">Escape to a hideaway island fringed by turquoise lagoon. Laze in your over water villa or bungalow, puffer fish swimming in crystal-clear waters below. At Anantara Veli Maldives Resort, write your own chapter of romance. Salute the sun in an ocean-facing pavilion. Discover blissful Ayurvedic treatments at Balance Wellness by Anantara. Cruise into the sunset on a luxury yacht or dine under the stars. </p>
                        <button className="her-main-btn d-block mx-auto">
                            Discover More
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <div className="col">
                            <img src={home5} className="img-fluid" alt="resort" />
                        </div>
                        <div className="col">
                            <img src={home4} className="img-fluid" alt="resort" />
                        </div>
                        <div className="col">
                            <img src={home6} className="img-fluid" alt="resort" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;