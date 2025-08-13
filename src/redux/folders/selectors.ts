import type {RootState} from "../store.ts";

export const folderSelector =(state: RootState)=> state.folders.folders
export const folderModalIsOpenSelector =(state: RootState)=> state.folders.folderModalIsOpen