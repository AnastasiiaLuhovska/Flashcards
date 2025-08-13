import s from './AddWordButton.module.css'
import * as React from "react";
import {useDispatch} from "react-redux";
import {toggleFolderModal} from "../../redux/folders/slice.ts";
import {toggleWordModal} from "../../redux/words/slice.ts";
const AddButton: React.FC<{isOpen:string|undefined}> = ({isOpen}) => {
    const dispatch = useDispatch()
    const handleClick = ()=>{
        {isOpen?dispatch(toggleWordModal()): dispatch(toggleFolderModal())}
    }
    return (
        <div className={s.buttonWrapper} onClick={handleClick}>
            {isOpen? 'Add new word' : 'Add new folder'}
        </div>
    );
};

export default AddButton;