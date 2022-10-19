import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import authenticationService from '../services/authenticationService';

class Header extends Component {

    constructor(props){
        super(props)
        this.state={
        isUserLogged:false}
    }
    
    render() {
        this.setState={
            isUserLogged  :authenticationService.isUserloggedIn()
        }
        console.log(this.isUserlogged)
            return (
                <div className='container'>
                    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <div className=' navbar-brand'><h4>Claim Management</h4></div>
                        <ul className='navbar-nav'>
                            
                            {this.isUserlogged && <li className='nav-item'><Link className='nav-link active' to="">Your Claims</Link></li>}
                            {this.isUserlogged && <li className='nav-item'><Link  className='nav-link active' to="">Apply for a claim</Link></li>}
                        </ul>
                        <ul className='navbar-nav  navbar-collapse justify-content-end'>
                            {!this.isUserlogged && <li className='nav-item'><Link className='nav-link active' to="/login">Login</Link></li>}
                             <li className='nav-item'><Link className='nav-link active' to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            );
    }
}

export default Header;