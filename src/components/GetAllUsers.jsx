import React, { Component } from 'react';
import axios from 'axios';
import GetAllClaimsService from '../services/GetAllClaimsService';
import { setupAuthenticationInterceptor } from './Login';
import Header from './Header';
import history from './history';


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

    removeUser=(uid)=>{
        console.log(uid)
        setupAuthenticationInterceptor()
        axios.delete(`http://localhost:9090/deleteuser/${uid}`)
        .then((response)=>{
            console.log(response)
            alert("User Added Succesfully")
        })
        .catch((error) => {
            console.log(error);
        });
        new Header().getUserRole(false);
        
        history.push("/getallclaims")
        window.location.reload();
    }


    render() {
        return (
            
            <div className='container-fluid '>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email </th>
                            <th>Authorities</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.Users.map(
                                user =>
                                <tr key={user.user_Id}>
                                    <td>{user.user_first_name}</td>
                                    <td>{user.usre_last_name}</td>
                                    <td>{user.userEmail}</td>
                                    
                                    <td >{user.authorities.map(authority=>authority.authority)} </td>
                                    <td><button type="button" onClick={()=>{this.removeUser(user.user_Id)}} className='btn btn-danger'>Remove</button></td>
                                    
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