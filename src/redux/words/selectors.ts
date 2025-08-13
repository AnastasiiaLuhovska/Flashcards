import type {RootState} from "../store.ts";

export const getWordsSelector = (state:RootState)=> state.words.words
export const wordModalIsOpenSelector =(state: RootState)=> state.words.wordModalIsOpen