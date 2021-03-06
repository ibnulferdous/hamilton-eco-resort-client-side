import React from 'react';
import { Card, Col } from 'react-bootstrap';
import villaIcon from '../../../../images/icon-2.png';
import guestIcon from '../../../../images/icon-1.png';
import viewIcon from '../../../../images/icon-3.png';
import './VillaCard.css';
import { Link } from 'react-router-dom';

const VillaCard = (props) => {

    const { name, description, cost, dimension, guest, imageUrlOne, view, _id } = props.villa;

    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={imageUrlOne} className="img-fluid" />
                <Card.Body className="px-4 pt-4 pb-5">
                    <h3 className="h2 playfair fst-italic">{name}</h3>
                    <div className="d-flex justify-content-between mt-4 mb-3">
                        <div>
                            <img src={guestIcon} className="d-inline-block card-icon" alt="guest" />
                            <p className="d-inline-block ms-2 mb-0">{guest} Guests</p>
                        </div>
                        <div>
                            <img src={villaIcon} className="d-inline-block card-icon" alt="villa size" />
                            <p className="d-inline-block ms-2 mb-0">{dimension} sqm</p>
                        </div>
                        <div>
                            <img src={viewIcon} className="d-inline-block card-icon" alt="view" />
                            <p className="d-inline-block ms-2 mb-0">{view}</p>
                        </div>
                    </div>
                    <Card.Text className="text-secondary">{description}</Card.Text>
                    <h4 className="h6">Per night: ${cost}</h4>
                    <Link to={`/villa-details/${_id}`} className="text-decoration-none" >
                        <button className="her-main-btn d-block mt-4">View Details</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default VillaCard;