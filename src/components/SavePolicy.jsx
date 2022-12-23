import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AuthenticationService from '../services/AuthenticationService';
import { Dropdown } from 'react-bootstrap';
import Select from "react-select"
import { setupAuthenticationInterceptor } from './Login';
import DocumentService from '../services/DocumentService'
import UserService from '../services/UserService';
import PolicyService from '../services/PolicyService'



const SavePolicy =(props)=>{
  const navigate = useNavigate();

  const[nomineeList,setNomineeList]=useState([{
    policy_user_nominee_name:"",
    policy_user_nominee_age:0,
    policy_user_nominee_relationship:""
  }])
  
  const[policy,setPolicy] = useState({
      policyName:"",
      top_up_amount:0,
      policy_personal_accidental_cover:0,
      policy_start_date:"",
      policy_end_date:"",
      nominee:[]
  });

  const handleAddNominee=()=>{
      setNomineeList([...nomineeList,{
            policy_user_nominee_name:"",
            policy_user_nominee_age:0,
            policy_user_nominee_relationship:""
        }])
       }

  const handleNomineeNameChange=(e,index)=>{
    const {name,value} = e.target
    const list = [...nomineeList]
    list[index][name]=value;
    setNomineeList(list)
    setPolicy({
        ...policy,
        nominee:nomineeList
    })
  }

    
  const submitClicked=(e)=>{
    let username=AuthenticationService.getLoggedUsername()
 
    

        console.log(nomineeList)
        console.log(policy)

        var user_id = sessionStorage.getItem('user_id')
        PolicyService.addPolicy(user_id,policy)
        .then((response) => {
            console.log(response.data);
            alert("Policy Details Saved")
        })
        .catch((error) => {
            console.log(error);
            alert(error.response.data)
        });

        
        navigate("/getuserclaims")

        
        window.location.reload()
        
        console.log(policy)
    
  }



  return (
    <form className='form-inline'>
            <div className='row mt-3'>
                <div className='form-group col-6 mt-1'>
                    <h5 className='mb-2'> Policy Name</h5> 
                    <div className='row'>
                        <div className='form-group col-6'> 
                            <select onChange={(e)=>setPolicy({...policy,policyName:e.target.value})}>
                                <option disabled selected={true}>Select Your Policy</option>
                                <option label='Standard Health Plan' value="Standard Health Plan">Standard Health Plan</option>
                                <option label='Silver Health Plan' value="Silver Health Plan">Silver Health Plan</option>
                                <option label='Gold Health Plan' value="Gold Health Plan">Gold Health Plan</option>
                                <option label='Premium Health Plan' value="Premium Health Plan">Premium Health Plan</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='form-group col-6 mt-1'> 
                    <h5>Top-Up Amount</h5>
                    <input type="number" name="top_up_amount" value={policy.top_up_amount} onChange={e=>setPolicy({...policy,top_up_amount:parseInt(e.target.value)})} className="form-control input-group-lg reg_name"  placeholder="Enter Top-up Amount"/>
                </div>
                <div className='form-group col-6'> 
                    <h5>Policy Personal Accidental Cover </h5>
                    <input type="number" name="policy_personal_accidental_cover" value={policy.policy_personal_accidental_cover}  onChange={e=>setPolicy({...policy,policy_personal_accidental_cover:parseInt(e.target.value)})} className="form-control input-group-lg reg_name"  placeholder="Enter Personal Accidental Cover"/>
                </div>
            </div>
            <div className='row row mt-4'>
                <div className='form-group col-6 mt-1'> 
                    <h5>Start Date</h5>
                    <input type="Date" name="policy_start_date" value={policy.policy_start_date}  onChange={e=>setPolicy({...policy,policy_start_date:e.target.value})} className="form-control input-group-lg reg_name"  placeholder="Enter Start Date of Policy"/>
                </div>
                <div className='form-group col-6'> 
                    <h5>End Date </h5>
                    <input type="Date" name="policy_end_date" value={policy.policy_end_date}  onChange={e=>setPolicy({...policy,policy_end_date:e.target.value})} className="form-control input-group-lg reg_name"  placeholder="Enter End Date of Policy"/>
                </div>
            </div>

    

            <div className='mt-3'><h4>Nominee details</h4>
            {nomineeList.map((singlenominee,index)=>(
                <div key={index}>
                 
                <div className='row row mt-4'>
                    <div className='form-group col-6'> 
                        <h5 >Nominee Name</h5>
                        <input type="text" name="policy_user_nominee_name" value={singlenominee.policy_user_nominee_name} onChange={(e)=>handleNomineeNameChange(e,index)} className="form-control input-group-lg reg_name "  placeholder="Enter Name of Nominee"/>
                    </div>
                    <div className='form-group col-6'> 
                        <h5>Nominee Age</h5>
                        <input type="number" name="policy_user_nominee_age" value={singlenominee.policy_user_nominee_age} onChange={(e)=>handleNomineeNameChange(e,index)} className="form-control input-group-lg reg_name"  placeholder="Enter Age of Nominee"/>
                    </div>
                </div>
                <div className='row row mt-4'>
                    <div className='form-group col-6'> 
                        <h5> Nominee Relationship</h5>
                        <input type="text" name="policy_user_nominee_relationship" value={singlenominee.policy_user_nominee_relationship} onChange={(e)=>handleNomineeNameChange(e,index)} className="form-control input-group-lg reg_name"  placeholder="Enter Relationship with Nominee"/>
                    </div>
                </div>
                {nomineeList.length  -1=== index && nomineeList.length<2 &&(
                <div className='row row mt-4'>
                    <div className='form-group col-6'>
                    <button type="button" className='btn btn-primary' onClick={handleAddNominee}>Add More Nominees</button>
                    </div>
                </div>
                )}
                </div>
            )) }

                <div className="button-container text-center mt-3 mb-3">
                    <button type="button" onClick={submitClicked} className='btn btn-primary btn-lg'>Submit</button>
                </div>

            </div>
        
    </form>
);
}

  
 
 
  

export default SavePolicy;