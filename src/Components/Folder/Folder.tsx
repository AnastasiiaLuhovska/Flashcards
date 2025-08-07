import type {FolderType} from "../../types.ts";
import s from './Folder.module.css'
const Folder = ({folder}:{folder:FolderType}) => {
    return (
        <li className={s.li}>
            <svg className={s['icon-wrapper']} width="85" height="60"><use href={'src/assets/symbol-defs.svg#icon-folder'}></use></svg>
            <p className={s.p}>{folder.name}</p>
        </li>
    );
};

export default Folder;