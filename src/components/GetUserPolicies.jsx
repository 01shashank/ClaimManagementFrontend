import React, { Component } from 'react';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import PolicyService from '../services/PolicyService';


class GetUserPolicies extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            Users: {},
            user_policies :[]
            
        }
    }
    

     componentDidMount(){
         
        let username = AuthenticationService.getLoggedUsername()
        UserService.getUserId(username).then((response)=>{
            var user_id = response.data
            PolicyService.getUserPolicies(user_id)
            .then(response=>{
                this.setState({user_policies:response.data})
             })
             .catch((error)=>{
                 console.log(error)
             })
        })
       
     }
     

    render(){
        return(
        <div>
        
            <div className='container-fluid mt-3 '>    
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Policy Name</th>
                            <th>Policy Coverage</th>
                            <th>Policy Premium</th>
                            <th>Topup Amount</th>
                            <th>Personal Accident Cover</th>
                            <th>Policy Start</th>
                            <th>Policy End Date</th>
                        </tr>
                    </thead>

                    <tbody>{
                        this.state.user_policies.map(
                            policy=>
                            <tr key={policy.policy_Id}>
                                <td>{policy.policyName} </td>
                                <td>{policy.policy_coverage}</td>
                                <td>{policy.policy_premium}</td>
                                <td>{policy.top_up_amount}</td>
                                <td>{policy.policy_personal_accidental_cover}</td>
                                <td>{policy.policy_start_date.slice(0,10)}</td>
                                <td>{policy.policy_end_date.slice(0,10)}</td>
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

export default GetUserPolicies;