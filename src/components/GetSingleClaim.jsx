import React, { Component } from 'react';
import GetSingleClaimService from '../services/GetSingleClaimService';
import AuthenticationService from '../services/AuthenticationService';
import GetAllClaims from './GetAllClaims';
import GetUserClaims from './GetUserClaims';
import { setupAuthenticationInterceptor } from './Login';
import axios from 'axios';
import history from './history';
import GetUsersService from '../services/GetUsersService';
import DocumentService from '../services/DocumentService';

class GetSingleClaim extends Component {
    constructor(props){
        super(props)
        this.state = {
            claims: [],
            Users:[],
            c_stat:"",
            user_auth:"",
            auth_stat:false,
            doc:{}
            
            
        }
    }

    componentDidMount(props){

        GetUsersService.getUsers().then((response) =>{
            this.setState({Users:response.data});
          
        let username=AuthenticationService.getLoggedUsername()
        //console.log(this.state.Users)
        this.state.Users.forEach((User)=>{
          
            if(User.userEmail===username)
            {
                User.authorities.map(auth=>{
                    if (auth.authority==="USER") {
                        
                        const claim_id = new GetUserClaims().getUserSingleClaim();
                        this.setState({user_auth:auth.authority})
                        //role_stat=true;
                        GetSingleClaimService.GetSingleClaim(claim_id).then((response) =>{
                        this.setState({claims:[response.data]});
                        DocumentService.getDoc(claim_id).then((response)=>{
                            this.setState({doc:response.data})
                        })
                });
            }
                    else if(auth.authority==="ADMIN"){
                        console.log("inadmin")
                        const claim_id = new GetAllClaims().getUserSingleClaim();
                        this.setState({user_auth:auth.authority})
                       
                        this.setState({auth_stat:true})
                        GetSingleClaimService.GetSingleClaim(claim_id).
                        then((response) =>{this.setState({claims:[response.data]}); 
                        DocumentService.getDoc(claim_id).then((response)=>{
                            this.setState({doc:response.data})
                        })   
                });
              }
            }
        
            )
            }})
        })
        }


    callServ=(cid,val)=>{

        const STATUS_CHANGE_URL = `http://localhost:9090/updatestatus/${cid}/${val}`;
        setupAuthenticationInterceptor()
        axios.put(STATUS_CHANGE_URL)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        if(this.state.user_auth==="USER"){history.push("/getuserclaims")}
        else history.push("getallclaims")
        window.location.reload();
    }


    render(props) {
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
                    <big className='mt-1 mb-1'><b>Claim Status:</b><b> {claim.claim_status}</b></big>
                    </div>
                    {this.state.auth_stat&&
                        <div className='form-group row mt-3 mb-3' >
                        <div className="col-2"> 
                         <button type="button"  value="ACCEPTED" onClick={(e)=>{this.callServ(claim.claim_id,e.target.value);}} className="btn btn-primary btn-md "  Style="width: 150px; height:50px;" > ACCEPT CLAIM</button>
                        </div> 
                        <div className='col-1'>
                            <button  type="button"   value="REJECTED"  onClick={(e)=>{this.callServ(claim.claim_id,e.target.value)}} className='btn btn-danger btn-md' Style="width: 150px; height:50px;" >REJECT CLAIM</button>

                        </div> 
                    </div>
                    }
                    {console.log(this.state.doc)}
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