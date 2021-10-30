import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddVillaPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        axios.post('http://localhost:5000/villas', data)
        .then(res => {
            console.log(res);
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
                <div className="row py-8">
                    <div className="col">
                        <h1 className="text-center mb-5">Add new villa</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input 
                                    placeholder="Name of the villa" 
                                    type="text"
                                    {...register("name", { required: true })}
                                    className="d-block w-100"
                                />
                                {errors.name && errors.name.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div className="mb-3">
                                <textarea
                                    placeholder="Description" 
                                    type="text"
                                    {...register("description", { required: true })}
                                    className="d-block w-100 mb-4"
                                    rows="4" 
                                ></textarea>
                                {errors.description && errors.description.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div className="mb-3">
                                <input 
                                    placeholder="Image url" 
                                    type="text"
                                    {...register("imageUrl", { required: true })}
                                    className="d-block w-100 mb-4"
                                />
                                {errors.imageUrl && errors.imageUrl.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div>
                                <input 
                                    placeholder="Number of guest" 
                                    type="number"
                                    {...register("guest", { required: true })}
                                    className="d-block w-100 mb-4"
                                />
                                {errors.guest && errors.guest.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div>
                                <input 
                                    placeholder="Villa size/dimension" 
                                    type="number"
                                    {...register("dimension", { required: true })}
                                    className="d-block w-100 mb-4"
                                />
                                {errors.dimension && errors.dimension.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div className="mb-3">
                                <input 
                                    placeholder="View of the villa" 
                                    type="text"
                                    {...register("view", { required: true })}
                                    className="d-block w-100"
                                />
                                {errors.view && errors.view.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            <div>
                                <input 
                                    placeholder="Cost per night" 
                                    type="number"
                                    {...register("cost", { required: true })}
                                    className="d-block w-100 mb-4"
                                />
                                {errors.cost && errors.cost.type === "required" && <p className="error-message">This field is required</p>}
                            </div>
                            
                            
                            <input type="submit" value="Add Villa" />
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddVillaPage;