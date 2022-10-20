import React, { Component } from 'react';
import GetAllClaimsService from '../services/GetAllClaimsService';

class GetAllClaims extends Component {
    constructor(props){
        super(props)
        this.state = {
            claims: []
        }
    }

    componentDidMount(){
        GetAllClaimsService.getClaims().then((response) =>{
            this.setState({claims:response.data});
            
        });
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
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.claims.map(
                                claim =>
                                <tr key={claim.claim_id}>
                                    <td>Insured_Person: {claim.insured.insured_name} <br/>Age: {claim.insured.insured_age}<br/> Phone: {claim.insured.insured_phone}<br/> Relationship:{claim.insured.insured_relationship}</td>
                                    <td>Doctor_consulted: {claim.hospitalization.hospital_doctor} <br/>Medical_expenses: {claim.hospitalization.hospital_medical_expenses} <br/>Non_medical_expenses: {claim.hospitalization.hospital_non_medical_expenses}<br/> Reason:{claim.hospitalization.hospital_reason}</td>
                                    <td>Policy_name: {claim.policy.policy_name} <br/>Policy_coverage: {claim.policy.policy_coverage} <br/>Policy_premium: {claim.policy.policy_premium}</td>
                                    <td>{claim.claim_status}</td>
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