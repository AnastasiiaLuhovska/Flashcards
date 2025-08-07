import s from './ModalWindow.module.css'
import * as React from "react";
import {useDispatch} from "react-redux";
import {addFolder} from "../../redux/folders/operations.ts";
import type {AppDispatch} from "../../redux/store.ts";
import {toggleModal} from "../../redux/folders/slice.ts";
const ModalWindow = () => {
    const dispatch: AppDispatch = useDispatch()
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
        const form =  e.target as HTMLFormElement
        const inputValue = form.elements.namedItem('folder') as HTMLInputElement
        dispatch(addFolder({name: inputValue.value}))
        dispatch(toggleModal())
}

const handleClick = ()=>{
    dispatch(toggleModal())
}

    return (
        <div className={s['window-wrapper']}>
            <form className={s.form} onSubmit={handleSubmit}>
                <label className={s.label}>
                    <p className={s.p}>Folder</p>
                    <input className={s.input} name='folder'/>
                </label>
                <div className={s['button-wrapper']}>
                <button className={s.button} type='button' onClick={handleClick}>Cancel</button>
                <button className={s.button}  type="submit" >Save</button>
                </div>
            </form>
        </div>
    );
};

export default ModalWindow;