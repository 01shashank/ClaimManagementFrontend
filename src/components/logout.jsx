import { useNavigate, useEffect, Link } from "react-router-dom";
import authenticationService from "../services/authenticationService";

const Logout=()=>{
    return(
        
        <div className='container text-center'>
                <h3 className="mb-3 mt-5"> Are you sure you want to Logout?</h3>
                <button ><Link className="btn btn-primary" to="/login" onClick={authenticationService.removeSuccesfulUser}>Logout</Link></button>
            </div>
        
      

    );
}

export default Logout;