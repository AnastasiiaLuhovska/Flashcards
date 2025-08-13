import {createAsyncThunk} from "@reduxjs/toolkit";
import  {AxiosError} from "axios";
import type {Folder, FolderType} from "../../types.ts";
import {instance} from "../../api/api.ts";

export const getFolders = createAsyncThunk<FolderType[], void, {rejectValue: string}>('getFolders', async(_, thunkAPI)=>{
          try{
                const {data} = await instance.get('/folders')
                return data.data
        }catch(e){
                if (e instanceof AxiosError){
                       return thunkAPI.rejectWithValue(e.message)

                }
                return thunkAPI.rejectWithValue("Something went wrong :(");

        }
})

export const addFolder = createAsyncThunk<FolderType, Folder, {rejectValue: string}>('addFolder', async(folder, thunkAPI)=>{
    try{
        const {data} = await instance.post('/folders', folder)
        return data.data
    }catch(e){
        if(e instanceof AxiosError){
            return thunkAPI.rejectWithValue(e.message)
        }
        return thunkAPI.rejectWithValue('Something went wrong')
    }
})