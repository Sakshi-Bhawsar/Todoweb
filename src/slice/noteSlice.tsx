import { INote } from "@/components/ParticularNote/ParticularNote";
import { createSlice } from "@reduxjs/toolkit";

const initialState : INote[] =[]

export const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        allNotes: (state, action) => {
            return action.payload
        },
        addNote: (state, action) => {
            state.push(action.payload); // push one note
        },
        updateNoteStore: (state, action) => {
            const { _id, title, des } = action.payload
            console.log(action.payload,"store")
            const index = state.findIndex((note: any) => note._id == _id)
            if (index != -1) {
                state[index].title = title
                state[index].des = des
            }

        },
        removeNotes: (state, action) => {
            return state.filter((note: any) => note._id != action.payload)
        }

    }
})
export const { allNotes, addNote, removeNotes ,updateNoteStore} = noteSlice.actions
export default noteSlice.reducer;