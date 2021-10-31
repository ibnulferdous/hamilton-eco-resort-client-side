import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyBookingCard from './MyBookingCard/MyBookingCard';

const MyBookingsPage = () => {
    const [userBooking, setUserBookings ] = useState([]);
    const { user } = useAuth();
    const userId = [user.uid];

    useEffect( () => {
        fetch('https://fierce-tundra-10720.herokuapp.com/bookings/bygoogleid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId)
        })
        .then(res => res.json())
        .then(data => {
            setUserBookings(data);
        })
    }, [user]);

    const handleDelete = (id) => {
        fetch(`https://fierce-tundra-10720.herokuapp.com/bookings/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                alert("Cancled booking successfully!");
                const remainingBookings = userBooking.filter(booking => booking._id !== id);
                setUserBookings(remainingBookings);
            }
        })
    }


    return (
        <div>
            <section className="container pt-7 pb-5">
                <div className="row">
                    <div className="col">
                        {
                            userBooking.length ? 
                            <h1 className="text-center text-capitalize display-4 her-heading">Review Your bookings</h1>
                            :
                            <h1 className="text-center text-capitalize display-4 her-heading">No Booking Added</h1>

                        }
                    </div>
                </div>
            </section>
            <section className="container pb-7">
                <Row xs={1} md={2} className="g-4 g-md-5">
                    {
                        userBooking && userBooking.map(booking => <MyBookingCard 
                            key={booking._id} 
                            booking={booking}
                            handleDelete={handleDelete}
                        ></MyBookingCard>)
                    }
                </Row>
            </section>            
        </div>
    );
};

export default MyBookingsPage;