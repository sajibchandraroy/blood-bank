import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const BloodDonationUser = () => {
    const [donationRequest, setDonationRequest] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const currentform = useRef(null);
    const onSubmitVerification = data => {
        const mobileNumber = data.mobileNumber;
        fetch(`https://gentle-dawn-31487.herokuapp.com/donor/${mobileNumber}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: "pass"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {              
                    data.map(data => {
                        const bloodDonateDate = data.date;
                        var date1 = new Date(bloodDonateDate);
                        var date2 = new Date();
                        var diffDays = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
                        const x = Math.round(diffDays)
                        if (x > 3) {
                            setDonationRequest(true);
                        }
                        else (
                            alert('You are not eligible to donate blood or less than three months for previous blood donation ')
                        )
                    })
                }
                else {
                    console.log('okay')
                    setDonationRequest(true);
                }
            })
    }

    const onSubmit = (data) => {
        console.log(data)
        fetch('https://gentle-dawn-31487.herokuapp.com/donor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    currentform.current.reset();
                    alert('Order placed successfully')
                }
            })
    }
    return (
        <div>
            <h3>Please fill the form for blood donation</h3>
            {
                donationRequest ? <form className="" ref={currentform} onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <div className="col-3">
                            <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-3">
                            <input type="text" ref={register({ required: true })} name="mobileNumber" placeholder="Mobile Number" className="form-control" />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-3">
                            <input type="text" ref={register({ required: true })} name="alternativeMobileNumber" placeholder="alternate MobileNumber" className="form-control" />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-3">
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
                                <option disabled={false} value="Not set">Select Gender</option>
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
                            <input ref={register({ required: true })} className="form-control" name="height" placeholder="height" type="number" />
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
                    :
                    <form onSubmit={handleSubmit(onSubmitVerification)}>
                        <input name="mobileNumber" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.mobileNumber && <span>This field is required</span>}
                        <input type="submit" />
                    </form>

            }

        </div>

    );
};

export default BloodDonationUser;