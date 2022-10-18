import axios from 'axios';

const CLAIM_API_URL = "http://localhost:9090/getallclaims";

class GetAllClaimsService {
    getClaims(){
       
        this.setupAuthenticationInterceptor()
        return axios.get(CLAIM_API_URL);
    }

    setupAuthenticationInterceptor(){
        let username ='jigneshj@gmail.com'
        let password= 'jignesh@123'
        let basicAuthHeader= 'Basic ' + window.btoa(username + ":" + password)

        axios.interceptors.request.use(
            (config) =>{
                config.headers.authorization = basicAuthHeader
            
            return config
            }
        )
    }
    
    

}

export default new GetAllClaimsService()

