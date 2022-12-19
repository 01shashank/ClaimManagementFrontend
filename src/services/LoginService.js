import axios from 'axios';

const LOGIN_API_URL = "http://localhost:9090/claimmanagement/login";

class LoginService {
    userLogin(username,password){

        return axios.post(LOGIN_API_URL,{username,password});
    }

}

export default new LoginService()

