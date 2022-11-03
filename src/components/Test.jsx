import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AuthenticationService from '../services/AuthenticationService';
import { Dropdown } from 'react-bootstrap';
import Select from "react-select"
import { setupAuthenticationInterceptor } from './Login';
import DocumentService from '../services/DocumentService'



const Test =(props)=>{
  const navigate = useNavigate();
  const[doc,setDoc] = useState({});



    
  const submitClicked=(e)=>{
    let username=AuthenticationService.getLoggedUsername()
    // let file = e.target.files[0];
    // console.log(file);
    // console.log(username)
    // console.log(claim)
    // console.log(typeof claim.policy.policy_Id)
    //console.log(claim)
    const POST_CLAIM_URL = `http://localhost:9090/savedoc/${1}`;

    setupAuthenticationInterceptor()
    axios.post(POST_CLAIM_URL,doc,{
        headers: { 
            "Content-Type": 'multipart/form-data'
            
          }
    })
      .then((response) => {
        //console.log(response.data);
        let doc= response.data;
        console.log(doc)
      })
      .catch((error) => {
        console.log(error);
      });

      
      //navigate("/getuserclaims")

      
     // window.location.reload()
    
  }



  return (
    <form className='form-inline'>
        <div>
            <div className='row mt-3'>
            <div className='col-6'>
            <h4>Documents </h4> 
                <label className="form-label" for="customFile">(only pdf and word files are allowed)</label>
                <input type="file" onChange={(e)=>
                 {
                    const formData = new FormData()
                    if(e.target.files[0]){
                    formData.append('file',e.target.files[0])
                    for (var key of formData.entries()) {
                        console.log(key[0] + ', ' + key[1])}
                    setDoc(formData);
                    }
                     
                 } 
                }  />
                </div>
            </div>
            <div className="button-container text-center mt-3 mb-3">
                <button type="button" onClick={submitClicked} className='btn btn-primary'>Submit</button>
            </div>

        </div>
    </form>
);
}

  
 
 
  

export default Test;