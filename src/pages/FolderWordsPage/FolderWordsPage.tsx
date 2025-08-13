import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch} from "../../redux/store.ts";
import {getWordsByFolderId} from "../../redux/words/operations.ts";
import {useParams} from "react-router";
import {getWordsSelector} from "../../redux/words/selectors.ts";
import Word from "../../Components/Word/Word.tsx";

const FolderWordsPage = () => {
    const {folderId} = useParams()
    const dispatch:AppDispatch= useDispatch()
    useEffect(()=>{
        const getWords = async()=>{
            dispatch(getWordsByFolderId(folderId))
        }
        getWords()
    }, [])

    const words = useSelector(getWordsSelector)
    return (
        <ul>
            {words.map((word)=> <li key={word['_id']}><Word word={word}></Word></li>)}
        </ul>
    );
};

export default FolderWordsPage;