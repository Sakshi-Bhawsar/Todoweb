"use client"
import Login from "@/components/Login/Login";
import { fixedMargine, marginTop } from "@/constants/style";

const LoginPage =()=>{
    return(
        <div className={`${fixedMargine} ${marginTop}`}>
            <Login/>
        </div>
    )
}

export default LoginPage;