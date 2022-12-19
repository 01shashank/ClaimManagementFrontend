import axios from 'axios';

class PolicyService {

    addPolicy(user_id,policy){
        const ADD_POLICY_API_URL = `http://localhost:9090/claimmanagement/policy/${user_id}`;
        return axios.post(ADD_POLICY_API_URL,policy,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    getPolicyById(policy_id){
        const GET_POLICY_BY_ID = `http://localhost:9090/claimmanagement/policy/${policy_id}`;
        return axios.get(GET_POLICY_BY_ID,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    getUserPolicies(user_id){
        const GET_USER_POLICIES = `http://localhost:9090/claimmanagement/userpolicies/${user_id}`;
        return axios.get(GET_USER_POLICIES,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    deletePolicy(policy_id){
        const DELETE_POLICY_API_URL = `http://localhost:9090/claimmanagement/deletepolicy/${policy_id}`;
        return axios.delete(DELETE_POLICY_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

}

export default new PolicyService()
