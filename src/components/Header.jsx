import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
let role=true;
class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            isUserLogged:false,
            isUserAdmin:true,
           // role:true
        }
    }
    componentDidMount(){
        this.setState({isUserLogged:AuthenticationService.isUserloggedIn()});
        //this.setState({role:r_stat})
        
        
    }
    getUserRole=(r_stat)=>{
        //console.log(role)
        role=r_stat;
        console.log(role);
        
    }
    

    render() {
            return (
                <div>
                    {console.log(this.state.role)}
                    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mt-3'>
                        <div className='container-fluid'>
                            <div className=' navbar-brand'><h3>Claim Management</h3></div>
                            <ul className='navbar-nav'>
                                {this.state.isUserLogged&& role&& <li className='nav-item'><Link className='nav-link active' to="/getuserclaims">Your Claims</Link></li>}
                                {this.state.isUserLogged&&role&&<li className='nav-item'><Link  className='nav-link active' to="/savec">Make a claim</Link></li>}
                                {this.state.isUserLogged&&!role&&<li className='nav-item'><Link  className='nav-link active' to="/getallclaims">Get all claims</Link></li>}
                                {this.state.isUserLogged&&!role&&<li className='nav-item'><Link  className='nav-link active' to="/getallusers">Get all Users</Link></li>}
                                {this.state.isUserLogged&&!role&&<li className='nav-item'><Link  className='nav-link active' to="/addauser">Add a User</Link></li>}
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