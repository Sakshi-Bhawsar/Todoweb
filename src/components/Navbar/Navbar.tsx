'use client'
import { logOut } from "@/queries/signup";
import { removeUser } from "@/slice/userSlice";
import { RootState } from "@/store/store";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsCalendar2HeartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const user: any = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()
    const pathname = usePathname()
    const[show,setShow] = useState(false)
    const handleLogout =async()=>{
        const res = await logOut();
        if(res?.sucess){
           dispatch(removeUser())
        }
    }

if (pathname === "/login" || pathname === "/signup") return null;

    return (
        <div className="flex px-14 py-4 justify-between items-center   shadow-md border border-gray-50">
            <div className="flex items-center gap-4 ">
                <BsCalendar2HeartFill size={24} className=" text-pink-500" />
                <h1 className=" font-mono font-bold text-lg">Todo</h1>
            </div>


            {/* <div className=" relative group flex items-center gap-2  ">
                <CgProfile size={25} className=" cursor-pointer" />
                <h2>{user?.userName || ''}</h2>
            </div> */}
            <div className="relative group">
                <div className="flex items-center gap-2 cursor-pointer" onClick={()=>setShow((prev)=>!prev)}>
                    <CgProfile size={25} />
                    <h2>{user?.userName || ''}</h2>
                </div>
                {show &&
                <div onClick={() => handleLogout()}  className="absolute bg-white hover:bg-gray-100 active:bg-gray-50 top-9   rounded-lg shadow-sm border border-gray-50 px-6 py-2">
                    <p  className=" cursor-pointer">logout</p>
                </div>
              } 
            </div>


        </div>
    )
}

export default Navbar;