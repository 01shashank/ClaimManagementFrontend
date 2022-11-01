import { useNavigate } from "react-router-dom";
import GetSingleClaim from "./GetSingleClaim";

const Navigate=(props)=>{
    
    const navigate = useNavigate()
    function navToAllClaims(props){navigate("/getallclaims")}
    return(
        <div>
        <GetSingleClaim navToAllClaims={navToAllClaims}/>
        </div>
    )

    
}

export default  Navigate;