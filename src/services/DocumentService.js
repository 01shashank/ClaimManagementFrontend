import axios from 'axios';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import { setupAuthenticationInterceptor } from '../components/Login';

class DocumentService {
    saveDoc(claim_id,doc){
        const DOCS_SAVE_API_URL = `http://localhost:9090/claimmanagement/document/${claim_id}`
        return axios.post(DOCS_SAVE_API_URL,doc,{headers:{'Content-Type': 'multipart/form-data',Authorization:sessionStorage.getItem('JWT_token')}})
    }

    getClaimDocuments(claim_id){
        const GET_CLAIM_DOCS_API_URL = `http://localhost:9090/claimmanagement/documentdetails/${claim_id}`

        return axios.get(GET_CLAIM_DOCS_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}});
    }

    downloadDocument(doc_id){
        const DOWNLOAD_DOC_API_URL = `http://localhost:9090/claimmanagement/downloaddocument/${doc_id}`
            return axios.get(DOWNLOAD_DOC_API_URL,{headers:{Authorization:sessionStorage.getItem('JWT_token')}},{responseType: "blob"});
    }

}

export default new DocumentService()

