import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export interface INote{
      _id:string,
      title:string,
      des:string
}

const ParticularNote =({id}:{id:string})=>{
    const notes:INote[] = useSelector((state:RootState)=>state.notes)
    const note = notes.find((note:INote)=>note._id.toString() == id) 
    const router = useRouter()
    if(!note){
        return(
            <div>not note found</div>
        )
    }
    console.log(note,"pn")
    return(
        <div className=' flex flex-col mt-4 justify-center items-center w-full h-full'>
            <h1 className=" font-bold text-xl py-2.5">Notes Descripation</h1>
            <div className=" border border-[#E0DCDC] w-1/2   h-56  mt-7 shadow-md rounded-xl p-8">
                <p className=" text-lg py-2"><span className="font-bold">title: </span>  {note?.title?? ''}</p>
                <p className="text-sm py-2"><span className="font-bold">descripation: </span> {note?.des || ''}</p>
                <button  className="px-6 py-2 bg-orange-400 rounded-lg hover:shadow-md mt-9 cursor-pointer"onClick={()=>router.push("/")} >Back</button>
            </div>
        </div>
    )
}

export default ParticularNote;