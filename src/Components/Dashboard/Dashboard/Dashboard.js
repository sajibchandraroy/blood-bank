import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { faCalendar, faGripHorizontal, faHome, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Dashboard.css';
import { UserContext } from '../../../App';
import { handleSignOut } from '../../Login/LoginManager';
import { admin } from '../../fakeData/AdminData';
import BloodDonationUser from '../Blood/BloodDonationUser';
import BloodRequistUser from '../Blood/BloodRequistUser';
import DateForDonation from '../../Admin/DateForDonation'
import AllDonorList from '../../Admin/AllDonorList';
import AllBloodRequisitor from '../../Admin/AllBloodRequisitor';


const Dashboard = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [clickedItem, setClickedItem] = useState('donation');    
    const [isAdmin, setIsAdmin] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    useEffect(() => {
        admin.map(data => {
            if (data.email == loggedInUser.email) {
                setIsAdmin(true);
            }
        })

    })
    const signOut = () => {
        setLoggedInUser({});
        localStorage.clear();
        sessionStorage.clear();
        history.push("/");
    }

    return (

        <section>
            <div className="row backgroundDashboard">
                <div className="col-md-2">
                    <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/dashboard" className="text-white">
                                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white">
                                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white">
                                    <FontAwesomeIcon icon={faHome} /> <span onClick={() => setClickedItem('donation')}>Blood Donate</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white">
                                    <FontAwesomeIcon icon={faHome} /> <span onClick={() => setClickedItem('requisition')}>Blood request</span>
                                </Link>
                            </li>

                            {isAdmin && 
                                <div>
                                    <li>
                                        <Link className="text-white">
                                            <FontAwesomeIcon icon={faCalendar} /> <span onClick={() => setClickedItem('appointment')}>Donation / Requisting Schduling</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white">
                                            <FontAwesomeIcon icon={faCalendar} /> <span onClick={() => setClickedItem('allDonor')}>All Donor list</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white">
                                            <FontAwesomeIcon icon={faCalendar} /> <span onClick={() => setClickedItem('allRequisitor')}>All Blood Requisitor list</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white" >
                                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                                        </Link>
                                    </li>
                                </div>}
                        </ul>
                        <div>
                            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={signOut}>Logout</span></Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-9 pl-4 pt-5">
                    <div class="d-flex bd-highlight mb-3">
                        <div class="mr-auto p-2 bd-highlight"><h1>Welcome to our Blood Bank</h1></div>
                        <div class="p-2 bd-highlight"><img src={loggedInUser.photo} width="50px" height="auto" alt="" /></div>
                        <div class="p-2 bd-highlight">{loggedInUser.name}</div>

                    </div>
                    <div>
                        {clickedItem === 'donation' && <BloodDonationUser />}
                        {clickedItem === 'requisition' && <BloodRequistUser />}
                        {clickedItem === 'appointment' && <DateForDonation isAdmin = {isAdmin}/>}
                        {clickedItem === 'allDonor' && <AllDonorList isAdmin = {isAdmin}/>}
                        {clickedItem === 'allRequisitor' && <AllBloodRequisitor isAdmin = {isAdmin}/>}
                    </div>
                </div>                
            </div>
        </section>
    );
};

export default Dashboard;