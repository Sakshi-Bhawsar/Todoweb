'use client'

import { deleteNotes, notesGet } from "@/queries/notes"
import { allNotes, removeNotes } from "@/slice/noteSlice"
import { RootState } from "@/store/store"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa"
import { MdAutoDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

const AllNotes = () => {
    const [notes, setNotes] = useState([])
    const Notes = useSelector((state:RootState)=>state.notes)
    const dispatch = useDispatch()
    const router = useRouter()
    
    useEffect(() => {
        const fetchNotes = async () => {
            const res = await notesGet();
            if (res?.sucess) {
                setNotes(res.notes)
                dispatch(allNotes(res.notes))
            }

            console.log(res, "res--")
        }
        fetchNotes();
    }, [])

    const deleteNote = async(noteId: string) => {

        const res = await deleteNotes(noteId)
        if(res?.sucess){
             dispatch(removeNotes(noteId))
        }
        console.log(res);
    }
    const updateNote =(noteId:string)=>{
       router.push(`/updateNote/${noteId}`)
    }
    console.log(notes, "notes")

    return (
        <div className=" w-full flex flex-col gap-4 justify-center items-center mt-10">
            { Notes.length == 0 || ! Notes ?
                <div> no notes is found please create a notes</div>
                :
                <>
                    { Notes && Notes?.map((notes: any, index: number) => (
                        <div key={index} className=" flex  items-center justify-between border rounded-lg p-2 w-1/2 cursor-pointer">
                            <Link href={`/notes/${notes._id}`} className="">

                                {notes?.title}
                            </Link>
                            <div className="flex items-center gap-2.5">
                                <FaEdit size={24} className=" text-yellow-300 cursor-pointer" onClick={()=>{updateNote(notes._id)}} />
                                <MdAutoDelete size={24} className=" text-red-600 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteNote(notes._id)
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </>

            }
        </div>
    )
}
export default AllNotes