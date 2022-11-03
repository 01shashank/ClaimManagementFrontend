import React, { Component } from 'react';
import GetUserClaimsService from '../services/GetUserClaimsService';
import AuthenticationService from '../services/AuthenticationService';
import { Link } from 'react-router-dom';
let cl=0;

class GetUserClaims extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            claim_id1:0,
            Users: {},
            user_claim :[]
            
        }
        //this.getToClaim = this.getToClaim.bind(this)
    }
    

     componentDidMount(){
        let username = AuthenticationService.getLoggedUsername()
        GetUserClaimsService.GetUserClaims(username).then(response=>{
            this.setState({Users:response.data})
        
        const  userarr = Object.entries(this.state.Users);
        userarr.forEach(([key, value]) => {
            if(key==="user_claims"){
                this.setState({user_claim : value})
            }
          });
        })
     }
     
     returnClaimId=(claim_id)=>{
         cl = claim_id;
        this.getUserSingleClaim()
     }

     getUserSingleClaim(){console.log(cl);return cl;}

      

    render(){
        return(
        <div>
        
            <div className='container-fluid '>    
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Insured Details</th>
                            <th>Hospitalization</th>
                            <th>Policy</th>
                            <th>status</th>
                        </tr>
                    </thead>

                    <tbody>{
                        this.state.user_claim.map(
                            claim=>
                            <tr key={claim.claim_id}>
                                    <td onClick={()=>this.returnClaimId(claim.claim_id)}><Link to="/claim">{claim.insured.insured_name} <br/>Age: {claim.insured.insured_age}<br/> Phone: {claim.insured.insured_phone}<br/> Relationship:{claim.insured.insured_relationship}</Link> </td>
                                    <td>Doctor_consulted: {claim.hospitalization.hospital_doctor} <br/>Medical_expenses: {claim.hospitalization.hospital_medical_expenses} <br/>Non_medical_expenses: {claim.hospitalization.hospital_non_medical_expenses}<br/> Reason:{claim.hospitalization.hospital_reason}</td>
                                    <td>Policy_name: {claim.policy.policyName} <br/>Policy_coverage: {claim.policy.policy_coverage} <br/>Policy_premium: {claim.policy.policy_premium}</td>
                                    <td><b>{claim.claim_status}</b></td>
                                </tr>
                            )      
                    }
                    </tbody>
                </table>
            </div>
        </div>
    
        </div>
        
    )
}
}

export default GetUserClaims;