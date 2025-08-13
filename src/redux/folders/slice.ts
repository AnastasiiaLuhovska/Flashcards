import {createSlice} from "@reduxjs/toolkit";
import {addFolder, getFolders} from "./operations.ts";
import type {Initial} from "../../types.ts";

const initialState: Initial = {
    folders: [],
    error: null,
    isLoading: false,
    folderModalIsOpen: false
}

const slice = createSlice({
    name:"folders",
    initialState,
    reducers:{
        toggleFolderModal: (state)=>{
            state.folderModalIsOpen = (!state.folderModalIsOpen)
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getFolders.fulfilled, (state,action)=>{
            state.folders = action.payload
            state.isLoading = false
            state.error = null
        })
            .addCase(getFolders.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(getFolders.rejected, (state,action)=>{
                state.error = action.payload
                state.isLoading = false
            })
            .addCase(addFolder.fulfilled, (state, action)=>{
                state.folders.push(action.payload)
                state.isLoading = false
                state.error = null
            })
            .addCase(addFolder.pending, (state)=>{

                state.isLoading = true
            })
            .addCase(addFolder.rejected, (state, action)=>{
                state.error = action.payload
                state.isLoading = false
            })
    }
})

export const foldersReducer = slice.reducer
export const {toggleFolderModal} = slice.actions