import axios from 'axios';
import { setupAuthenticationInterceptor } from '../components/Login';

const GET_USERS_URL = "http://localhost:9090/getallusers";

class GetUsersService {
    getUsers(){
        setupAuthenticationInterceptor()
        return axios.get(GET_USERS_URL);
    }

}

export default new GetUsersService()

