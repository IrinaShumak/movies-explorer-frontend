import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = (props) => {  
      
  if (!props.loggedIn) {
    return <Navigate to="/" />
  } 
  return <Outlet />      
  
};

export default ProtectedRoute; 