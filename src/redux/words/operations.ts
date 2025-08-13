import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../../api/api.ts";
import type {Word, WordType} from "../../types.ts";
import {AxiosError} from "axios";

export const getWordsByFolderId = createAsyncThunk<WordType[], string|undefined, {rejectValue:string}>(
    'getWords',
    async(folderId, thunkAPI)=>{
        try{
            const {data} = await instance.get(`/folders/${folderId}`)
            return data.data
        }catch(e){
            if ( e instanceof AxiosError){
                return thunkAPI.rejectWithValue(e.message)
            }
            return thunkAPI.rejectWithValue('Something went wrong')
        }
    }
)

export const addWordByFolderID = createAsyncThunk<WordType, Word, {rejectValue: string}>('addWord', async(word, thunkAPI)=>{
    try{
        const {data} = await instance.post(`/folders/${word.folderId}`, word)
        return data.data
    }catch(e){
        if (e instanceof AxiosError){
           return thunkAPI.rejectWithValue(e.message)
        }
        return thunkAPI.rejectWithValue('Something went wrong')
    }
})