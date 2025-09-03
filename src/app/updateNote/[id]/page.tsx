'use client'

import UpdateNote from "@/components/UpdateNote/UpdateNote";
import { RootState } from "@/store/store";
import { useParams, useRouter } from "next/navigation"
import { useSelector } from "react-redux";

const updateNotePage = ()=>{
    const params = useParams();
    const id = params.id;
      const user = useSelector((state: RootState) => state.user)
    const router = useRouter()
        if (!user) {
            return(
                <div className="w-full h-full mt-20 flex justify-center items-center font-bold">not Valid User</div>
            )
        }


    return(
        <div>
         <UpdateNote noteId={id?.toString()?? ''}/>
        </div>
    )
}

export default updateNotePage