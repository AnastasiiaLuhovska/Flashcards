import s from './DeckPage.module.css'
import Title from "../../Components/Title/Title.tsx";
import Window from "../../Components/Window/Window.tsx";
import {useEffect} from "react";
import {getFolders} from "../../redux/folders/operations.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../redux/store.ts";
import {useClippy} from "@react95/clippy";
import {clippyAssistant} from "../../Components/ClippyAssistant/сlippyAssistant.ts";


const DeckPage = () => {
    const dispatch:AppDispatch = useDispatch()
    const { clippy } = useClippy();
    const {speak} = clippyAssistant(clippy)

    useEffect(()=>{
        const getData = async()=>{
            dispatch(getFolders())
        }
        getData()

       speak('To delete or edit folder press and hold the folder')

    }, [clippy])

    return (
        <div className={s.deckPageWrapper}>
                <Title text={'CREATE YOUR DECK'}/>
                <Window/>

        </div>
    );
};

export default DeckPage;