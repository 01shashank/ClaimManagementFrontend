import React, { Component, Fragment } from 'react';
import Login from './Login';
import Logout from './logout';
import GetAllClaims from './GetAllClaims';
import Header from './Header';
import { Route,Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import GetUserClaims from './GetUserClaims';
import SaveClaim from './SaveClaim';
import SaveC from './SaveC';

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
                            <Route path="/saveclaim" element={<SaveClaim/>}/>
                            <Route path="/savec" element={<SaveC/>}/>
                        </Route>
                        <Route path="/login" element={<Login/>}/>
                        
                    </Routes>
                    </Fragment>
                </div>
                );
            }
}
export default ClaimManagement;