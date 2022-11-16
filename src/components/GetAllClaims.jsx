import React, { Component } from 'react';
import GetAllClaimsService from '../services/GetAllClaimsService';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthenticationService from '../services/AuthenticationService';
import { setupAuthenticationInterceptor } from './Login';
import GetSingleClaim from './GetSingleClaim';
import Header from './Header'
let cl=0;

class GetAllClaims extends Component {
    constructor(props){
        super(props)
        this.state = {
            claims: [],
            cl_id:0
        }
    }

    componentDidMount(cid){
        
        GetAllClaimsService.getClaims().then((response) =>{
            this.setState({claims:response.data});
        });
        this.setState({cl_id:{cid}});
        new Header().getUserRole(false);
        
    }

    returnClaimId=(claim_id)=>{
        cl = claim_id;
       this.getUserSingleClaim()
    }

    getUserSingleClaim(){ console.log(cl);return cl}

     deleteClaim=(cid)=>{
        console.log(cid)
        setupAuthenticationInterceptor()
        axios.delete(`http://localhost:9090/deleteclaim/${cid}`)
        .then((response)=>{
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });
        window.location.reload();

     }


    render() {
        
        return (
            
            <div className='container-fluid '>
            <div className='row'>
               
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            
                            <th>Insured Details</th>
                            <th>Hosptalization Details</th>
                            <th>Policy</th>
                            <th>Status</th>
                            <th>Delete Claim</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.claims.map(
                                claim =>
                                <tr key={claim.claim_id}>
                                    <td onClick={()=>this.returnClaimId(claim.claim_id)}><Link to="/claim">Insured_Person: {claim.insured.insured_name} <br/>Age: {claim.insured.insured_age}<br/> Phone: {claim.insured.insured_phone}<br/> Relationship:{claim.insured.insured_relationship}</Link></td>
                                    <td>Doctor_consulted: {claim.hospitalization.hospital_doctor} <br/>Medical_expenses: {claim.hospitalization.hospital_medical_expenses} <br/>Non_medical_expenses: {claim.hospitalization.hospital_non_medical_expenses}<br/> Reason:{claim.hospitalization.hospital_reason}</td>
                                    <td>Policy_name: {claim.policy.policy_name} <br/>Policy_coverage: {claim.policy.policy_coverage} <br/>Policy_premium: {claim.policy.policy_premium}</td>
                                    <td><b>{claim.claim_status}</b></td>
                                    <td><button type="button" onClick={()=>this.deleteClaim(claim.claim_id)}  className='btn btn-danger'>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
        );
    }
}

export default GetAllClaims;