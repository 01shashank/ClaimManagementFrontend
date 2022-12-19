import React, { Component, Fragment } from 'react';
import Login from './Login';
import Logout from './logout';
import GetAllClaims from './GetAllClaims';
import Header from './Header';
import { Route,Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import GetUserClaims from './GetUserClaims';
import SaveC from './SaveC';
import GetSingleClaim from './GetSingleClaim';
import GetAllUsers from './GetAllUsers';
import AddAUser from './AddAUser'
import AdminDashboard from './AdminDashboard';
import AddAnAdmin from './AddAnAdmin'
import SavePolicy from './SavePolicy';
import GetPendingClaims from './PendingClaims';
import GetApprovedClaims from './ApprovedClaims';
import GetRejectedClaims from './RejctedClaims';
import GetUserPolicies from './GetUserPolicies';

class ClaimManagement extends Component {

    render() {
        return (
                <div className="container">
                    <Fragment>
                    <Header/>
                    <Routes>
                        <Route path='/' exact element={<PrivateRoute/>}>
                            <Route path='/' exact element={<Login/>}/>
                            <Route path ='/getallclaims' element={<GetAllClaims/>}/>
                            <Route path = "/logout" element={<Logout/>}/>
                            <Route path="/getuserclaims" element={<GetUserClaims/>}/>
                            <Route path="/savec" element={<SaveC/>}/>
                            <Route path="/claim/:claim_id" element={<GetSingleClaim/>}/>
                            <Route path="/getallusers" element={<GetAllUsers/>}/>
                            <Route path='/admindashboard' element={<AdminDashboard/>}/>
                            <Route path='/addanadmin' element={<AddAnAdmin/>}/>
                            <Route path='/savepolicy' element={<SavePolicy/>}/>
                            <Route path='/getpendingclaims' element={<GetPendingClaims/>}/>
                            <Route path='/getapprovedclaims' element={<GetApprovedClaims/>}/>
                            <Route path='/getrejectedclaims' element={<GetRejectedClaims/>}/>
                            <Route path='/getuserpolicies' element={<GetUserPolicies/>}/>
                            
                        </Route>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/addauser" element={<AddAUser />}/>
                        
                        
                    </Routes>
                    </Fragment>
                </div>
                );
            }
}
export default ClaimManagement;