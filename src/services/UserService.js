import axios from 'axios';
import AuthenticationService from './AuthenticationService';

const USER_REG_API_URL = "http://localhost:9090/claimmanagement/adduser";
const ADMIN_REG_API_URL = "http://localhost:9090/claimmanagement/admin/addadmin";
const GET_ALL_USERS_API_URL = "http://localhost:9090/claimmanagement/admin/allusers";
const COUNT_OF_USERS = "http://localhost:9090/claimmanagement/admin/totalusers"


class UserService {

    registerUser(user){
        return axios.post(USER_REG_API_URL,user);
    }

    registerAdmin(admin){
        return axios.post(ADMIN_REG_API_URL,admin,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    getAllUsers(){
       
        return axios.get(GET_ALL_USERS_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    getUserById(user_id){
        const GET_USER_BY_ID_API_URL = `http://localhost:9090/claimmanagement/user/${user_id}`;
        return axios.get(GET_USER_BY_ID_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    updateUser(user_id,user){
        const UPDATE_USER_API_URL = `http://localhost:9090/claimmanagement/admin/updateuser/${user_id}`;
        return axios.put(UPDATE_USER_API_URL,user,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    deleteUser(user_id){
        const DELETE_USER_API_URL = `http://localhost:9090/claimmanagement/admin/deleteuser/${user_id}`;
        return axios.delete(DELETE_USER_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    getUserClaims(user_id){
        const GET_USER_CLAIMS_API_URL = `http://localhost:9090/claimmanagement/user/userclaims/${user_id}`
        return axios.get(GET_USER_CLAIMS_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    getTotalUsersCount(){
        return axios.get(COUNT_OF_USERS,{headers:{Authorization:sessionStorage.getItem('JWT_token')}})
    }

    getUserAuthorities(username){
        const GET_USER_AUTHORITIES_API_URL = `http://localhost:9090/claimmanagement/user/authorities/${username}`
        return axios.get(GET_USER_AUTHORITIES_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}})
    }

    getUserId(username){
        const GET_USER_ID_API_URL = `http://localhost:9090/claimmanagement/getuserid/${username}`
        return axios.get(GET_USER_ID_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}})
        }


}

export default new UserService()
