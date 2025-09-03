'use client'
import ParticularNote from "@/components/ParticularNote/ParticularNote"
import { RootState } from "@/store/store"
import { useParams } from "next/navigation"
import { useSelector } from "react-redux"

const notePage =()=>{
    const params = useParams()
    const id = params?.id
      const user = useSelector((state: RootState) => state.user)
        if (!user) {
            return(
                <div className="w-full h-full mt-20 flex justify-center items-center font-bold">not Valid User</div>
            )
        }
    return(
        <div className="w-full h-full">
             <ParticularNote id={id?.toString() || ''}/>
        </div>
    )
}

export default notePage