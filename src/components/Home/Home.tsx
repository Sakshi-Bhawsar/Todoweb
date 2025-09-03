'use client'
import { FaPlusCircle } from "react-icons/fa";
import AllNotes from "./componets/AllNotes";
import { useEffect, useState } from "react";
import CreateNotes from "./componets/CreateNotes";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

const Home = () => {
    const [tab, setTab] = useState(1)
    const user = useSelector((state: RootState) => state.user)
    const router = useRouter()
    console.log(user, "user")
    useEffect(() => {
        if (!user) {
            router.push('/login')
            return;
        }

    }, [user])

    return (
        <>
            {user &&
                <div className="flex flex-col items-center justify-center w-full h-full mt-20">
                    <h1 className=" text-xl py-4 font-serif">TODO APP</h1>
                    <div className="flex items-center  gap-10">
                        <p className="flex items-center gap-1 bg-green-500 py-1 px-3 rounded-full cursor-pointer hover:bg-green-400 active:bg-green-600 a active:text-[#ffff]" onClick={() => setTab(2)}><FaPlusCircle fill="white" />New</p>
                        <p className={`${tab == 1 ? ' underline text-red-400  font-semibold' : ''} cursor-pointer`} onClick={() => setTab(1)}>All</p>
                    </div>
                    {tab == 1 ? <AllNotes /> : <CreateNotes />}

                </div>
            }
        </>

    )
}

export default Home;