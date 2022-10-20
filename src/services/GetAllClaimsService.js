import axios from 'axios';
import { setupAuthenticationInterceptor } from '../components/Login';

const CLAIM_API_URL = "http://localhost:9090/getallclaims";

class GetAllClaimsService {
    getClaims(){
       
        setupAuthenticationInterceptor()
        return axios.get(CLAIM_API_URL);
    }

}

export default new GetAllClaimsService()

