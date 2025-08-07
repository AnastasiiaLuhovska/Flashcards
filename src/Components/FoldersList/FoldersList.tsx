import {useSelector} from "react-redux";
import {folderSelector} from "../../redux/folders/selectors.ts";
import s from './FoldersList.module.css'
import Folder from "../Folder/Folder.tsx";
const FoldersList = () => {

    const folders = useSelector(folderSelector)


    return (
        <div className={s['folders-wrapper']}>
            <ul className={s.li}>{folders.map((folder) => <Folder key={folder['_id']} folder={folder}/>)}</ul>
        </div>


    );
};

export default FoldersList;