import axios from 'axios';
const user_Id=1;
const USER_API_URL = `http://localhost:9090/getuserbyid/${user_Id}`;

class GetClaimsForUserService {
    getClaims(){
       
        this.setupAuthenticationInterceptor()
        return axios.get(USER_API_URL);
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

export default new class GetClaimsForUserService();

