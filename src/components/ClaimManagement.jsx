import React, { Component } from 'react';
import Login from './Login';
import Logout from './logout';
import Error from './Error';
import GetAllClaims from './GetAllClaims';
import Header from './Header';
import { Router,Route,Routes } from 'react-router-dom';
import GetClaimsForUser from './GetClaimsForUser'
import authenticationService from '../services/authenticationService';


class ClaimManagement extends Component {
    render() {
        return (
                    <div className="container">
                        
                        <Header/>
                        <Routes>
        
                            <Route path='/' exact element={<Login/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path ='/error' element={<Error/>}/>
                            <Route path ='/getallclaims' element={<GetAllClaims/>}/>
                            <Route path = "/getuserbyid" element ={<GetClaimsForUser/>}/>
                            <Route path = "/logout" element={<Logout/>}/>
                            
                        </Routes>
      
      
    
                    </div>
                );
                }
}

export default ClaimManagement;