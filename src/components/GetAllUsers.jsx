import React, { Component } from 'react';
import Header from './Header';
import UserService from '../services/UserService';


class GetAllUsers extends Component {
    constructor(props){
        super(props)
        this.state = {
            Users: []
        }
    }

    componentDidMount(){
        UserService.getAllUsers().then((response) =>{
            this.setState({Users:response.data});
            
        })
        .catch((error)=>console.log(error));
    }

    removeUser=(uid)=>{
        UserService.deleteUser(uid)
        .then((response)=>{
            console.log(response)
            alert("Removed User Succesfully")
            window.location.reload()
        })
        .catch((error) => {
            console.log(error);
        });
        new Header().getUserRole(false);
        
        
    }

    render() {
        return (
            
            <div className='container-fluid mt-3'>
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
                                    <td>{user.user_last_name}</td>
                                    <td>{user.user_Email}</td>
                                    
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