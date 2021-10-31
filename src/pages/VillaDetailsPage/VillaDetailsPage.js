import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import villaIcon from '../../images/icon-2.png';
import guestIcon from '../../images/icon-1.png';
import viewIcon from '../../images/icon-3.png';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const VillaDetailsPage = () => {
    const {villaId} = useParams();
    const [villaDetails, setVillaDetails] = useState({});
    const { name, description, cost, dimension, guest, imageUrlOne, imageUrlTwo, imageUrlThree, view, _id } = villaDetails;
    const { user } = useAuth();

    
    useEffect( () => {
        fetch(`https://fierce-tundra-10720.herokuapp.com/villas/${villaId}`)
        .then(res => res.json())
        .then(data => setVillaDetails(data));
    } , []);


    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const booked = (data) => {
        data.villa = villaDetails;
        data.googleId = user.uid;
        data.orderStatus = "pending";

        fetch(`https://fierce-tundra-10720.herokuapp.com/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert("Booking added successfully!");
                reset();
            }
        });
    };


    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row g-0 px-0">
                    <div className="col col-md-4">
                        <img src={imageUrlOne} alt={name} className="img-fluid" />
                    </div>
                    <div className="col col-md-4">
                        <img src={imageUrlTwo} alt={name} className="img-fluid" />
                    </div>
                    <div className="col col-md-4">
                        <img src={imageUrlThree} alt={name} className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row pt-7 justify-content-center">
                    <div className="col">
                        <h1 className="text-center text-capitalize display-4 her-heading mb-4">{name}</h1>
                    </div>

                    <div className="w-100"></div>

                    <div className="col col-lg-6">
                        <div className="d-block d-md-flex justify-content-between mt-4 mb-5">
                            <div className="mb-3 mb-md-0">
                                <img src={guestIcon} className="d-inline-block card-icon" alt="guest" />
                                <p className="d-inline-block ms-3 mb-0">{guest} Guests</p>
                            </div>
                            <div className="mb-3 mb-md-0">
                                <img src={villaIcon} className="d-inline-block card-icon" alt="villa size" />
                                <p className="d-inline-block ms-3 mb-0">{dimension} sqm</p>
                            </div>
                            <div >
                                <img src={viewIcon} className="d-inline-block card-icon" alt="view" />
                                <p className="d-inline-block ms-3 mb-0">{view}</p>
                            </div>
                        </div>
                        <p className="mb-5 lh-lg text-secondary">{description}</p>
                    </div>
                </div>
            </div>

            <div className="container pb-7">
                <div className="row justify-content-center">
                    <div className="col col-lg-6">
                        <h2 className="text-center text-capitalize h1 her-heading mb-4">Room Amenities</h2>
                        <ul className="mb-4 lh-lg text-secondary">
                            <li>Personalized welcome at the airport</li>
                            <li>Personalized check-in</li>
                            <li>Welcome drink in Villa</li>
                            <li>24-hour in-room dining</li>
                            <li>Daily amenities</li>
                            <li>24hr housekeeping service</li>
                            <li>Check-out in Villa</li>
                        </ul>
                        <h5 className="playfair pb-5">Per night: ${cost}</h5>

                        <h2 className="text-center text-capitalize h1 her-heading mb-4">Book your stay</h2>
                        <form onSubmit={handleSubmit(booked)}>
                            <div className="mb-3">
                                <input 
                                    placeholder="Full Name"
                                    defaultValue={user.displayName || ""}
                                    type="text"
                                    {...register("fullName", { required: true })}
                                    className="d-block w-100 form-control"
                                />
                                {errors.fullName && errors.fullName.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder="Email" 
                                    defaultValue={user.email || ""}
                                    type="email"
                                    {...register("email", { required: true })}
                                    className="d-block w-100 form-control"
                                ></input>
                                {errors.email && errors.email.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder="Address" 
                                    type="text"
                                    {...register("address", { required: true })}
                                    className="d-block w-100 form-control"
                                    rows="4" 
                                ></input>
                                {errors.address && errors.address.type === "required" && <p className="error-message">This field is required</p>}
                            </div>                       
                            
                            <input type="submit" value="Book now" className="her-main-btn d-block mt-4 d-block mx-auto" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VillaDetailsPage;