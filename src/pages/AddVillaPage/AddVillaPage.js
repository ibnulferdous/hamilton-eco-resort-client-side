import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddVillaPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        axios.post('http://localhost:5000/villas', data)
        .then(res => {
            if(parseInt(res.data.insertedId) > 0) {
                alert('Villa added to the list successfully!');
                reset();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center py-8">
                    <div className="col col-lg-8">
                        <h1 className="text-center text-capitalize display-4 her-heading mb-5">Add new villa</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input 
                                    placeholder="Name of the villa" 
                                    type="text"
                                    {...register("name", { required: true })}
                                    className="d-block w-100 form-control"
                                />
                                {errors.name && errors.name.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div className="mb-3">
                                <textarea
                                    placeholder="Description" 
                                    type="text"
                                    {...register("description", { required: true })}
                                    className="d-block w-100 form-control"
                                    rows="4" 
                                ></textarea>
                                {errors.description && errors.description.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div className="mb-3">
                                <input 
                                    placeholder="First image url" 
                                    type="text"
                                    {...register("imageUrlOne", { required: true })}
                                    className="d-block w-100 mb-4 form-control"
                                />
                                {errors.imageUrlOne && errors.imageUrlOne.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div className="mb-3">
                                <input 
                                    placeholder="Second image url" 
                                    type="text"
                                    {...register("imageUrlTwo", { required: true })}
                                    className="d-block w-100 mb-4 form-control"
                                />
                                {errors.imageUrlTwo && errors.imageUrlTwo.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div className="mb-3">
                                <input 
                                    placeholder="Third image url" 
                                    type="text"
                                    {...register("imageUrlThree", { required: true })}
                                    className="d-block w-100 mb-4 form-control"
                                />
                                {errors.imageUrlThree && errors.imageUrlThree.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div>
                                <input 
                                    placeholder="Number of guest" 
                                    type="number"
                                    {...register("guest", { required: true })}
                                    className="d-block w-100 mb-4 form-control"
                                />
                                {errors.guest && errors.guest.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div>
                                <input 
                                    placeholder="Villa size/dimension" 
                                    type="number"
                                    {...register("dimension", { required: true })}
                                    className="d-block w-100 mb-4 form-control"
                                />
                                {errors.dimension && errors.dimension.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div className="mb-3">
                                <input 
                                    placeholder="View of the villa" 
                                    type="text"
                                    {...register("view", { required: true })}
                                    className="d-block w-100 form-control"
                                />
                                {errors.view && errors.view.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div>
                                <input 
                                    placeholder="Cost per night" 
                                    type="number"
                                    {...register("cost", { required: true })}
                                    className="d-block w-100 mb-4 form-control"
                                />
                                {errors.cost && errors.cost.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            
                            
                            <input type="submit" value="Add Villa" className="her-main-btn d-block mt-4 d-block mx-auto" />
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddVillaPage;