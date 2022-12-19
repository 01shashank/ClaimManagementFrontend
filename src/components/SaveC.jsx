import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AuthenticationService from '../services/AuthenticationService';
import { Dropdown } from 'react-bootstrap';
import Select from "react-select"
import { setupAuthenticationInterceptor } from './Login';
import DocumentService from '../services/DocumentService'
import ClaimsService from '../services/ClaimsService';
import UserService from '../services/UserService';
import PolicyService from '../services/PolicyService';



const SaveC =(props)=>{
  const navigate = useNavigate();
  const[policies,setPolicies]=useState([])
  const[policyItems,setPolicyItems]=useState([])
  const[doc,setDoc] = useState({});
  let username=AuthenticationService.getLoggedUsername()
  var user_id = sessionStorage.getItem('user_id')
  const[claim,setClaim] = useState({
      policy:{},
      hospitalization:{
          hospital_doctor:"",
          hospital_medical_expenses:0,
          hospital_non_medical_expenses:0,
          hospital_reason:""
      }
  });
  

  useEffect(()=>{
    
    PolicyService.getUserPolicies(user_id).then((response)=>{
        setPolicies(response.data)
    
    })
    .catch((error)=>{
        console.log(error)
    })
  })
  

const onChnageHospitalDoctor=(e)=>{
    setClaim({
        ...claim,
        hospitalization:{
            ...claim.hospitalization,
            [e.target.name]:e.target.value
        }
    });
}

const onChnageHospitalReason=(e)=>{
    setClaim({
        ...claim,
        hospitalization:{
            ...claim.hospitalization,
            [e.target.name]:e.target.value
        }
    });
}

const onChnageHospitalNonMedExp=(e)=>{
    setClaim({
        ...claim,
        hospitalization:{
            ...claim.hospitalization,
            [e.target.name]:parseInt( e.target.value)
        }
    });

}

const onChnageHospitalMedExp=(e)=>{
    setClaim({
        ...claim,
        hospitalization:{
            ...claim.hospitalization,
            [e.target.name]:parseInt( e.target.value)
        }
    });
}

    
  const submitClicked=(e)=>{
       // console.log(claim)

        ClaimsService.postClaim(user_id,claim)
        .then((response) => {
            console.log(response.data);
            
            let claim1= response.data;
            console.log(claim1)
            DocumentService.saveDoc(claim1.claim_id,doc)
            .then((response)=>{console.log(response.data);alert("Claim Saved")})
            .catch((error)=>console.log(error.data))
        })
        .catch((error) => {
            console.log(error.response.data);
            alert(error.response.data)
        });

        
        navigate("/getuserclaims")

        
        window.location.reload()
        
    
  }



  return (
    <form className='form-inline'>
        

        <div className='mt-3'><h4>Policy details</h4>
            <div >
                <label className='mb-2'>Select Policy Name</label> 
                <div className='row'>
                    <div className='form-group col-6'> 
                        <select onChange={(e=>{
                            policies.map(policy=>{
                                if(policy.policyName===e.target.value){
                                    
                                    let pol = policy
                                    setClaim({...claim,policy:pol})
                                    console.log(policy)
                                }
                            })
                        }
                            )}>
                            <option disabled selected={true}>Select Your Policy</option>
                            {
                                policies.map(option => 
                                    <option label={option.policyName}  value={option.policyName} >                                  
                                        {option.policyName}
                                    </option>
                                )
                            }
                        );
                        </select>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='mt-3'><h4>Hospitalization details</h4> 
            <div className='row'>
                <div className='form-group col-6'> 
                    <label> Reason of Hospitalization</label>
                    <input type="text" name="hospital_reason" value={claim.hospitalization.hospital_reason} onChange={onChnageHospitalReason} className="form-control input-group-lg reg_name"  placeholder="Enter the reason of Hospitalization"/>
                </div>
                <div className='form-group col-6'> 
                    <label>Doctor</label>
                    <input type="text" name="hospital_doctor" value={claim.hospitalization.hospital_doctor} onChange={onChnageHospitalDoctor} className="form-control input-group-lg reg_name"  placeholder="Enter Name of the Doctor consulted"/>
                </div>
            </div>
            <div className='row'>
                <div className='form-group col-6'> 
                    <label> Medical Expenses</label>
                    <input type="number" name="hospital_medical_expenses" value={claim.hospitalization.hospital_medical_expenses} onChange={onChnageHospitalMedExp} className="form-control input-group-lg reg_name"  placeholder="Enter the total Medical Expenses"/>
                </div>
                <div className='form-group col-6'> 
                    <label>Non-Medical Expenses</label>
                    <input type="number" name="hospital_non_medical_expenses" value={claim.hospitalization.hospital_non_medical_expenses} onChange={onChnageHospitalNonMedExp} className="form-control input-group-lg reg_name"  placeholder="Enter the total Non-Medical Expenses"/>
                </div>
            </div>
            <div className='row mt-3'>
            <div className='col-6'>
            <h4>Documents </h4> 
                <label className="form-label" for="customFile">(only pdf and word files are allowed)</label><br/>
                <input type="file" multiple accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                    onChange={(e)=>
                    {
                        
                        //console.log(e.target.files.length)
                        const formData = new FormData()
                        if(e.target.files[0]){
                        for(var i=0;i<e.target.files.length;i++){
                        formData.append('file',e.target.files[i])}
                        for (var key of formData.entries()) {
                            console.log(key[0] + ', ' + key[1])}
                        console.log(formData)
                        setDoc(formData);
                    }
                     
                 } 
                }  />
                </div>
            </div>
            <div className="button-container text-center mt-3 mb-3">
                <button type="button" onClick={submitClicked} className='btn btn-primary btn-lg'>Submit</button>
            </div>
        
        
        </div>
    </form>
);
}

  
 
 
  

export default SaveC;