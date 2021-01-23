import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const BloodRequistUser = () => {
    const { register, handleSubmit, errors } = useForm();
    const currentform = useRef(null);
    const onSubmit = (data) => {
        console.log(data)
        fetch('https://gentle-dawn-31487.herokuapp.com/request', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    currentform.current.reset(); 
                    alert('Requist placed successfully')
                }
            })
    }
    return (
        <div>
            <h3>Please fill the form for blood Requisition</h3>
            <form className="" ref={currentform} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                    <div className="col-4">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-4">
                        <input type="text" ref={register({ required: true })} name="patientName" placeholder="Patient Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-4">
                        <input type="text" ref={register({ required: true })} name="relation" placeholder="relation with patient" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-4">
                        <input type="text" ref={register({ required: true })} name="mobileNumber" placeholder="Mobile Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-4">
                        <input type="text" ref={register({ required: true })} name="alternativeMobileNumber" placeholder="alternate MobileNumber" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-4">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-2">
                        <input type="text" ref={register({ required: true })} name="bloodGroup" placeholder="Blood group" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="col-2">
                        <select className="form-control" name="gender" ref={register({ required: true })} >
                            <option disabled={true} value="Not set">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not set">Other</option>
                        </select>
                        {errors.gender && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-2">
                        <select className="form-control" name="religion" ref={register({ required: true })} >
                            <option disabled={true} value="Not set">Select Gender</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Islam">Islam</option>
                            <option value="Buddist">Buddist</option>
                            <option value="Christan">Christan</option>
                            <option value="Others">Others</option>
                        </select>
                        {errors.gender && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-2">
                        <input ref={register({ required: true })} className="form-control" name="dateOfBirth" placeholder="Your Age" type="number" />
                        {errors.age && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-2">
                        <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                        {errors.weight && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-2">
                        <input ref={register({ required: true })} className="form-control" name="dateForRequirement" placeholder="Date For Requirement" type="date" />
                        {errors.weight && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-4">
                        <input type="text" ref={register({ required: true })} name="presentAddress" placeholder="Present address holding name" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-2">
                        <input ref={register({ required: true })} className="form-control" name="union" placeholder="Name of Union" type="text" />
                        {errors.age && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-2">
                        <input ref={register({ required: true })} className="form-control" name="postOffice" placeholder="Post Office" type="text" />
                        {errors.weight && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-2">
                        <input ref={register({ required: true })} className="form-control" name="policeStation" placeholder="Police Station" type="text" />
                        {errors.age && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-2">
                        <input ref={register({ required: true })} className="form-control" name="district" placeholder="Name of district" type="text" />
                        {errors.weight && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <div className="form-group text-right">
                    <button type="submit" className="btn btn-brand">Send</button>
                </div>
            </form>
        </div>
    );
};

export default BloodRequistUser;