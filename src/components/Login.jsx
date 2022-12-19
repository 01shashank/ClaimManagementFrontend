import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AuthenticationService from '../services/AuthenticationService';
import { Link } from 'react-router-dom';
import Header from './Header';
import LoginService from '../services/LoginService';
import UserService from '../services/UserService';

const Login =(props)=>{
  const navigate = useNavigate();
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  const[Users,setUsers] = useState([]);
  const[role,setRole] = useState("");
 
    
  function loginClicked(props){

    LoginService.userLogin(username,password)
    .then((response) =>{
      AuthenticationService.registerSuccesfulUser(username,response.data.token)
      UserService.getUserAuthorities(username).then((response)=>{
        let roleList = response.data
        roleList.map((role)=>{
          if(role.authority.includes("ROLE_ADMIN")){
            setRole("ROLE_ADMIN")
            AuthenticationService.setRoleOfUser("ROLE_ADMIN")
            navigate("/admindashboard")
            window.location.reload()
          }
          else{
            setRole(role.authority);
            AuthenticationService.setRoleOfUser("ROLE_USER")
            navigate("/getuserclaims")
            window.location.reload()
          }
        })
      })
    .catch((error)=>{
      console.log(error.response.data);
    });

   
  })
  .catch((error)=>{
    console.log(error.response.data.errormessage);
    alert(error.response.data.errormessage)
    window.location.reload()
  })
    
    }

  return (
    <div className='container bg-info'>
      <div className=' row justify-content-center'>
        <div className='col-6'>
          <form className='container'>
            <div className='mt-5 mb-10'>
              <h2 className="h1 display-5 text-center">USER LOGIN</h2>
            </div>

            <div className="form-group mb-3 mt-5" >
              <label>Email</label>
              <input type="text" className='form-control ' placeholder='Enter email' name="username" required value={username} onChange={(event)=>setUsername(event.target.value)}/>
            </div>

            <div className="form-group mb-5">
              <label>Password</label>
              <input type="password" className='form-control ' placeholder='Enter password' name="password" required value={password} onChange={(event=>setPassword(event.target.value))}/>
            </div>

            <div className="button-container text-center mb-5">
             <button type="button" className='btn btn-primary' onClick={loginClicked} >Submit</button>
            </div>

            <div className="form-group text-center  mb-5">
             <big type="text" className='form-control bg-info'><Link className='link-dark' to="/addauser">Not Registered yet?<br/>Click Here</Link></big>
            </div>
          <div>
        </div>
      </form>
    </div>
  </div>
  </div>
  );

}
 
 
  

export default Login;