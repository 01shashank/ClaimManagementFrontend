import { useNavigate } from "react-router-dom";
import AuthenticationService from "../services/AuthenticationService";
import GetUserClaims from "./GetUserClaims";

const Logout=()=>{
    const navigate = useNavigate()
    function logoutUser(){
        AuthenticationService.removeSuccesfulUser(); 
        navigate("/login")
        window.location.reload() 
    }
    
    return(
        <div className='container text-center'>
            <h3 className="mb-3 mt-5"> Are you sure you want to Logout?</h3>
            <button className="btn btn-danger" onClick={logoutUser}>Logout</button>  
        </div>
    );
}

export default Logout;