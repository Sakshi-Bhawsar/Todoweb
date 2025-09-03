import axios from "axios"

export const notesGet = async () => {
    const endpoint = `${process.env.NEXT_PUBLIC_API_BASEURL}/api/notes/get`
    try {
        const res = await axios.get(endpoint, { withCredentials: true })
        console.log(res);
        return res.data;

    } catch (err) {
        console.log(err)

    }

}

export const createNotes = async ( title:string,des:String) => {
    try {
        const endpoint = `${process.env.NEXT_PUBLIC_API_BASEURL}/api/notes/create`
        const res = await axios.post(endpoint,{title,des},{withCredentials: true })
        console.log(res)
        if(!res){
            throw new Error("error while creating notes")
        }
        return res.data

    } catch (err:any) {
        console.log(err)
        return err?.response?.data
    }
}

export const updateNotes = async (noteId:string,title:string,des:string) => {
    try {
        const endpoint = `${process.env.NEXT_PUBLIC_API_BASEURL}/api/notes/update/${noteId}`
        const res = await axios.put(endpoint,{title,des},{withCredentials:true})
        if(!res){
            throw new Error("error while updating")
        }
        return  res.data

    } catch (err) {
        console.log(err)
    }
}

export const deleteNotes = async (noteId:string) => {
    try {
        const endpoint = `${process.env.NEXT_PUBLIC_API_BASEURL}/api/notes/delete/${noteId}`
         const res = await axios.delete(endpoint,{withCredentials:true})
         console.log(res,"res--")
        if(!res){
            throw new Error("error while deleting")
        }
        return res.data
    } catch (err) {
        console.log(err)
    }
}