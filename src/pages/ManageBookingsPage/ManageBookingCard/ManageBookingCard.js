import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageBookingCard = (props) => {
    const { name } = props.booking.villa;
    const { fullName, email, googleId, address, orderStatus } = props.booking;
    const id = props.booking._id

    return (
        <Col>
            <Card className="h-100">
                <Card.Body className="px-4 pt-4 pb-5">
                    <h3 className="h3 playfair fst-italic pb-4">{name}</h3>
                    <ul className="text-secondary">
                        <li>User Name: {fullName}</li>
                        <li>Email: {email}</li>
                        <li>Google Id: {googleId}</li>
                        <li>Address: {address}</li>
                        <li className="fw-bold">Order Status: 
                            <span className="text-capitalize ms-1">{orderStatus}</span>
                        </li>
                    </ul>
                    
                    <div className="d-block d-md-flex justify-content-evenly text-center">
                        <button onClick={() => props.handleOrderStatus(id)} className="her-main-btn d-block mt-4">Approve Booking</button>
                        <button onClick={() => props.handleDelete(id)} className="her-main-btn d-block mt-4">Cancel Booking</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageBookingCard;