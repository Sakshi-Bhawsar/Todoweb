import { login } from "@/queries/signup";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
    const [loginUser,setLoginUser]= useState({
         email: '',
        password: ''
    })
    const onChange =(e:any)=>{
        const {name ,value} = e.target;
        setLoginUser((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const loginClick =async(email:string,password:string)=>{
          const res = await login(email,password)
          console.log(res)
    }

    return (
        <div className={`w-full h-full flex justify-center items-center `}>
            <div className="card bg-base-100  w-[500px]   shadow-sm">
                <figure className="py-6 bg-yellow-50 rounded-b-3xl">
                    <Image
                        src='/assets/cal.jpg' width={300} height={100}
                        alt="Shoes"
                        className=" object-fill rounded-xl"
                    />
                </figure>
                <div className=" px-4 py-4">
                    <div className="flex flex-col w-full py-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-200"
                        value={loginUser.email}
                        onChange={onChange}
                        />
                    </div>
                    <div className="flex flex-col w-full py-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="text"
                            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-200"
                        onChange={onChange}
                        value={loginUser.password}
                        />
                    </div>
                    <div className="card-actions py-2">
                        <button className=" rounded-lg cursor-pointer px-6 py-2 hover:shadow-md bg-green-200" onClick={()=>loginClick(loginUser.email,loginUser.password)}>Login</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;