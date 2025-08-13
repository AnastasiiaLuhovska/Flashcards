import type {FolderType} from "../../types.ts";
import s from './Folder.module.css'
import {Link} from "react-router";
const Folder = ({folder}:{folder:FolderType}) => {

    return (
        <li>
            <Link to={`/deck/${folder['_id']}`} className={s.li} >
                <svg className={s['icon-wrapper']} ><use href={'/symbol-defs.svg#icon-folder'}></use></svg>
                <p className={s.p}>{folder.name}</p>
            </Link>

        </li>
    );
};

export default Folder;