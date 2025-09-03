import { useState } from "react";
import { IUser } from "../../difination/user"
import { Preahvihear } from "next/font/google";
import { signup } from "@/queries/signup";
import { useRouter } from "next/navigation"
import Link from "next/link";


const Signup = () => {
    const [form, setForm] = useState<IUser>({
        userName: '',
        email: '',
        password: ''
    });
    const router = useRouter();
    const[err,setErr]  = useState('')

    const onChnage = (e: any) => {
        const { name, value } = e.target;
        setForm((prev: IUser) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (formData: IUser) => {
        console.log("fun called", formData)
        const data = await signup(formData)
        console.log(data,"data")
        if (data?.sucess == true) {
            setErr('')
            router.push('/login')
        }else{
            setErr(data.message || "something want wrong tru again leter")
        }
    }

    console.log(form, "form")
    return (
        <form className="flex flex-col items-center justify-center "
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(form);
            }}>
            <div className=' rounded-lg shadow-2xl  p-14'>

                <p className="text-sm text-gray-400 text-center  py-4">
                    This information will be displayed publicly so be careful what you share.
                </p>

                <div className="flex flex-col w-full  py-2 ">
                    <label htmlFor="userName" className="text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={form.userName}
                        onChange={onChnage}
                    />
                </div>
                <div className="flex flex-col w-full py-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={form.email}
                        onChange={onChnage}
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
                        className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={onChnage}
                        value={form.password}
                    />
                </div>

                <div className='flex flex-col w-full items-end mt-4 gap-2'>
                    <button className=' px-6 py-2  bg-indigo-500 text-white text-sm hover:shadow-md  rounded-2xl cursor-pointer'>Sign up</button>
                    <p>Already a member ? <Link href={'/login'}> <span className=' text-indigo-600 hover:underline cursor-pointer'>login</span> </Link></p>
                </div>
               <p className="text-sm text-red-500 ">{err}</p>

            </div>
        </form>
    )
}

export default Signup;