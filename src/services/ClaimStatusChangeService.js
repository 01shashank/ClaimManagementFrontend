import axios from "axios"
import { setupAuthenticationInterceptor } from "../components/Login";


class ClaimStatusChangeServie{
    GetClaimStatus(claim_id){
        setupAuthenticationInterceptor()
        return axios.put(`http://localhost:9090/updatestatus/${claim_id}`);

    

}
}


export default new ClaimStatusChangeServie()