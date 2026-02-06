import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { clearToken, getToken } from '../auth';
import { getSecureData } from '../api';

export default function SecurePage() {

  const [payload,setPayload] = useState(null);
  const [error,setError] = useState(null);
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try{
        const data = await getSecureData(token);
        if(!cancelled) setPayload(data);
      }catch (err) {
        console.error(err);
        if(!cancelled) setError(err.message);
      }
    })();
    return () => { cancelled = true;};
  },[token])

  const logout = () => {
    clearToken();
    navigate("/login", {replace: true})
  }

  return (
    <div>
      <h1>Page securisée</h1>
      <div>
        <button onClick={logout}>logout</button>
      </div>
      {error && <p>{error}</p>}
      <pre>{JSON.stringify(payload,null,2)}</pre>
    </div>
  )
}
