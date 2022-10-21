import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AuthenticationService from '../services/AuthenticationService';

const Login =(props)=>{
  const navigate = useNavigate();
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  
  
    
  function loginClicked(props){
    if(username==='spsangale@gmail.com' && password==='shashank@123')
      {
        console.log('Login Succesfull');
        AuthenticationService.registerSuccesfulUser(username,password);
        navigate("/getuserclaims")
        
        window.location.reload()     
      }
      else
      {
        console.log('login failed')
      }
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
          <div>
        </div>
      </form>
    </div>
  </div>
  </div>
  );

}

export const setupAuthenticationInterceptor=()=>{
  let username ='spsangale@gmail.com'
  let password= 'shashank@123'
  let basicAuthHeader= 'Basic ' + window.btoa(username + ":" + password)

  axios.interceptors.request.use(
      (config) =>{
          config.headers.authorization = basicAuthHeader
      
      return config
      }
  )
}

  
 
 
  

export default Login;