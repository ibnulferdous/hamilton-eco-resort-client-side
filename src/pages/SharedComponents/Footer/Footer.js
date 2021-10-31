import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-2 d-block d-md-flex justify-space-between">
                    <div className="col">
                        <p className="text-white mb-2">Address: 88 Lakin Causeway Whitsundays QLD 4806, Maldives</p>
                        <p className="text-white mb-2">Phone: +61 7 7010 1111</p>
                        <p className="text-white mb-2">Email: Info@hamiltonresorts.com</p>
                        <div className="mt-4">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="btn btn-link text-white p-0 btn-lg">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="btn btn-link text-white p-0 btn-lg mx-4">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="btn btn-link text-white p-0 btn-lg">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col d-flex flex-column align-items-center align-items-md-end pt-5 pt-md-0">
                        <img src="https://i.postimg.cc/0jzLw5xc/logo512.png" alt="logo" className="footer-logo" />
                        <h5 className="playfair fst-italic text-white mt-4">Hamilton Eco Resort</h5>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col d-block d-md-flex justify-content-center">
                        <nav class="nav justify-content-center">
                            <Nav.Link as={Link} to='/' className="text-white">Home</Nav.Link>
                            <Nav.Link as={Link} to='/manage-my-bookings' className="text-white">My Bookings</Nav.Link>
                            <Nav.Link as={Link} to='/manage-all-bookings' className="text-white">All Bookings</Nav.Link>
                            <Nav.Link as={Link} to='/add-new-villa' className="text-white">Add New</Nav.Link>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="text-white text-center my-4">Copyright © 2021 | Hamilton Eco Resort</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;