"use client"
import Login from "@/components/Login/Login";
import { fixedMargine, marginTop } from "@/constants/style";

const LoginPage =()=>{
    return(
        <div className={` bg-sky-100  h-screen`}>
            <Login/>
        </div>
    )
}

export default LoginPage;