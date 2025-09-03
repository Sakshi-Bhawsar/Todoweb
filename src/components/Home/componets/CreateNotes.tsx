'use client'

import { createNotes } from "@/queries/notes";
import { addNote } from "@/slice/noteSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CreateNotes = () => {
    const [notes, setNotes] = useState({
        title: '',
        des: ''
    })
    const[err,setError] = useState('')
    const dispatch = useDispatch()
    
    const onChange = (e: any) => {
        const { name, value } = e.target;
        setNotes((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleCancel =()=>{
          setNotes({
                title:'',
                des:''
            })
              setError('')
    }

    const handleCreateNote = async (title:string,des:string)=>{
         const res =  await createNotes(title,des)
         if(res?.sucess){
            dispatch( addNote({title,des}))
            setNotes({
                title:'',
                des:''
            })
            setError('')
         }else{
            setError(res?.meassage || 'something wrong try again leter')
         }
         console.log(res,"res--");
    }
    return (
        <div className=' flex flex-col mt-4 justify-center items-center'>
            <h1 className=" font-bold text-xl py-2.5">Add New Todo</h1>
            <div className=" border border-[#E0DCDC] shadow-md rounded-lg p-8">
                <input name="title" value={notes.title} placeholder="enter tittle...." className="border w-full rounded-md p-2 my-2 focus:outline-none focus:ring-2 focus:ring-green-200" onChange={onChange}></input>
                <textarea name="des" value={notes.des} rows={4} placeholder="write descripation.... " className="border w-full rounded-md my-2 p-2 focus:outline-none focus:ring-2 focus:ring-green-200" onChange={onChange} />
                <div className="my-4 flex w-full justify-center space-x-4">
                    <button className="px-6 py-2 rounded-lg bg-[#19B65F] hover:bg-[#1dce6d]  text-white cursor-pointer" onClick={()=>handleCreateNote(notes.title,notes.des)}>Create</button>
                    <button className="px-6 py-2 rounded-lg bg-[#878181] hover:bg-[#aca8a8] text-white cursor-pointer" onClick={handleCancel}>Cancle</button>
                </div>
                <p className="text-sm text-red-500 py-2">{err}</p>
            </div>
        </div>
    )
}

export default CreateNotes;