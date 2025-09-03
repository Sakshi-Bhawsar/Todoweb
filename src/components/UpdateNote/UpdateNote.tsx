import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { INote } from "../ParticularNote/ParticularNote";
import { useState } from "react";
import { updateNotes } from "@/queries/notes";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { updateNoteStore } from "@/slice/noteSlice";

const UpdateNote = ({ noteId }: { noteId: string }) => {
    const notes: INote[] = useSelector((state: RootState) => state.notes)
    const Note = notes?.find((note: INote) => note._id.toString() == noteId)
    const dispatch = useDispatch()
    console.log(Note,"note")
    const [updateNote, setUpdateNote] = useState({
        title: Note?.title || '',
        des: Note?.des || '',
        msg:''
    })

    const onChange = (e: any) => {
        const { name, value } = e.target
        setUpdateNote((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleUpdate = async(title: string, des: string) => {
        const res = await updateNotes(noteId,title,des)
        if( res.sucess){
            dispatch(updateNoteStore({noteId,title,des}))
            setUpdateNote((prev)=>({
                ...prev,
                "msg":res.meassage
            }))
        }
        console.log(res,"res--")
    }
    // const handleCancle = () => {
    //     setUpdateNote({
    //         title: Note?.title || '',
    //         des: Note?.des || '',
    //         msg:''
    //     })
    // }
    return (
        <div>
            <div className=' flex flex-col mt-4 justify-center items-center'>
                <h1 className=" font-bold text-xl py-2.5">  Update Todo</h1>
                <div className=" border border-[#E0DCDC] shadow-md rounded-lg p-8">
                    <Link href={'/'} className=" hover:underline text-indigo-500 flex items-center gap-2  " > <IoArrowBack />Back</Link>
                    <input name="title" value={updateNote.title} placeholder="enter tittle...." className="border w-full rounded-md mt-5 p-2 my-2 focus:outline-none focus:ring-2 focus:ring-green-200" onChange={onChange}></input>
                    <textarea name="des" value={updateNote.des} rows={4} placeholder="write descripation.... " className="border w-full rounded-md my-2 p-2 focus:outline-none focus:ring-2 focus:ring-green-200" onChange={onChange} />
                    <div className="my-4 flex w-full justify-center space-x-4">
                        <button className={`px-6 py-2 rounded-lg bg-[#19B65F] hover:bg-[#1dce6d]  text-white cursor-pointer ${ Note?.title ==updateNote?.title && Note?.des == updateNote?.des ? " pointer-events-none  opacity-45 ":""}`} onClick={() => handleUpdate(updateNote.title, updateNote.des)}>Update</button>
                        {/* <button className="px-6 py-2 rounded-lg bg-[#878181] hover:bg-[#aca8a8] text-white cursor-pointer" onClick={handleCancle}>Cancle</button> */}
                    </div>
                    <p className={`text-sm text-green-500 py-2 ` }>{updateNote?.msg}</p>
                </div>
            </div>
        </div>
    )
}

export default UpdateNote;