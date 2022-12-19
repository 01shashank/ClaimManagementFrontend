import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            isUserLogged:false,
            isUserAdmin:false,
            isUserNormal:false
        }
    }
    componentDidMount(){
        this.setState({isUserLogged:AuthenticationService.isUserloggedIn()});
        const role=sessionStorage.getItem('role')
        if(role=="ROLE_ADMIN"){
            this.setState({isUserAdmin:true})
        }
        else{
            this.setState({isUserNormal:true})
        }
        
        
    }
    

    render() {
            return (
                <div>
                    {console.log(this.state.role)}
                    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mt-3'>
                        <div className='container-fluid'>
                            <div className=' navbar-brand'><h3>Claim Management</h3></div>
                            <ul className='navbar-nav'>
                                {this.state.isUserLogged && this.state.isUserAdmin && <li className='nav-item'><Link className='nav-link active' to="/admindashboard">Dashboard</Link></li>}
                                {this.state.isUserLogged && this.state.isUserAdmin && <li className='nav-item'><Link className='nav-link active' to="/addauser">Add a User</Link></li>}
                                {this.state.isUserLogged && this.state.isUserAdmin && <li className='nav-item'><Link  className='nav-link active' to="/addanadmin">Add an Admin</Link></li>}
                                {this.state.isUserLogged && this.state.isUserAdmin && <li className='nav-item'><Link  className='nav-link active' to="/getallusers">Get All Users</Link></li>}

                                {this.state.isUserLogged && this.state.isUserNormal && <li className='nav-item'><Link  className='nav-link active' to="/getuserclaims">View My Claims</Link></li>}
                                {this.state.isUserLogged && this.state.isUserNormal && <li className='nav-item'><Link  className='nav-link active' to="/getuserpolicies">View My Policies</Link></li>}
                                {this.state.isUserLogged && this.state.isUserNormal && <li className='nav-item'><Link  className='nav-link active ' to="/savepolicy">Add Policy Details</Link></li>}
                                {this.state.isUserLogged && this.state.isUserNormal && <li className='nav-item'><Link  className='nav-link active ' to="/savec">Make a Claim</Link></li>}
                            </ul>
                            <div className='navbar-nav navbar-collapse justify-content-end'>
                                {this.state.isUserLogged&&<button className='btn btn-secondary' ><Link to="/logout" style={{color:"white"}}>Logout</Link></button>}
                            </div>
                        </div>
                    </nav>
                </div>
            );
    }
}

export default Header;