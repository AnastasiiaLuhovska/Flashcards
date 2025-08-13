import {createSlice} from "@reduxjs/toolkit";
import type {InitialWords} from "../../types.ts";
import {addWordByFolderID, getWordsByFolderId} from "./operations.ts";

const initialState: InitialWords = {
    folderName: '',
    words: [],
    error: null,
    isLoading: false,
    folderIsOpen: false,
    wordModalIsOpen: false
}
const slice = createSlice({
    name:'words',
    initialState,
    reducers:{
        toggleWordModal: (state)=>{
            state.wordModalIsOpen = (!state.wordModalIsOpen)
        }
    },
    extraReducers: ((builder)=>{
        builder.addCase(getWordsByFolderId.fulfilled, (state, action)=>{
            state.words = action.payload
            state.isLoading = false
            state.error = null
        })
            .addCase(getWordsByFolderId.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(getWordsByFolderId.rejected, (state, action)=>{
                state.error = action.payload
                state.isLoading=false
            })
            .addCase(addWordByFolderID.fulfilled, (state)=>{
                state.isLoading = false
                state.error = null
            })
            .addCase(addWordByFolderID.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(addWordByFolderID.rejected, (state, action)=>{
                state.error = action.payload
                state.isLoading=false
            })

    })
})

export const wordsReducer = slice.reducer
export const {toggleWordModal} = slice.actions