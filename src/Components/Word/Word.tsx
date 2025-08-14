import type {WordType} from "../../types.ts";
import s from './Word.module.css'
const Word = ({word}:{word:WordType}) => {
    return (
        <div className={s['word-wrapper']}>
            <div className={s['p-wrapper']}>
            <svg width='20' height='20'><use href='/symbol-defs.svg#icon-file'></use></svg>
            <p>{word.word} - {word.translation}</p>
            </div>
            <div className={s['svg-wrapper']}>
                <svg width='20' height='20'><use href='/symbol-defs.svg#icon-pencil'></use></svg>
            </div>
        </div>
    );
};

export default Word;