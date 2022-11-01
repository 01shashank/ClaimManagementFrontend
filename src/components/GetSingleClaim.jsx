import React, { Component } from 'react';
import GetSingleClaimService from '../services/GetSingleClaimService';
import GetAllClaims from './GetAllClaims';
import GetUserClaims from './GetUserClaims';
import Navigate from './Navigate';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { setupAuthenticationInterceptor } from './Login';
import axios from 'axios';
import ClaimStatusChangeService from '../services/ClaimStatusChangeService';

class GetSingleClaim extends Component {
    constructor(props){
        super(props)
        this.state = {
            claims: [],
            c_stat:""
            
        }
    }

    componentDidMount=()=>{
        let claim_id = new GetAllClaims().getUserSingleClaim();
        GetSingleClaimService.GetSingleClaim(parseInt(claim_id)).then((response) =>{
            this.setState({claims:[response.data]});
            
        });
        
    }

    handleChange=(e,cid)=>{
        
        console.log("in handlechange")
        
        let value = e.target.value;
        console.log(value)

    }

    navBack=(e)=>{
       console.log(e.target.value)
        
        //{this.props.navToAllClaims()}
    }

    callServ=(cid,val)=>{
        console.log(cid)
        console.log(val)
        let c1= {claim_status: val}
        console.log(c1)
        console.log(this.state.claims)
        const STATUS_CHANGE_URL = `http://localhost:9090/updatestatus/${cid}`;
        setupAuthenticationInterceptor()
        axios.put(STATUS_CHANGE_URL,c1,{
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            console.log(response.data);
            // Handle data
        })
        .catch((error) => {
            console.log(error);
        });
    }


    render() {
        return (
            <div>
            <div className='container-fluid '>    
            <div className='row'>
               
                <form>
                {this.state.claims.map(
                    claim=>
                    <div className='container'>
                    <div className='form-group mt-3' key={claim.claim_id}>
                    <h3 className='mb-3'>Policy Details</h3> 
                    <big className='mt-1 mb-1'><b> Policy Enrolled:</b> {claim.policy.policyName} <br/><b>Policy Coverage: </b>{claim.policy.policy_coverage} <br/> <b>Policy Premium:</b> {claim.policy.policy_premium}</big>
                    
                    </div>
                    <div className='form-group mt-3' key={claim.claim_id}>
                    <h3 className='mb-3'>Insured Person's Details</h3>
                    <big className='mt-1 mb-1'><b> Name:</b> {claim.insured.insured_name} <br/> <b>Age :</b> {claim.insured.insured_age}<br/> <b>Phone :</b> {claim.insured.insured_phone}<br/> <b> Relationship: </b> {claim.insured.insured_relationship}</big>
                    
                    </div>
                    <div className='form-group mt-3' key={claim.claim_id}>
                    <h3 className='mb-3'>Hospitalization Details</h3>
                    <big className='mt-1 mb-1'><b>Doctor_consulted:</b> {claim.hospitalization.hospital_doctor} <br/> <b>Medical_expenses:</b> {claim.hospitalization.hospital_medical_expenses} <br/> <b>Non_medical_expenses:</b> {claim.hospitalization.hospital_non_medical_expenses}<br/> <b>Reason: </b> {claim.hospitalization.hospital_reason}</big>
                    </div>
                    <div className='form-group mt-3' key={claim.claim_id}>
                    <big className='mt-1 mb-1'><b>Claim Status:</b> {claim.claim_status}</big>
                    </div>
                        <div className='form-group row mt-3 mb-3' >
                            <div className="col-2"> 
                                <button type="button"  value="ACCEPT" onClick={(e)=>{this.callServ(claim.claim_id,e.target.value)}} className="btn btn-primary btn-md "  Style="width: 150px; height:50px;" > ACCEPT CLAIM</button>
                            </div> 
                            <div className='col-1'>
                                <button  type="button"   value="REJECT" className='btn btn-danger btn-md' Style="width: 150px; height:50px;" >REJECT CLAIM</button>

                            </div> 
                        </div>
                    </div>

                )}
                </form>
            </div>
            </div>
           </div>
    );
}
}


export default GetSingleClaim;