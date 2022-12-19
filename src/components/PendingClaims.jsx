import React, { Component } from 'react';
import history from './history'
import ClaimsService from '../services/ClaimsService';

class GetPendingClaims extends Component {
    constructor(props){
        super(props)
        this.state = {
            claims: []
        }
    }

    componentDidMount(cid){
        
        ClaimsService.getPendingClaims().then((response) =>{
            this.setState({claims:response.data});
        });
    }

     returnClaimId(claim_id){
        history.push(`/claim/${claim_id}`)
        window.location.reload()
     }


    render() {
        
        return (
            <div>

            <div className='container-fluid mt-3 '>    
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Policy Details</th>
                            <th>Hospitalization Details</th>
                            <th>Claim Status</th>
                        </tr>
                    </thead>

                    <tbody>{
                        this.state.claims.map(
                            claim=>
                            <tr key={claim.claim_id}  onClick={()=>this.returnClaimId(claim.claim_id)} style={{cursor: "pointer"}}>
                                <td>Policy Name: {claim.policy.policyName} <br/>Policy Start Date:  {claim.policy.policy_start_date.slice(0,10)} <br/>Policy End Date: {claim.policy.policy_start_date.slice(0,10)}</td>
                                <td>Doctor_consulted: {claim.hospitalization.hospital_doctor} <br/>Medical_expenses: {claim.hospitalization.hospital_medical_expenses} <br/>Non_medical_expenses: {claim.hospitalization.hospital_non_medical_expenses}<br/> Reason:{claim.hospitalization.hospital_reason}</td>
                                <td><b>{claim.claim_status}</b></td>
                            </tr>
                                
                            ) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
            
          
        );
    }
}

export default GetPendingClaims;