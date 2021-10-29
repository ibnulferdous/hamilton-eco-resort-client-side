import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';
import defaultUserPic from '../../../images/user-default.jpg';

const Navigation = () => {
    const {user, logOut} = useAuth();
    console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home" className='lato'>Hamilton Eco Resorts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                user && 
                                <div className="d-flex align-items-center">
                                    <img src={user.photoURL? user.photoURL : defaultUserPic} alt="User" className="user-image mx-2" />
                                    <p className="mb-0">{user.displayName ? user.displayName : user.email ? user.email : "Unknown"}</p>
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