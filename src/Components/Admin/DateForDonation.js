import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const DateForDonation = ({ isAdmin }) => {
    const [donors, setDonors] = useState([]);
    const [status, setStatus] = useState(false);
    const history = useHistory();

    const { register, handleSubmit, watch, errors } = useForm();

    
    const onSubmit = data => {
        console.log(data.mobileNumber)
        const mobileNumber = data.mobileNumber;
        fetch(`https://gentle-dawn-31487.herokuapp.com/donor/${mobileNumber}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: { isAdmin }
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDonors(data)
                setStatus(true)
            })
    }
    const handleChange = (id, e) => {
        const date = e.target.value
        const data = { date: date }
        console.log(data)
        fetch(`https://gentle-dawn-31487.herokuapp.com/donor/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log(result)
                    alert('Status Updated successfully'); 
                    onSubmit(result)                   
                }
            })
    }
    return (
        <div>            
            {status ? <div><h4>Fixing appointment date for Blood donation</h4>
                <table className="table table-borderless" style={{ backgroundColor: "#F4FDFB" }}>                    
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Sr No</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email ID</th>
                            <th className="text-secondary" scope="col">Mobile No</th>
                            <th className="text-secondary" scope="col">Address</th>
                            <th className="text-secondary" scope="col">physcical Condition</th>
                            <th className="text-secondary" scope="col">Appointment Date</th>
                            <th className="text-secondary" scope="col">Date Change/fixed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donors.map((donor, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{donor.name}</td>
                                    <td>{donor.email}</td>
                                    <td>{donor.mobileNumber}</td>
                                    <td>{"Thana:" + donor.policeStation + ", District:" + donor.district}</td>
                                    <td>{"Weight:" + donor.weight + "Gender:" + donor.gender}</td>
                                    <td>{donor.date}</td>
                                    <td>
                                        <form onChange={(e) => handleChange(donor._id, e)}>
                                            <input type="date" name="date" value="" placeholder="Appointment schdule" className="form-control" />
                                        </form>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table> 
                </div>:
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Enter Donor's mobile Number</h4><br></br>
                    <input name="mobileNumber" className="col-6 form-control input-lg mb-2" placeholder="Enter Donor's mobile number during registration" ref={register({ required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.mobileNumber && <span>This field is required</span>}
                    <input type="submit" className="form-control input-lg col-2 btn-outline-success" />
                </form>}
        </div>
    );
};

export default DateForDonation;