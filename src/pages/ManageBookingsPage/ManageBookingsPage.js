import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageBookingCard from './ManageBookingCard/ManageBookingCard';

const ManageBookingsPage = () => {
    const [allBookings, setAllBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings/')
        .then(res => res.json())
        .then(data => setAllBookings(data));
    }, []);

    // console.log(allBookings);

    const handleOrderStatus = (id) => {
        const url = `http://localhost:5000/bookings/${id}`;
        const data = { orderStatus: "approved" };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                alert("Approved successfully!");

                fetch('http://localhost:5000/bookings/')
                .then(res => res.json())
                .then(data => setAllBookings(data));
            }
        })
    }

    const handleDelete = (id) => {
        const url = `http://localhost:5000/bookings/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                alert("Cancled booking successfully!");
                const remainingBookings = allBookings.filter(booking => booking._id !== id);
                setAllBookings(remainingBookings);
            }
        })
    }



    return (
        <div>
            <div>
            <section className="container pt-7">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center text-capitalize display-4 her-heading mb-2">Dashboard</h1>
                        {
                            allBookings.length ? 
                            <p className="text-center text-capitalize h5 fw-light mb-5 text-secondary">Manage all bookings</p>
                            :
                            <p className="text-center text-capitalize h5 fw-light mb-5 text-secondary">No bookings by clients</p>

                        }
                    </div>
                </div>
            </section>
            <section className="container pb-7">
                <Row xs={1} md={2} className="g-4 g-md-5">
                    {
                        allBookings.map(booking => <ManageBookingCard 
                            key={booking._id} 
                            booking={booking}
                            handleOrderStatus={handleOrderStatus}
                            handleDelete={handleDelete}
                        ></ManageBookingCard>)
                    }
                </Row>
            </section>            
        </div>
        </div>
    );
};

export default ManageBookingsPage;