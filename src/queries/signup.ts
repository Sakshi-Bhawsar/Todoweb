import { IUser } from "@/difination/user"
import axios from "axios"
import { error } from "console"

 export const signup =async(body:IUser)=>{
    const endpoint = `${process.env.NEXT_PUBLIC_API_BASEURL}/api/auth/signup` 
    try{
        const res = await axios.post(endpoint,body,{withCredentials:true})
        if(!res){
            throw new Error("failed to login")
        }
        return res.data;
    }catch(err){
     console.log(err)
    }
}