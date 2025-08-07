import {configureStore} from "@reduxjs/toolkit";
import {foldersReducer} from "./folders/slice.ts";

 const store = configureStore({
    reducer:{
        folders: foldersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store