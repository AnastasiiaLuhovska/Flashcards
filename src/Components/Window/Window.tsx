import s from './Window.module.css'
import FoldersList from "../FoldersList/FoldersList.tsx";
const Window = () => {
    return (
           <div className={s.windowWrapper}>
               <FoldersList/>
           </div>

    );
};

export default Window;