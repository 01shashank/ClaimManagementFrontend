import axios from 'axios';

const COUNT_OF_TOTAL_CLAIMS = "http://localhost:9090/claimmanagement/admin/totalclaimscount"
const COUNT_OF_PENDING_CLAIMS = "http://localhost:9090/claimmanagement/admin/pendingclaimscount"
const COUNT_OF_APPROVED_CLAIMS = "http://localhost:9090/claimmanagement/admin/approvedclaimscount"
const COUNT_OF_REJECTED_CLAIMS = "http://localhost:9090/claimmanagement/admin/rejectedclaimscount"

class ClaimsService {

    postClaim(user_id,claim){
        const POST_CLAIM_API_URL = `http://localhost:9090/claimmanagement/claim/${user_id}`;
        return axios.post(POST_CLAIM_API_URL,claim,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    getAllClaims(){
        const GET_ALL_CLAIMS_API_URL = "http://localhost:9090/claimmanagement/admin/allclaims";
        return axios.get(GET_ALL_CLAIMS_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    getPendingClaims(){
        const GET_PENDING_CLAIMS_API_URL = "http://localhost:9090/claimmanagement/admin/pendingclaims";
        return axios.get(GET_PENDING_CLAIMS_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    getApprovedClaims(){
        const GET_APPROVED_CLAIMS_API_URL = "http://localhost:9090/claimmanagement/admin/approvedclaims";
        return axios.get(GET_APPROVED_CLAIMS_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
   
    }

    getRejectedClaims(){
        const GET_REJECTED_CLAIMS_API_URL = "http://localhost:9090/claimmanagement/admin/rejectedclaims";
        return axios.get(GET_REJECTED_CLAIMS_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
   

    }

    getClaimById(claim_id){
        const GET_CLAIM_BY_ID_API_URL = `http://localhost:9090/claimmanagement/claim/${claim_id}`;
        return axios.get(GET_CLAIM_BY_ID_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    updateClaim(claim_id,claim){
        const UPDATE_CLAIM_API_URL = `http://localhost:9090/claimmanagement/claim/update/${claim_id}`
        return axios.put(UPDATE_CLAIM_API_URL,claim,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }
    deleteClaim(claim_id){
        const DELETE_CLAIM_API_URL = `http://localhost:9090/claimmanagement/admin/deleteclaim/${claim_id}`
        return axios.delete(DELETE_CLAIM_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    changeClaimStatus(claim_id,statusAndReason){
        const CHANGE_CLAIM_STATUS_API_URL = `http://localhost:9090/claimmanagement/admin/changeclaimstatus/${claim_id}`
        return axios.put(CHANGE_CLAIM_STATUS_API_URL,statusAndReason,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    deleteNomineeOfClaim(nominee_id){
        const DELETE_NOMINEE_API_URL = `http://localhost:9090/claimmanagement/claim/removenominee/${nominee_id}`
        return axios.delete(DELETE_NOMINEE_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}})
    }

    getTotalClaimsCount(){
        return axios.get(COUNT_OF_TOTAL_CLAIMS,{headers:{Authorization:sessionStorage.getItem('JWT_token')}})
    }

    getPendingClaimsCount(){
        return axios.get(COUNT_OF_PENDING_CLAIMS,{headers:{Authorization:sessionStorage.getItem('JWT_token')}})
    }

    getApprovedClaimsCount(){
        return axios.get(COUNT_OF_APPROVED_CLAIMS,{headers:{Authorization:sessionStorage.getItem('JWT_token')}})
    }

    getRejectedClaimsCount(){
        return axios.get(COUNT_OF_REJECTED_CLAIMS,{headers:{Authorization:sessionStorage.getItem('JWT_token')}})
    }

}

export default new ClaimsService()
