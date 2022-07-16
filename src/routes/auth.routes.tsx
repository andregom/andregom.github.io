import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/Signin";

interface AuthRoutesProps {
    
}
 
const AuthRoutes: React.FC<AuthRoutesProps> = () => (
    <Routes>
        <Route path="" element={<SignIn />} />
    </Routes>
);
 
export default AuthRoutes;