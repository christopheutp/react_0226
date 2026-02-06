import React from 'react'
import { isAuthenticated } from './authStore';
import {useLocation,Navigate,Outlet} from 'react-router-dom'


export default function ProtectedRoute() {
const locattion = useLocation();

if(!isAuthenticated()){
    return <Navigate to="/login" replace state={{from : locattion}} ></Navigate>
}

  return (
    <Outlet />
  )
}
