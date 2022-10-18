import {useNavigate} from 'react-router-dom';
import Login from './Login';


function Error(){
    const navigate = useNavigate();
    function handleChange(){
        navigate("/login")
    }
    return(
        <div>
        <div>Error Component</div>

        <button onClick={handleChange}>click</button>
        </div>
    );

    

}
export default Error;