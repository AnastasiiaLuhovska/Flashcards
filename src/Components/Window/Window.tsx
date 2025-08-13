import s from './Window.module.css'
import FoldersList from "../FoldersList/FoldersList.tsx";
import AddButton from "../AddButton/AddButton.tsx";
import { wordModalIsOpenSelector} from "../../redux/words/selectors.ts";
import {useSelector} from "react-redux";
import FolderWordsPage from "../../pages/FolderWordsPage/FolderWordsPage.tsx";
import AddWordModal from "../AddWordModal/AddWordModal.tsx";
import {folderModalIsOpenSelector} from "../../redux/folders/selectors.ts";
import AddFolderModal from "../AddFolderModal/AddFolderModal.tsx";
import {useParams} from "react-router";
const Window = () => {
    const wordModalIsOpen = useSelector(wordModalIsOpenSelector)
    const folderModalIsOpen = useSelector(folderModalIsOpenSelector)
    const {folderId} = useParams()

    return (
           <div className={s.windowWrapper}>
               {folderId ? <FolderWordsPage/> : <FoldersList/>}
               {folderId&&wordModalIsOpen&&<AddWordModal/>}
               {!folderId&&folderModalIsOpen&&<AddFolderModal/>}
               <AddButton isOpen ={folderId}/>
           </div>

    );
};

export default Window;