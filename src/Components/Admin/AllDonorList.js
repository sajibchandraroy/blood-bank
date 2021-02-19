import React, { useEffect, useState } from 'react';

const AllDonorList = ({ isAdmin}) => {
    const [donors, setDonors] = useState([]);
    useEffect(() => {
        fetch('https://gentle-dawn-31487.herokuapp.com/donor', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 authorization: {isAdmin}
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDonors(data)
            }
                )
    }, []);
    return (
        <div>
            <h3>List of all Blood Donor's</h3>
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default AllDonorList;