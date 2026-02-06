import React, { useState } from 'react'
import { useLocation, useNavigate} from "react-router-dom"
import { loginRequest } from '../api';
import { setToken } from '../auth';

export default function LoginPage() {

  const [username,setUsername] = useState("admin");
  const [password,setPassword] = useState("password");
  const [error,setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const {token} = await loginRequest({username,password});
      setToken(token);
      const redirectTo = location.state?.from?.pathname || "/secure";
      navigate(redirectTo,{ replace:true})
    }catch(err){
      console.error(err)
      setError("Erreur identifiants")
    }
  } 
  

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={onSubmit}>
        <label>username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <label>password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button>Se connecter</button>
      </form>
    </div>
  )
}
