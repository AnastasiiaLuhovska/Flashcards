import s from './AddWordButton.module.css'
const AddWordButton: React.FC<{text:string}> = ({text}) => {

    const handleClick = ()=>{

    }
    return (
        <div className={s.buttonWrapper} onClick={handleClick}>
            {text}
        </div>
    );
};

export default AddWordButton;