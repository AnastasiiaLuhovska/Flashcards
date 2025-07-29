import s from "../AddFolderButton/AddFolder.module.css";

const AddFolderButton = () => {
    const handleClick = ()=>{

    }
    return (
        <div className={s['icons-wrapper']} onClick={handleClick}>
            <div className={s['icon-folder-wrapper']}>
                <svg className={s.icon} width="90" height="63">
                    <use href='src/assets/symbol-defs.svg#icon-gray'/>
                </svg>
            </div>
            <div className={s['icon-plus-wrapper']}>
                <svg className={s['icon-plus']} width="20" height="20">
                    <use href='src/assets/symbol-defs.svg#icon-plus'/>
                </svg>
            </div>
        </div>

    );
};

export default AddFolderButton;