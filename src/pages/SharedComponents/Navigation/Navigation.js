import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';
import defaultUserPic from '../../../images/user-default.jpg';

const Navigation = () => {
    const {user, logOut } = useAuth();
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home" className='playfair fst-italic'>Hamilton Eco Resorts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/manage-my-bookings'>My Bookings</Nav.Link>
                            {
                                user && 
                                <Nav.Link as={Link} to='/manage-all-bookings'>All Bookings</Nav.Link>
                            }
                            {
                                user && 
                                <Nav.Link as={Link} to='/add-new-villa'>Add New</Nav.Link>
                            }
                        </Nav>
                        <Nav>
                            {
                                user  && 
                                <div className="d-flex align-items-center">
                                    <img src={user.photoURL? user.photoURL : defaultUserPic} alt="User" className="user-image me-2" />
                                    <p className="mb-0 me-2">{user.displayName ? user.displayName : user.email ? user.email : "Unknown"}</p>
                                </div>
                            }
                            {
                                user ? 
                                <Nav.Link>
                                    <button className="btn btn-link text-decoration-none p-0 border-0 log-out-btn" onClick={logOut}>Log Out</button>
                                </Nav.Link>
                                :
                                <Nav.Link as={Link} to="/log-in">Log in</Nav.Link>
                            }                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;