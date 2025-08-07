import s from './DeckPage.module.css'
import Title from "../../Components/Title/Title.tsx";
import Window from "../../Components/Window/Window.tsx";
import {useEffect} from "react";
import {getFolders} from "../../redux/folders/operations.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch} from "../../redux/store.ts";
import {modalIsOpenSelector} from "../../redux/folders/selectors.ts";
import ModalWindow from "../../Components/ModalWindow/ModalWindow.tsx";

const DeckPage = () => {
    const dispatch:AppDispatch = useDispatch()
    const modalIsOpen = useSelector(modalIsOpenSelector)

    useEffect(()=>{
        const getData = async()=>{
            dispatch(getFolders())
        }
        getData()
    }, [])

    return (
        <div className={s.deckPageWrapper}>
                <Title text={'CREATE YOUR DECK'}/>
                <Window/>
                {modalIsOpen&&<ModalWindow/>}
        </div>
    );
};

export default DeckPage;