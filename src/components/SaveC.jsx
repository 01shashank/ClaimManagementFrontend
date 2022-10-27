import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AuthenticationService from '../services/AuthenticationService';
import { Dropdown } from 'react-bootstrap';
import PolicyList from './PolicyList';

const SaveC =(props)=>{
  const navigate = useNavigate();

  const[claim,setClaim] = useState({
      policy:{policy_name:""},
      insured:{
          insured_name:"",
          insured_phone:0,
          insured_age:0,
          insured_relationship:""
      },
      hospitalization:{
          hospital_doctor:"",
          hospital_medical_expenses:0,
          hospital_non_medical_expenses:0,
          hospital_reason:""
      }
  });

  const onChnagePolicyName=(e)=>{
    //   setClaim({
    //       ...claim,
    //       policy:{
    //           ...claim.policy,
    //           [e.target.name]:e.target.value
    //       }
    //   });
    console.log(PolicyList)
  }

  const onChnageInsuredName=(e)=>{
    setClaim({
        ...claim,
        insured:{
            ...claim.insured,
            [e.target.name]:e.target.value
        }
    });
}

const onChnageInsuredPhone=(e)=>{
    setClaim({
        ...claim,
        insured:{
            ...claim.insured,
            [e.target.name]:e.target.value
        }
    });
}

const onChnageInsuredAge=(e)=>{
    setClaim({
        ...claim,
        insured:{
            ...claim.insured,
            [e.target.name]:e.target.value
        }
    });
}

const onChnageInsuredRel=(e)=>{
    setClaim({
        ...claim,
        insured:{
            ...claim.insured,
            [e.target.name]:e.target.value
        }
    });
}

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
            [e.target.name]:e.target.value
        }
    });
}

const onChnageHospitalMedExp=(e)=>{
    setClaim({
        ...claim,
        hospitalization:{
            ...claim.hospitalization,
            [e.target.name]:e.target.value
        }
    });
}
  
  
    
  function submitClicked(props){
    console.log(claim)
  }

  return (
    <form className='form-inline'>
        <div className='mt-3'><h4>Insured Person's details</h4> 
            <div className='row'>
                <div className='form-group col-6 mt-1'> 
                    <label> Name of Person</label>
                    <input type="text" name="insured_name" value={claim.insured.insured_name} onChange={onChnageInsuredName} className="form-control input-group-lg reg_name"  placeholder="Enter the name of Insured person"/>
                </div>
                <div className='form-group col-6 mt-1'> 
                    <label>Contact Number</label>
                    <input type="number" name="insured_phone" value={claim.insured.insured_phone} onChange={onChnageInsuredPhone} className="form-control input-group-lg reg_name"  placeholder="Enter the contact number of Insured person"/>
                </div> 
            </div>
            <div className='row'>
                <div className='form-group col-6 mt-1'> 
                    <label> Age</label>
                    <input type="number" name="insured_age" value={claim.insured.insured_age} onChange={onChnageInsuredAge} className="form-control input-group-lg reg_name"  placeholder="Enter age of the Insured person"/>
                </div>
                <div className='form-group col-6'> 
                    <label>Relationship </label>
                    <input type="text" name="insured_relationship" value={claim.insured.insured_relationship} onChange={onChnageInsuredRel} className="form-control input-group-lg reg_name"  placeholder="Enter relationship with Insured person"/>
                </div>
            </div>
        </div>

        <div className='mt-3'><h4>Policy details</h4>
            <div >
                <label> Policy Name</label>
                    {/* <Dropdown className='mt-2'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Select the policy
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item name="policy_name" value={claim.policy.policy_name}>Standard Plan</Dropdown.Item>
                            <Dropdown.Item name="policy_name" value={claim.policy.policy_name}>Gold Plan</Dropdown.Item>
                            <Dropdown.Item name="policy_name" value={claim.policy.policy_name}>Premium Plan</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    <PolicyList onClick={onChnagePolicyName}/>
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
            <div className="button-container text-center mt-3 mb-3">
                <button type="button" onClick={submitClicked} className='btn btn-primary'>Submit</button>
            </div>

        </div>
    </form>
);
}

  
 
 
  

export default SaveC;