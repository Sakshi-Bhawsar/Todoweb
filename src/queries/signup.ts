import { IUser } from "@/difination/user"
import axios from "axios"

 export const signup =async(body:IUser)=>{
    const endpoint = `${process.env.NEXT_PUBLIC_API_BASEURL}/api/auth/signup` 
    try{
        const res = await axios.post(endpoint,body,{withCredentials:true})
        if(!res){
            throw new Error("failed to login")
        }
        console.log(res,"res.dta--")
        return res.data;
    }catch(err:any){
     console.log(err)
     return err?.response?.data
    }
}

export  const login =async(email:string, password:string)=>{
 const endpoint = `${process.env.NEXT_PUBLIC_API_BASEURL}/api/auth/login`
 try{
      const res = await axios.post(endpoint,{email,password},{withCredentials:true})
      if(!res){
        throw new Error("something want  wrong in login")
      }
      return res.data;
 } catch(err:any){
    console.log(err);
    return err.response.data;
 }
}

