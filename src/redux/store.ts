import {configureStore} from "@reduxjs/toolkit";
import {foldersReducer} from "./folders/slice.ts";
import {wordsReducer} from "./words/slice.ts";

 const store = configureStore({
    reducer:{
        folders: foldersReducer,
        words: wordsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store