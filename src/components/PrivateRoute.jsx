import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authenticationService from '../services/AuthenticationService';

const AuthenticatedRoute = () => {
    const auth = authenticationService.isUserloggedIn(); 
    return  auth? <Outlet/> : <Navigate to="/login" />;
}


export default AuthenticatedRoute;