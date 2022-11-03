import React, { Component } from 'react';
import axios from 'axios';
import GetAllClaimsService from '../services/GetAllClaimsService';
import { setupAuthenticationInterceptor } from './Login';


class GetAllUsers extends Component {
    constructor(props){
        super(props)
        this.state = {
            Users: []
        }
    }

    componentDidMount(){
        const GET_USERS_URL = "http://localhost:9090/getallusers";
        setupAuthenticationInterceptor()
        axios.get(GET_USERS_URL).then((response) =>{
            this.setState({Users:response.data});
            
        });
    }


    render() {
        return (
            
            <div className='container-fluid '>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            
                            <th>First Name</th>
                            <th>Email </th>
                            <th>Password</th>
                            <th>Authorities</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.Users.map(
                                user =>
                                <tr key={user.user_Id}>
                                    <td>{user.user_first_name}</td>
                                    <td>{user.userEmail}</td>
                                    <td>{user.user_password}</td>
                                    <td >{user.authorities.map(authority=>authority.authority)} </td>
                                   
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
        );
    }
}

export default GetAllUsers;