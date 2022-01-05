import {logout} from "../stores/auth"
import {useDispatch} from "react-redux";

function Profile(){

    const dispatch = useDispatch();
    
    return (
        <div style={{background:"lightblue"}}>
            Burası Profil
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}
export default Profile