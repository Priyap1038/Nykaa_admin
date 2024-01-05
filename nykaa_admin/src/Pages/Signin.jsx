import React from 'react'
import { login } from '../Redux/authentication/action';

const Signin = () => {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [user,setUser]=useState({});
  
  
    const handleLogin = () => {
        const userDetails = {
            email,
            password,
        };        
        dispatch(login(userDetails))
    }
  
    return (
        <DIV >
            <h2> Login To Continue </h2>
           <label>Email :
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>Password  :
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </DIV>
    )
}

export default Signin