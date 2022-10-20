import axios from "axios"
import { setupAuthenticationInterceptor } from "../components/Login"


class GetUserClaimsService{
    GetUserClaims(username){
        setupAuthenticationInterceptor()
        return axios.get(`http://localhost:9090/getuserbyemail/${username}`);

    }

}

export default new GetUserClaimsService();