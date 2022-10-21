import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            isUserLogged:false
        }
    }
    componentDidMount(){
        console.log(this.state.isUserLogged)
        this.setState({isUserLogged:AuthenticationService.isUserloggedIn()});
}
    render() {
            return (
                <div>
                    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mt-3'>
                        <div className='container-fluid'>
                            <div className=' navbar-brand'><h3>Claim Management</h3></div>
                            <ul className='navbar-nav'>
                                {this.state.isUserLogged&&<li className='nav-item'><Link className='nav-link active' to="/getuserclaims">Your Claims</Link></li>}
                                {this.state.isUserLogged&&<li className='nav-item'><Link  className='nav-link active' to="">Apply for a claim</Link></li>}
                            </ul>
                            <div className='navbar-nav navbar-collapse justify-content-end'>
                                {this.state.isUserLogged&&<button className="btn btn-default" ><Link to="/logout">Logout</Link></button>}
                            </div>
                        </div>
                    </nav>
                </div>
            );
    }
}

export default Header;