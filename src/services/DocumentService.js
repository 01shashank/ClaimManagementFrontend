import axios from 'axios';
import { setupAuthenticationInterceptor } from '../components/Login';

class DocumentService {
    saveDoc(claim_id,doc){
        const DOC_SAVE_URL = `http://localhost:9090/savedoc/${claim_id}`;
        setupAuthenticationInterceptor()
        return axios.post(DOC_SAVE_URL,doc)
        .then((response) => {
            console.log(response.data);
              // Handle data
          })
          .catch((error) => {
            console.log(error);
          });
    }

    getDoc(claim_id){
        const DOC_GET_URL = `http://localhost:9090/getdoc/${claim_id}`;
        setupAuthenticationInterceptor()
        return axios.get(DOC_GET_URL);
    }

    findDocDetails(claim_id){
        const DOC_GET_URL = `http://localhost:9090/finddoc/${claim_id}`;
        setupAuthenticationInterceptor()
        return axios.get(DOC_GET_URL);
    }

}

export default new DocumentService()

