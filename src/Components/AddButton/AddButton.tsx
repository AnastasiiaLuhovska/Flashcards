import s from './AddWordButton.module.css'
import * as React from "react";
import {useDispatch} from "react-redux";
import {toggleModal} from "../../redux/folders/slice.ts";
const AddButton: React.FC<{text:string}> = ({text}) => {
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(toggleModal())
    }
    return (
        <div className={s.buttonWrapper} onClick={handleClick}>
            {text}
        </div>
    );
};

export default AddButton;