'use client'

import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from '../slice/userSlice'
import notesSliceReducer from '../slice/noteSlice'

export const store =  configureStore({
    reducer:{
        user:userSliceReducer,
        notes:notesSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch