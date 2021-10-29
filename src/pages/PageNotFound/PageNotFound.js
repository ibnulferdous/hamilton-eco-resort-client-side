import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <div className="bg-overlay">
                <div className="container">
                    <div className="row fullscreen align-items-center">
                        <div className="col text-center text-white">
                            <h1 className="hero-h1 fst-italic playfair">Page Not found</h1>
                            <h2 className="hero-h2 lato fw-300 h4 text-capitalize mb-5">Oops, It’s the wrong island…</h2>
                            <Link className="her-main-btn-white" to='/'>Back To The Right Island</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;