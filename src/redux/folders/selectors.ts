import type {RootState} from "../store.ts";

export const folderSelector =(state: RootState)=> state.folders.folders
export const modalIsOpenSelector =(state: RootState)=> state.folders.modalIsOpen