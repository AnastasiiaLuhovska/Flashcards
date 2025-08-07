import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import type {FolderType} from "../../types.ts";

export const getFolders = createAsyncThunk<FolderType[], void, {rejectValue: string}>('getFolders', async(_, thunkAPI)=>{
          try{
                const {data} = await axios.get('https://flashcards-backend-1-b0wo.onrender.com/folders')
                return data.data
        }catch(e){
                if (e instanceof AxiosError){
                       return thunkAPI.rejectWithValue(e.message)

                }
                return thunkAPI.rejectWithValue("Something went wrong :(");

        }
})

export const addFolder = createAsyncThunk<FolderType, {name: string}, {rejectValue: string}>('addFolder', async(folder, thunkAPI)=>{
    try{
        const {data} = await axios.post('https://flashcards-backend-1-b0wo.onrender.com/folders', folder)
        return data.data
    }catch(e){
        if(e instanceof AxiosError){
            return thunkAPI.rejectWithValue(e.message)
        }
        return thunkAPI.rejectWithValue('Something went wrong')
    }
})