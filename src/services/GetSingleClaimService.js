import axios from "axios"
import { setupAuthenticationInterceptor } from "../components/Login";


class GetSingleClaimService{
    GetSingleClaim(claim_id){
        setupAuthenticationInterceptor()
        return axios.get(`http://localhost:9090/getclaimbyid/${claim_id}`);

    

}
}


export default new GetSingleClaimService()