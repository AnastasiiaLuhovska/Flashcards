export interface Initial{
    folders: FolderType[],
    error: null| string|undefined,
    isLoading: boolean,
    modalIsOpen: boolean
}

export interface FolderType{
    name: string,
    _id: string
}