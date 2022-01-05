import {useDispatch} from "react-redux";
import {login} from "../stores/auth"
import {useNavigate } from 'react-router-dom'

function Login(){

    const history = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = () =>{
        const dummyData ={
            id:1,
            name:'Kadir',
            token: '1uey1e98w1ye92wy98eu19ıuwe0'
        }
        localStorage.setItem('auth', dummyData)
        dispatch(login(dummyData))
        history.push('/')
    }
    return (
        <div style={{background:"lightblue"}}>
           <h3>Giriş Yap</h3>   
           <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login