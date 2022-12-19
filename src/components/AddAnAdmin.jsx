import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';



const SaveAdmin =(props)=>{
  const navigate = useNavigate();
  const[user,setUser] = useState({
        "user_Email": "",
        "user_password": "",
        "user_first_name": "",
        "user_last_name": ""
        });


  const onChnageFirstName=(e)=>{
    setUser({
        ...user,
        [e.target.name]:e.target.value
        })
        
    }
    const onChnageLastName=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
            })
            
        }
        const onChnageEmail=(e)=>{
            setUser({
                ...user,
                [e.target.name]:e.target.value
                })
                
            }
            const onChnagePassword=(e)=>{
                setUser({
                    ...user,
                    [e.target.name]:e.target.value
                    })
                    
                }

    
  const submitClicked=()=>{
    console.log(user)
    UserService.registerAdmin(user)
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })
    if(AuthenticationService.isUserloggedIn()){
      navigate("/getallclaims")
      alert("Admin Inserted Succesfully")
    }
    else{
      navigate("/login")
      alert("Credentials Added")
    }
    window.location.reload()
  }



  return (
    
    <div className='container'>
    <div className=' row justify-content-center'>
      <div className='col-6'>
        <form className='container'>
          <div className='mt-5 mb-10'>
            
            <h2 className="h1 display-5 text-center">Add an Admin</h2>
          </div>

          <div className="form-group mb-3 mt-3" >
            <label>First Name</label>
            <input type="text" className='form-control' name="user_first_name" value={user.user_first_name} onChange={onChnageFirstName}   placeholder='Enter First Name' required/>
          </div>

          <div className="form-group mb-3 mt-3" >
            <label>Last Name</label>
            <input type="text" className='form-control' name="user_last_name" value={user.user_last_name} onChange={onChnageLastName}   placeholder='Enter Last Name' required/>
          </div>

          <div className="form-group mb-3 mt-3" >
            <label>Email</label>
            <input type="email" className='form-control' name="user_Email" value={user.user_Email} onChange={onChnageEmail}   placeholder='Enter email' required/>
          </div>

          <div className="form-group mb-5">
            <label>Password</label>
            <input type="password" name="user_password" value={user.user_password} onChange={onChnagePassword}  className='form-control ' placeholder='Enter password' required/>
          </div>

          <div className="button-container text-center mb-5">
           <button type="button" className='btn btn-primary' onClick={()=>submitClicked()} ><b>Submit</b></button>
          </div>
        <div>
      </div>
    </form>
  </div>
</div>
</div>
);
}

  
 
 
  

export default SaveAdmin;