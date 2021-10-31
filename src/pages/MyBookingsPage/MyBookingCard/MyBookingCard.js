import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyBookingCard = (props) => {
    const { name, description, cost, dimension, guest, imageUrlOne, view, _id } = props.booking.villa;
    const id = props.booking._id;


    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={imageUrlOne} className="img-fluid" />
                <Card.Body className="px-4 pt-4 pb-5">
                    <h3 className="h2 playfair fst-italic">{name}</h3>
                    <div className="d-block d-md-flex justify-content-between mt-4 mb-4">
                        <div className="mb-3 mb-md-0">
                            <img src="https://i.postimg.cc/9Fg1RdYJ/icon-1.png" className="d-inline-block card-icon" alt="guest" />
                            <p className="d-inline-block ms-2 mb-0">{guest} Guests</p>
                        </div>
                        <div className="mb-3 mb-md-0">
                            <img src="https://i.postimg.cc/SswYbK6L/icon-2.png" className="d-inline-block card-icon" alt="villa size" />
                            <p className="d-inline-block ms-2 mb-0">{dimension} sqm</p>
                        </div>
                        <div className="mb-3 mb-md-0">
                            <img src="https://i.postimg.cc/1RCYw19G/icon-3.png" className="d-inline-block card-icon" alt="view" />
                            <p className="d-inline-block ms-2 mb-0">{view}</p>
                        </div>
                    </div>
                    <Card.Text className="text-secondary mb-1">Order Status: 
                        <span className="text-capitalize ms-1">{props.booking.orderStatus}</span>
                    </Card.Text>
                    <h4 className="h6">Per night: ${cost}</h4>
                    
                    <button onClick={() => props.handleDelete(id)} className="her-main-btn d-block mt-4">Cancel Booking</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyBookingCard;