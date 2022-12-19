import React, { Component } from 'react';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import history from './history';

class GetUserClaims extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            claim_id1:0,
            Users: {},
            user_claims :[]
            
        }
    }
    

     componentDidMount(){
         
        let username = AuthenticationService.getLoggedUsername()
        UserService.getUserId(username).then((response)=>{
            var user_id = response.data
            AuthenticationService.setUserId(user_id)
            UserService.getUserClaims(user_id).then(response=>{
                this.setState({user_claims:response.data})
             })
        })
       
     }
     
     returnClaimId=(claim_id)=>{
        history.push(`/claim/${claim_id}`)
        window.location.reload()

     }
      

    render(){
        return(
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
                        this.state.user_claims.map(
                            claim=>
                            <tr key={claim.claim_id} onClick={()=>this.returnClaimId(claim.claim_id)} style={{cursor: "pointer"}}>
                                <td >Policy Name: {claim.policy.policyName} <br/>Policy Start Date:  {claim.policy.policy_start_date.slice(0,10)} <br/>Policy End Date: {claim.policy.policy_start_date.slice(0,10)} <br/></td>
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
        
    )
}
}

export default GetUserClaims;