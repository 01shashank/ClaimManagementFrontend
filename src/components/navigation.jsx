import { useNavigation,useNavigate } from "react-router-dom";
import GetUserClaims from "./GetUserClaims";

const navigation=()=>{
    const navigate = useNavigate();
    const nav=(link)=>{
        navigate("/claim");
    }
    return(
        <GetUserClaims nav={nav}/>
        );
    
}

export default navigation(GetUserClaims);