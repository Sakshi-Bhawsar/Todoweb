"use client"
import { fixedMargine, marginTop } from "@/constants/style";
import Signup from "../../components/Signup/Signup";

const SignupPage =()=>{
    return(
        <div className={`${fixedMargine} ${marginTop}`}>
           <Signup/>
        </div>
    )
}

export default SignupPage;