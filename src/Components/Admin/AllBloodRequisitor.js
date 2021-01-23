import React, { useEffect, useState } from 'react';

const AllBloodRequisitor = ({isAdmin}) => {
    const [bloodRequisition, setBloodRequisition] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/request', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 authorization: {isAdmin}
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBloodRequisition(data)
            }
                )
    }, []);
    return (
        <div>
            <table className="table table-borderless" style={{ backgroundColor: "#F4FDFB" }}>
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email ID</th>
                        <th className="text-secondary" scope="col">Mobile No</th>
                        <th className="text-secondary" scope="col">Address</th>
                        <th className="text-secondary" scope="col">physcical Condition</th>
                        <th className="text-secondary" scope="col">Requirement Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        bloodRequisition.map((bloodRequisition, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{bloodRequisition.name}</td>
                                <td>{bloodRequisition.email}</td>
                                <td>{bloodRequisition.mobileNumber}</td>
                                <td>{"Thana:" + bloodRequisition.policeStation + ", District:" + bloodRequisition.district}</td>
                                <td>{"Weight:" + bloodRequisition.weight + "Gender:" + bloodRequisition.gender}</td>
                                <td>{bloodRequisition.dateForRequirement}</td>                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default AllBloodRequisitor;