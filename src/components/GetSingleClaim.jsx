import React, { useEffect,Component } from 'react';
import AuthenticationService from '../services/AuthenticationService';
import GetAllClaims from './GetAllClaims';
import GetUserClaims from './GetUserClaims';
import UserService from '../services/UserService';
import { useState } from 'react';
import history from './history';
import DocumentService from '../services/DocumentService';
import { Link, useSearchParams,useParams } from 'react-router-dom';
import ClaimsService from '../services/ClaimsService';
import fileDownload from 'js-file-download';


const GetSingleClaim =(props)=> {
        const[claims,setClaims]= useState([])
        const[user_auth,setUserAuth]= useState("")
        const[docs,setDocs]= useState([])
        const[auth_stat,setAuth_stat]=useState(false)
        const[rejectionreason,setRejectionReason]=useState([])
        const[isRejected,setIsRejected]=useState(false)
        const[isProcessed,setIsProcessed]=useState(true)
        let params= useParams()
        const claim_id = parseInt(params.claim_id)
        

    useEffect(()=>{

        let username=AuthenticationService.getLoggedUsername()

        UserService.getUserAuthorities(username).then((response)=>{
        let roleList = response.data
        roleList.map(
            (role)=>{
            if(role.authority.includes("ROLE_ADMIN")){
            setUserAuth(role.authority)
            setAuth_stat(true)
            ClaimsService.getClaimById(claim_id).then((response) =>{
                setClaims([response.data])
                DocumentService.getClaimDocuments(claim_id).then((response)=>{
                setDocs(response.data)
            })   
        });
        }
        else {
            setUserAuth(role.authority)
            ClaimsService.getClaimById(claim_id).
            then((response) =>
            {
                setClaims([response.data])
                
            DocumentService.getClaimDocuments(claim_id).then((response)=>{
                setDocs(response.data)
            });   
        })
        .catch((error)=>console.log(error))
    }
    }
    )
    });
}
    )

    const openDoc=(doc_id,docname)=>{

        DocumentService.downloadDocument(doc_id)
        .then((res)=>{
            fileDownload(res.data, docname)
        });
     
    
        
    }

       

    const accepted=(cid,statusandreason)=>{
        ClaimsService.changeClaimStatus(cid,statusandreason)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    //     history.push("/getallclaims")
    //     window.location.reload();
     }

    const rejected=(claim_id,statandreason)=>{
        ClaimsService.changeClaimStatus(claim_id,statandreason)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        // history.push("/getallclaims")
        // window.location.reload();

    }

        return (
            
            <div className='container-fluid '>    
            
               
                <form>
                {claims.map(
                    
                    claim=>
                       
                    <div key={claim.claim_id}>
                    <div className='container' key={claim.claim_id}>

                    <div className='row'>
                            <div className='form-group col-6 mt-3'>
                                <h3 className='mb-3'>Policy Details</h3> 
                                <big className='mt-1 mb-1'><b>Name of Enrolled Policy:</b> {claim.policy.policyName} <br/><b>Policy Coverage: </b>{claim.policy.policy_coverage} <br/> <b>Policy Premium:</b> {claim.policy.policy_premium} <br/>  <b>Policy Top-Up Amount:</b> {claim.policy.top_up_amount} <br/>  <b> Accidental Coverage:</b> {claim.policy.policy_personal_accidental_cover} <br/>  <b>Policy Start Date:</b> {claim.policy.policy_start_date} <br/> <b>Policy End Date:</b> {claim.policy.policy_end_date}<br/> </big>
                            </div>
                        
                    
                            <div className='form-group col-6 mt-3'>
                            <h3 className='mb-3'>Hospitalization Details</h3>
                            <big className='mt-1 mb-1'><b>Name of Consulted Doctor: </b> {claim.hospitalization.hospital_doctor} <br/> <b>Medical Expenses: </b> {claim.hospitalization.hospital_medical_expenses} <br/> <b>Non Medical Expenses: </b> {claim.hospitalization.hospital_non_medical_expenses}<br/> <b>Reason: </b> {claim.hospitalization.hospital_reason}</big>
                            
                        </div>
                    </div>
                    <div className='form-group mt-3'>
                        <h3 className='mb-3'>Nominee Details</h3>
                        
                            { 
                                claim.policy.nominee.map((nom,index)=>(
                                    <div key={nom.nominee_id}>
                                        <big className='mt-1 mb-1'><b>Nominee: {index+1}</b><br/><b>Nominee Name: </b> {nom.policy_user_nominee_name} <br/> <b>Nominee Age:</b> {nom.policy_user_nominee_age} <br/> <b>Nominee Relationship:</b> {nom.policy_user_nominee_relationship}<br/><br/></big>
                                    </div>
                                   
                                )
                                )
                                
                            }
                    </div>
                    
                    
                    <div className='form-group mt-3 mb-3'>
                    <h3 className='mb-3'>Uploaded Document</h3>
                    <big className='mr-3'>Click to download the file</big>
                    <Link>
                        {docs.map(
                            doc=>
                            
                            <div onClick={()=>{openDoc(doc.doc_id,doc.docname)}}>{doc.docname}</div>
                            
                        )}
                    </Link> 
                    </div>

                    <div className='form-group mt-3 row' >
                    <big className='mt-1 mb-1'>Claim Status:<b> {claim.claim_status}</b></big>
                    </div>
                    {auth_stat&&claim.claim_status!=="APPROVED"&&claim.claim_status!=="REJECTED"&&
                        <div className='form-group row mt-3 mb-3' >
                            <div className="col-2"> 
                                <button type="button"  value="APPROVED" onClick={(e)=>{accepted(claim.claim_id,[e.target.value,null]);setIsProcessed(false)}} className="btn btn-primary btn-md "  style={{width: "150px", height:"50px"}} > APPROVE CLAIM</button>
                            </div>
                            <div className='col-2'>
                                <button  type="button" value="REJECTED"  onClick={()=>{setIsRejected(true)}} className='btn btn-danger btn-md' style={{width: "150px", height:"50px"}} >REJECT CLAIM</button>
                            </div> 
                            {isRejected &&
                            <div className='col-8'>
                                <div className='form-group row mb-2'>
                                <div className="col-8">
                                    <input type="text" name="rejectionreason" value={rejectionreason} onChange={(e)=>setRejectionReason(e.target.value)} className="form-control input-group-lg reg_name"  placeholder="Enter the reason of Rejection of Claim"/>
                                </div>
                                <div className="col-2">
                                    <button className='btn btn-danger' onClick={()=>{rejected(claim.claim_id,["REJECTED",rejectionreason]);setIsProcessed(false)}}>Submit</button>
                                </div>
                                </div>
                            </div>
                            }
                    
                        </div>
                    }
                    </div>
                    </div>
                    
                    
                )}
                
                </form>
            </div>
           
    );

}
export default GetSingleClaim;