import type {ActionCreatorWithoutPayload, AsyncThunkAction} from "@reduxjs/toolkit";

export interface Initial {
    folders: FolderType[],
    error: null | string | undefined,
    isLoading: boolean,
    folderModalIsOpen: boolean
}

export interface FolderType {
    name: string,
    _id: string
}

export interface Folder {
    name: string,

}


export interface InitialWords {
    folderName: string,
    words: WordType[],
    error: null | string | undefined,
    isLoading: boolean,
    folderIsOpen: boolean,
    wordModalIsOpen: boolean
}
export interface WordType{
    word: string,
    translation: string,
    _id: string,
    folderId: string
}

export interface Word{
    word: string,
    translation: string,
    folderId: string
}

export interface Props<Payload, ThunkArg >{
    fields: string[],
    fetchAction: (values: ThunkArg)=> AsyncThunkAction<Payload, ThunkArg, { rejectValue:string }>,
    toggleModal: ActionCreatorWithoutPayload<string>
    title: string
}

