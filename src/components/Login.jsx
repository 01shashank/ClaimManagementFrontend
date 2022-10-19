import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter as router,useNavigate,Navigate,useLocation,useParams} from 'react-router-dom'
import './style.css'
import authenticationService from '../services/authenticationService';
import Header from './Header';

const Login =(props)=>{
        const navigate = useNavigate();
          const[username,setUsername] = useState("");
          const[password,setPassword] = useState("");
        
        //this.setupAuthenticationInterceptor()
    
     function loginClicked(props){
      //this.setupAuthenticationInterceptor()
    
      if(username==='jigneshj@gmail.com' && password==='jignesh@123'){
        console.log('Login Succesfull');
        authenticationService.registerSuccesfulUser(username,password);
        
        navigate("/getallclaims")
             
    }
      else{
        console.log('login failed')
  
      }
    }
        return (
          <div className='container'>
          <div className='row justify-content-center'>
          <div className='col-6'>
            <form className='container'>
              <div className='mt-5'>
                <h2 className="h1 display-6 text-center">USER LOGIN</h2>
              </div>
              <div className="form-group mb-3" >
                <label>Username </label>
                <input type="text" className='form-control' name="username" required value={username} onChange={(event)=>setUsername(event.target.value)}/>
              
              </div>
              <div className="form-group mb-3">
                <label>Password </label>
                <input type="password" className='form-control' name="password" required value={password} onChange={(event=>setPassword(event.target.value))}/>
            
              </div>
              <div className="button-container">
                <button type="button" className='btn btn-success' onClick={loginClicked} >Submit</button>
              </div>
              <div>
              </div>
            </form>
          </div>
          </div>
          </div>
          
        );

//     setupAuthenticationInterceptor(){
//       let username ='jigneshj@gmail.com'
//       let password= 'jignesh@123'
//       let basicAuthHeader= 'Basic ' + window.btoa(username + ":" + password)

//       axios.interceptors.request.use(
//           (config) =>{
//               config.headers.authorization = basicAuthHeader
          
//           return config
//           }
//       )
//   }
// }
  }
  
 
 
  

export default Login;