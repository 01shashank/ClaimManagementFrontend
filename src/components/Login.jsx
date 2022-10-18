import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter as router,useNavigate,Navigate,useLocation,useParams} from 'react-router-dom'
import './style.css'

const Login =()=>{
        const navigate = useNavigate();
          const[username,setUsername] = useState("");
          const[password,setPassword] = useState("");
        
        //this.setupAuthenticationInterceptor()
    
     function loginClicked(){
      //this.setupAuthenticationInterceptor()
    
      if(username==='jigneshj@gmail.com' && password==='jignesh@123'){
        console.log('Login Succesfull');
        navigate("/getallclaims")
             
    }
      else{
        console.log('login failed')
  
      }
    }
        return (
            <div className="form">
            <form>
              <div>
                <h1>USER LOGIN </h1>
              </div>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="username" required value={username} onChange={(event)=>setUsername(event.target.value)}/>
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="password" required value={password} onChange={(event=>setPassword(event.target.value))}/>
              </div>
              <div className="button-container">
                <button type="button"  onClick={loginClicked} >Submit</button>
              </div>
              <div>
              </div>
            </form>
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