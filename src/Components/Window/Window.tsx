import s from './Window.module.css'
import FoldersList from "../FoldersList/FoldersList.tsx";
import AddButton from "../AddButton/AddButton.tsx";
const Window = () => {
    return (
           <div className={s.windowWrapper}>
               <FoldersList/>
               <AddButton text={"Add new folder"}/>
           </div>

    );
};

export default Window;